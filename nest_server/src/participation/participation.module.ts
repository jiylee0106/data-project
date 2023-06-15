import { Module } from '@nestjs/common';
import { ParticipationController } from './participation.controller';
import { ParticipationService } from './participation.service';
import { ParticipationRepository } from './participation.repository';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ParticipationController],
  providers: [ParticipationService, ParticipationRepository, PrismaService],
})
export class ParticipationModule {}
