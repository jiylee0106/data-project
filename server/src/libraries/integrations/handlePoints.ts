import { Method, PointsLog } from "@prisma/client";
import CollectionRepository from "@src/repository/collection.repository";
import PointRepository from "@src/repository/point.repository";
import { Inject, Service } from "typedi";
import { getRandomAnimal } from "../utils/getRandomAnimal";

@Service()
class HandlePoint {
  @Inject() private readonly pointRepository: PointRepository;
  @Inject() private readonly collectionRepository: CollectionRepository;

  async getPoints(user_id: number) {
    const pointsLog = await this.pointRepository.getPointsLog(user_id);

    const totalPoints = pointsLog.reduce((total, log) => {
      if (log.action_type === "Earned") {
        return total + log.points;
      } else {
        return total - log.points;
      }
    }, 0);

    return totalPoints;
  }

  async earnPoints(
    data: Pick<PointsLog, "userId" | "action_type" | "method">
  ): Promise<{ message: string }> {
    const points = definePoints(data.method);
    const current_point = await this.getPoints(data.userId);
    if (current_point + points > 9999)
      throw { status: 403, message: "포인트를 더이상 획득하실 수 없습니다" };
    await this.pointRepository.putPointsLog({ ...data, points });
    return { message: "포인트 적립에 성공하였습니다" };
  }

  async spendPoints(
    data: Pick<PointsLog, "userId" | "action_type" | "method">
  ): Promise<{ message: string }> {
    const { userId } = data;
    const points = definePoints(data.method);
    const current_point = await this.getPoints(userId);
    if (current_point < points)
      throw { status: 403, message: "포인트가 부족합니다" };
    await this.pointRepository.putPointsLog({ ...data, points });

    const current_collection = await this.collectionRepository.getAllCollection(
      userId
    );

    const random_animal = getRandomAnimal(current_collection);
    await this.collectionRepository.putCollectedSpecies({
      userId,
      animal_id: random_animal,
    });

    return { message: "포인트 사용에 성공하였습니다" };
  }
}

const definePoints = (method: Method) => {
  let points = 0;
  if (
    method === "Watched_Data" ||
    "Participation" ||
    "Watched_Daily_Species1" ||
    "Watched_Daily_Species2" ||
    "Watched_Daily_Species3" ||
    "Watched_Daily_Species4"
  ) {
    points = 1;
  } else if (method === "Watched_Video1" || "Watched_Video2") {
    points = 3;
  } else if (
    method === "Joined_Campaign1" ||
    "Joined_Campaign2" ||
    "Joined_Campaign3" ||
    "Draw_Degree2"
  ) {
    points = 5;
  } else if (method === "Draw_Degree1") {
    points = 15;
  }

  return points;
};

export default HandlePoint;
