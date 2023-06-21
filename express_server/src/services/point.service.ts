import { PointsLog } from "@prisma/client";
import { MessageResponseDto } from "@src/dto/global.dto";
import { getPointResponseDto } from "@src/dto/point.dto";
import HandlePoint from "@src/libraries/integrations/handlePoints";
import PointRepository from "@src/repository/point.repository";
import { Inject, Service } from "typedi";

@Service()
class PointService {
  @Inject() private readonly handlePoint: HandlePoint;
  @Inject() private readonly pointRepository: PointRepository;

  async getPointService(user_id: number): Promise<getPointResponseDto> {
    const point = await this.handlePoint.getPoints(user_id);
    return { point };
  }

  async getAllLogService(user_id: number): Promise<{ logs: PointsLog[] }> {
    const logs = await this.pointRepository.getPointsLog(user_id);
    return { logs };
  }

  async getCampaignLogService(user_id: number): Promise<{ logs: PointsLog[] }> {
    const logs = await this.pointRepository.getCampaignLog(user_id);
    return { logs };
  }

  async getDailyEventsLogService(
    user_id: number
  ): Promise<{ logs: PointsLog[] }> {
    const logs = await this.pointRepository.getDailyEventsLog(user_id);
    return { logs };
  }

  async putPointService(
    data: Pick<PointsLog, "userId" | "action_type" | "method">
  ): Promise<MessageResponseDto> {
    if (data.action_type === "Earned") {
      return await this.handlePoint.earnPoints(data);
    } else {
      return await this.handlePoint.spendPoints(data);
    }
  }
}

export default PointService;
