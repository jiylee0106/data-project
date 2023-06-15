import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PointsLog } from '@prisma/client';

@Injectable()
export class PointRepository {
  constructor(private prisma: PrismaService) {}

  async getPointsLog(user_id: number): Promise<PointsLog[]> {
    const result = await this.prisma.pointsLog.findMany({
      where: { userId: user_id },
    });
    return result;
  }

  async getCampaignLog(user_id: number): Promise<PointsLog[]> {
    return await this.prisma.pointsLog.findMany({
      where: {
        userId: user_id,
        OR: [
          { method: 'Joined_Campaign1' },
          { method: 'Joined_Campaign2' },
          { method: 'Joined_Campaign3' },
        ],
      },
    });
  }

  async getDailyEventsLog(user_id: number): Promise<PointsLog[]> {
    const today = new Date();
    const dateString = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;

    return await this.prisma.pointsLog.findMany({
      where: {
        userId: user_id,
        action_type: 'Earned',
        NOT: [
          { method: 'Joined_Campaign1' },
          { method: 'Joined_Campaign2' },
          { method: 'Joined_Campaign3' },
        ],
        event_date: {
          gte: new Date(dateString),
          lt: new Date(new Date(dateString).getTime() + 24 * 60 * 60 * 1000),
        },
      },
    });
  }

  async putPointsLog(
    data: Pick<PointsLog, 'userId' | 'points' | 'action_type' | 'method'>,
  ): Promise<PointsLog> {
    console.log(data);
    return await this.prisma.pointsLog.create({
      data,
    });
  }

  async rollbackPointsLog(id: number): Promise<void> {
    await this.prisma.pointsLog.delete({
      where: { id },
    });
  }
}
