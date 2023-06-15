import { Module } from '@nestjs/common';
import { PointController } from './point.controller';
import { PointService } from './point.service';
import { PointRepository } from './point.repository';
import HandlePoint from '../libraries/integrations/HandlePoints';
import { PrismaService } from '../prisma.service';
import { CollectionModule } from '../collection/collection.module';
import { CollectionRepository } from '../collection/collection.repository';

@Module({
  imports: [CollectionModule],
  controllers: [PointController],
  providers: [
    PointService,
    PointRepository,
    HandlePoint,
    PrismaService,
    CollectionRepository,
  ],
})
export class PointModule {}
