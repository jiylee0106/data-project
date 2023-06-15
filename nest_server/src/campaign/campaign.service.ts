import { Injectable } from '@nestjs/common';
import { CampaignRepository } from './campaign.repository';
import { Campaign } from '@prisma/client';
import { ContentRepository } from '../content/content.repository';

@Injectable()
export class CampaignService {
  constructor(
    private readonly campaignRepository: CampaignRepository,
    private readonly contentRepository: ContentRepository,
  ) {}

  async putCampaignService(
    campaign: Pick<Campaign, 'type' | 'title' | 'description' | 'image_link'>,
  ) {
    await this.campaignRepository.putCampaign(campaign);
    return { message: '캠페인이 추가되었습니다' };
  }

  async patchCampaignService(
    campaign: Pick<Campaign, 'type' | 'title' | 'description' | 'image_link'>,
  ) {
    await this.campaignRepository.patchCampaign(campaign);
    return { message: '캠페인이 수정되었습니다' };
  }

  async getCampaignService(): Promise<Campaign[]> {
    return await this.contentRepository.getCampaign();
  }

  async deleteCampaignService(id: number) {
    await this.campaignRepository.deleteCampaign(id);
    return { message: '캠페인이 삭제되었습니다' };
  }
}
