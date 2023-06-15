import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('/video')
  async getSelectedVideos() {
    const result = await this.contentService.getSelectedVideoService();
    return result;
  }

  @Get('/participation')
  async getSelectedParticipation() {
    const result = await this.contentService.getSelectedParticipationService();
    return result;
  }

  @Get('/news')
  async getNews() {
    const result = await this.contentService.getNewsService();
    return result;
  }

  @Get('/campaign')
  async getCampaigns() {
    const result = await this.contentService.getCampaignService();
    return result;
  }
}
