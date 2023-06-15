import { Injectable } from '@nestjs/common';
import { PointRepository } from './point.repository';
import HandlePoint from '../libraries/integrations/HandlePoints';
import { PointsLog } from '@prisma/client';

@Injectable()
export class PointService {
  constructor(
    private readonly pointRepository: PointRepository,
    private readonly handlePoint: HandlePoint,
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
  ) {
    if (data.action_type === 'Earned') {
      return await this.handlePoint.earnPoints(data);
    } else {
      return await this.handlePoint.spendPoints(data);
    }
  }
}
