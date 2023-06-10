import { Service, Inject } from "typedi";
import AdminRepository from "@src/repository/admin.repository";
import { Campaign } from "@prisma/client";
import ContentRepository from "@src/repository/content.repository";

@Service()
class CampaignService {
  @Inject() private readonly adminRepository: AdminRepository;
  @Inject() private readonly contentRepository: ContentRepository;

  async putCampaignService(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ) {
    await this.adminRepository.putCampaign(campaign);
  }

  async patchCampaignService(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ) {
    await this.adminRepository.patchCampaign(campaign);
  }
  async getCampaignService() {
    return await this.contentRepository.getCampaign();
  }
}

export default CampaignService;
