import { PointsLog } from '@prisma/client';
import { getRandomAnimal } from '../utils/getRandomAnimal';
import { setPoints } from '../utils/setPoints';
import { HttpException, Injectable } from '@nestjs/common';
import { PointRepository } from '../../point/point.repository';
import { CollectionRepository } from '../../collection/collection.repository';
import { PrismaService } from '../../prisma.service';

@Injectable()
class HandlePoint {
  constructor(
    private readonly pointRepository: PointRepository,
    private readonly collectionRepository: CollectionRepository,
    private readonly prisma: PrismaService,
  ) {}

  async getPoints(user_id: number) {
    const pointsLog = await this.pointRepository.getPointsLog(user_id);

    const totalPoints = pointsLog.reduce((total, log) => {
      if (log.action_type === 'Earned') {
        return total + log.points;
      } else {
        return total - log.points;
      }
    }, 0);

    return totalPoints;
  }

  async earnPoints(
    data: Pick<PointsLog, 'userId' | 'action_type' | 'method'>,
  ): Promise<{ message: string }> {
    return await this.prisma.$transaction(async () => {
      const points = setPoints(data.method);
      const current_point = await this.getPoints(data.userId);
      if (current_point + points > 9999)
        throw new HttpException('포인트를 더이상 획득하실 수 없습니다', 403);

      const logResult = await this.pointRepository.putPointsLog({
        ...data,
        points,
      });

      const dailyLogs = await this.pointRepository.getDailyEventsLog(
        data.userId,
      );
      const findLogs = dailyLogs.filter((item) => item.method === data.method);

      if (findLogs.length > 1) {
        await this.pointRepository.rollbackPointsLog(logResult.id);
        throw new HttpException('하루에 한번만 가능합니다', 403);
      }

      return { message: '포인트 적립에 성공하였습니다' };
    });
  }

  async spendPoints(
    data: Pick<PointsLog, 'userId' | 'action_type' | 'method'>,
  ): Promise<{ message: string }> {
    return await this.prisma.$transaction(async () => {
      const { userId } = data;
      const points = setPoints(data.method);
      const initial_point = await this.getPoints(userId);
      if (initial_point < points)
        throw new HttpException('포인트가 부족합니다', 403);

      const logResult = await this.pointRepository.putPointsLog({
        ...data,
        points,
      });

      const final_point = await this.getPoints(userId);
      if (final_point !== initial_point - points) {
        await this.pointRepository.rollbackPointsLog(logResult.id);
        throw new HttpException('포인트 사용 충돌', 409);
      }

      const current_collection =
        await this.collectionRepository.getAllCollection(userId);

      const random_animal = await getRandomAnimal(
        current_collection,
        data.method,
      );
      await this.collectionRepository.putCollectedSpecies({
        userId,
        animal_id: random_animal,
      });

      return { message: '포인트 사용에 성공하였습니다' };
    });
  }
}

export default HandlePoint;
