import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsRepository } from './news.repository';
import { ContentRepository } from '../../content/content.repository';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, NewsRepository, ContentRepository, PrismaService],
})
export class NewsModule {}
