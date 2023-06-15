import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { JwtAuthGuard } from 'src/auth/passport/jwt.guard';
import { AdminGuard } from 'src/auth/passport/admin.guard';
import {
  CreateCampaignRequestDto,
  UpdateCampaignRequestDto,
} from './dto/campaign.request.dto';
import { MessageResponseDto } from '../../app.dto';
import { GetCampaignResponseDto } from './dto/campaign.response.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('admin/campaign')
@UseGuards(JwtAuthGuard, AdminGuard)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @ApiOperation({ summary: '캠페인 목록 제공' })
  @Get()
  async getCampaign(): Promise<GetCampaignResponseDto[]> {
    return this.campaignService.getCampaignService();
  }

  @ApiOperation({ summary: '캠페인 생성' })
  @HttpCode(201)
  @Post()
  async createCampaign(
    @Body() body: CreateCampaignRequestDto,
  ): Promise<MessageResponseDto> {
    return this.campaignService.putCampaignService(body);
  }

  @ApiOperation({ summary: '캠페인 수정' })
  @Patch()
  async updateCampaign(
    @Body() body: UpdateCampaignRequestDto,
  ): Promise<MessageResponseDto> {
    return this.campaignService.patchCampaignService(body);
  }

  @ApiOperation({ summary: '캠페인 삭제' })
  @HttpCode(204)
  @Delete(':id')
  async deleteCampaign(@Param('id') id: string): Promise<MessageResponseDto> {
    return this.campaignService.deleteCampaignService(Number(id));
  }
}
