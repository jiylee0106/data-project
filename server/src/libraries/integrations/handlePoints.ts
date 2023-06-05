import { PointsLog } from "@prisma/client";
import PointRepository from "@src/repository/point.repository";
import { Inject, Service } from "typedi";

@Service()
class HandlePoint {
  @Inject() private readonly pointRepository: PointRepository;

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
    data: Pick<PointsLog, "userId" | "points" | "action_type" | "method">
  ): Promise<{ message: string }> {
    const current_point = await this.getPoints(data.userId);
    if (current_point + data.points > 9999)
      throw { status: 403, message: "포인트를 더이상 획득하실 수 없습니다" };
    await this.pointRepository.putPointsLog(data);
    return { message: "포인트 적립에 성공하였습니다" };
  }

  async spendPoints(
    data: Pick<PointsLog, "userId" | "points" | "action_type" | "method">
  ): Promise<{ message: string }> {
    const current_point = await this.getPoints(data.userId);
    if (current_point < data.points)
      throw { status: 403, message: "포인트가 부족합니다" };
    await this.pointRepository.putPointsLog(data);
    return { message: "포인트 사용에 성공하였습니다" };
  }
}

export default HandlePoint;
