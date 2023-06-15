import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Campaign, News, Participation, Video } from '@prisma/client';

@Injectable()
export class ContentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getSelectedVideo(): Promise<Video | null> {
    const result = await this.prisma.video.findFirst({
      where: { is_selected: 1 },
    });
    return result;
  }

  async getSelectedParticipation(): Promise<Participation | null> {
    const result = await this.prisma.participation.findFirst({
      where: { is_selected: 1 },
    });
    return result;
  }

  async getNews(): Promise<News[]> {
    const result = await this.prisma.news.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return result;
  }

  async getCampaign(): Promise<Campaign[]> {
    const result = await this.prisma.campaign.findMany();

    return result;
  }
}
