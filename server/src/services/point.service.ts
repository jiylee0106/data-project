import { PointsLog } from "@prisma/client";
import HandlePoint from "@src/libraries/integrations/handlePoints";
import PointRepository from "@src/repository/point.repository";
import { Inject, Service } from "typedi";

@Service()
class PointService {
  @Inject() private readonly handlePoint: HandlePoint;
  @Inject() private readonly pointRepository: PointRepository;

  async getPointService(user_id: number): Promise<number> {
    return await this.handlePoint.getPoints(user_id);
  }

  async getCampaignLogService(user_id: number): Promise<PointsLog[]> {
    return await this.pointRepository.getCampaignLog(user_id);
  }

  async getDailyEventsLogService(user_id: number): Promise<PointsLog[]> {
    return await this.pointRepository.getDailyEventsLog(user_id);
  }

  async putPointService(
    data: Pick<PointsLog, "userId" | "action_type" | "method">
  ): Promise<{ message: string }> {
    if (data.action_type === "Earned") {
      return await this.handlePoint.earnPoints(data);
    } else {
      return await this.handlePoint.spendPoints(data);
    }
  }
}

export default PointService;
