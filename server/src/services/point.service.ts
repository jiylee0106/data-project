import { PointsLog } from "@prisma/client";
import HandlePoint from "@src/libraries/integrations/handlePoints";
import { Inject, Service } from "typedi";
import PointRepository from "@src/repository/point.repository";

@Service()
class PointService {
  @Inject() private readonly handlePoint: HandlePoint;
  @Inject() private readonly pointRepository: PointRepository;

  async getPointService(user_id: number) {
    const pointsLog = await this.pointRepository.getPointsLog(user_id);

    const totalPoints = pointsLog.reduce((total, log) => {
      if (log.action_type === "Earned") {
        return total + log.points;
      } else if (log.action_type === "Spent") {
        return total - log.points;
      } else {
        return total;
      }
    }, 0);

    return totalPoints;
  }

  async putPointService(
    data: Pick<PointsLog, "userId" | "points" | "action_type" | "method">
  ) {
    if (data.action_type === "Earned") {
      await this.handlePoint.earnPoints(data);
    }
    if (data.action_type === "Spent") {
      await this.handlePoint.spendPoints(data);
    }
  }
}

export default PointService;
