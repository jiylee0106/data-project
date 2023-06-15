import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';
import { GetVideoResponseDto } from 'src/admin/video/dto/video.response.dto';
import { GetParticipationResponseDto } from 'src/admin/participation/dto/participation.response.dto';
import { GetNewsResponseDto } from 'src/admin/news/dto/news.response.dto';
import { GetCampaignResponseDto } from 'src/admin/campaign/dto/campaign.response.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('/video')
  async getSelectedVideos(): Promise<GetVideoResponseDto> {
    const result = await this.contentService.getSelectedVideoService();
    return result;
  }

  @Get('/participation')
  async getSelectedParticipation(): Promise<GetParticipationResponseDto> {
    const result = await this.contentService.getSelectedParticipationService();
    return result;
  }

  @Get('/news')
  async getNews(): Promise<GetNewsResponseDto[]> {
    const result = await this.contentService.getNewsService();
    return result;
  }

  @Get('/campaign')
  async getCampaigns(): Promise<GetCampaignResponseDto[]> {
    const result = await this.contentService.getCampaignService();
    return result;
  }
}
