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

@Controller('admin/campaign')
@UseGuards(JwtAuthGuard, AdminGuard)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  async getCampaign() {
    return this.campaignService.getCampaignService();
  }

  @Post()
  async createCampaign(@Body() body: any) {
    return this.campaignService.putCampaignService(body);
  }

  @Patch()
  async updateCampaign(@Body() body: any) {
    return this.campaignService.patchCampaignService(body);
  }

  @Delete(':id')
  async deleteCampaign(@Param('id') id: string) {
    return this.campaignService.deleteCampaignService(Number(id));
  }
}
