import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller('campaign')
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
