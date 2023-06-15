import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';
import { GetVideoResponseDto } from 'src/admin/video/dto/video.response.dto';
import { GetParticipationResponseDto } from 'src/admin/participation/dto/participation.response.dto';
import { GetNewsResponseDto } from 'src/admin/news/dto/news.response.dto';
import { GetCampaignResponseDto } from 'src/admin/campaign/dto/campaign.response.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Content')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @ApiOperation({ summary: '현재 영상 제공' })
  @Get('/video')
  async getSelectedVideos(): Promise<GetVideoResponseDto> {
    const result = await this.contentService.getSelectedVideoService();
    return result;
  }

  @ApiOperation({ summary: '현재 동참 제공' })
  @Get('/participation')
  async getSelectedParticipation(): Promise<GetParticipationResponseDto> {
    const result = await this.contentService.getSelectedParticipationService();
    return result;
  }

  @ApiOperation({ summary: '뉴스 목록 제공' })
  @Get('/news')
  async getNews(): Promise<GetNewsResponseDto[]> {
    const result = await this.contentService.getNewsService();
    return result;
  }

  @ApiOperation({ summary: '캠페인 목록 제공' })
  @Get('/campaign')
  async getCampaigns(): Promise<GetCampaignResponseDto[]> {
    const result = await this.contentService.getCampaignService();
    return result;
  }
}
