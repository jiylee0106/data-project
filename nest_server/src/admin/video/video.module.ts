import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';
import { VideoRepository } from './video.repository';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [VideoController],
  providers: [VideoService, VideoRepository, PrismaService],
})
export class VideoModule {}
