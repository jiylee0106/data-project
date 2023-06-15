import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { ContentRepository } from './content.repository';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [ContentService, ContentRepository, PrismaService],
  controllers: [ContentController],
})
export class ContentModule {}
