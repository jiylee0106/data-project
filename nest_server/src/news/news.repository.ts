import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { News } from '@prisma/client';

@Injectable()
export class NewsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async putNews(
    news: Pick<News, 'title' | 'description' | 'link' | 'image_link'>,
  ): Promise<void> {
    await this.prisma.news.create({ data: news });
  }

  async patchNews(
    id: number,
    data: Pick<News, 'title' | 'description' | 'link' | 'image_link'>,
  ): Promise<void> {
    const { title, description, link, image_link } = data;
    await this.prisma.news.update({
      where: { id },
      data: { title, description, link, image_link },
    });
  }

  async deleteNews(id: number): Promise<void> {
    await this.prisma.news.delete({ where: { id } });
  }
}
