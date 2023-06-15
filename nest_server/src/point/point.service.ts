import { Injectable } from '@nestjs/common';
import { PointRepository } from './point.repository';

@Injectable()
export class PointService {
  constructor(private readonly pointRepository: PointRepository
    private readonly handlePoint: Hand
    ) {}

  async getPointService(user_id: number) {
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
    user_id: number,
  ): Promise<{ logs: PointsLog[] }> {
    const logs = await this.pointRepository.getDailyEventsLog(user_id);
    return { logs };
  }

  async putPointService(
    data: Pick<PointsLog, 'userId' | 'action_type' | 'method'>,
  ): Promise<MessageResponseDto> {
    if (data.action_type === 'Earned') {
      return await this.handlePoint.earnPoints(data);
    } else {
      return await this.handlePoint.spendPoints(data);
    }
  }
}
