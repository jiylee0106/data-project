import { Injectable } from '@nestjs/common';
import { ContentRepository } from './content.repository';
import { Campaign, News, Participation, Video } from '@prisma/client';

@Injectable()
export class ContentService {
  constructor(private readonly contentRepository: ContentRepository) {}

  async getSelectedVideoService(): Promise<Video | null> {
    return await this.contentRepository.getSelectedVideo();
  }

  async getSelectedParticipationService(): Promise<Participation | null> {
    return await this.contentRepository.getSelectedParticipation();
  }

  async getNewsService(): Promise<News[]> {
    return await this.contentRepository.getNews();
  }

  async getCampaignService(): Promise<Campaign[]> {
    return await this.contentRepository.getCampaign();
  }
}
