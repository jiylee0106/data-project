import { PointsLog } from "@prisma/client";
import HandlePoint from "@src/libraries/integrations/handlePoints";
import { Inject, Service } from "typedi";
import PointRepository from "@src/repository/point.repository";

@Service()
class PointService {
  @Inject() private readonly handlePoint: HandlePoint;

  async getPointService(user_id: number): Promise<number> {
    return await this.handlePoint.getPoints(user_id);
  }

  async putPointService(
    data: Pick<PointsLog, "userId" | "points" | "action_type" | "method">
  ): Promise<{ message: string }> {
    if (data.action_type === "Earned") {
      return await this.handlePoint.earnPoints(data);
    } else {
      return await this.handlePoint.spendPoints(data);
    }
  }
}

export default PointService;
