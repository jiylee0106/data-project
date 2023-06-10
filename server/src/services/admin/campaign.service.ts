import { Service, Inject } from "typedi";
import { Campaign } from "@prisma/client";
import ContentRepository from "@src/repository/content.repository";
import CampaignRepository from "@src/repository/admin/campaign.repository";

@Service()
class CampaignService {
  @Inject() private readonly campaignRepository: CampaignRepository;
  @Inject() private readonly contentRepository: ContentRepository;

  async putCampaignService(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ) {
    await this.campaignRepository.putCampaign(campaign);
  }

  async patchCampaignService(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ) {
    await this.campaignRepository.patchCampaign(campaign);
  }
  async getCampaignService() {
    return await this.contentRepository.getCampaign();
  }
}

export default CampaignService;
