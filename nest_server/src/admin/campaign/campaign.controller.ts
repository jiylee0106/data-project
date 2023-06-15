import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
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

@Controller('admin/campaign')
@UseGuards(JwtAuthGuard, AdminGuard)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  async getCampaign(): Promise<GetCampaignResponseDto[]> {
    return this.campaignService.getCampaignService();
  }

  @Post()
  async createCampaign(
    @Body() body: CreateCampaignRequestDto,
  ): Promise<MessageResponseDto> {
    return this.campaignService.putCampaignService(body);
  }

  @Patch()
  async updateCampaign(
    @Body() body: UpdateCampaignRequestDto,
  ): Promise<MessageResponseDto> {
    return this.campaignService.patchCampaignService(body);
  }

  @Delete(':id')
  async deleteCampaign(@Param('id') id: string): Promise<MessageResponseDto> {
    return this.campaignService.deleteCampaignService(Number(id));
  }
}
