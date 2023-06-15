import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { CampaignRepository } from './campaign.repository';
import { ContentRepository } from '../../content/content.repository';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [CampaignController],
  providers: [
    CampaignService,
    CampaignRepository,
    ContentRepository,
    PrismaService,
  ],
})
export class CampaignModule {}
