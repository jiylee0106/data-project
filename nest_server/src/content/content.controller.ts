import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';
import { GetVideoResponseDto } from '../admin/video/dto/video.response.dto';
import { GetParticipationResponseDto } from '../admin/participation/dto/participation.response.dto';
import { GetNewsResponseDto } from '../admin/news/dto/news.response.dto';
import { GetCampaignResponseDto } from '../admin/campaign/dto/campaign.response.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetCampaignResponse,
  GetNewsResponse,
  GetParticipationResponse,
  GetVideoResponse,
} from '../docs/content/content.swagger';

@ApiTags('Content')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @ApiOperation({ summary: '현재 영상 제공' })
  @ApiResponse(GetVideoResponse)
  @Get('/video')
  async getSelectedVideos(): Promise<GetVideoResponseDto> {
    const result = await this.contentService.getSelectedVideoService();
    return result;
  }

  @ApiOperation({ summary: '현재 동참 제공' })
  @ApiResponse(GetParticipationResponse)
  @Get('/participation')
  async getSelectedParticipation(): Promise<GetParticipationResponseDto> {
    const result = await this.contentService.getSelectedParticipationService();
    return result;
  }

  @ApiOperation({ summary: '뉴스 목록 제공' })
  @ApiResponse(GetNewsResponse)
  @Get('/news')
  async getNews(): Promise<GetNewsResponseDto[]> {
    const result = await this.contentService.getNewsService();
    return result;
  }

  @ApiOperation({ summary: '캠페인 목록 제공' })
  @ApiResponse(GetCampaignResponse)
  @Get('/campaign')
  async getCampaigns(): Promise<GetCampaignResponseDto[]> {
    const result = await this.contentService.getCampaignService();
    return result;
  }
}
