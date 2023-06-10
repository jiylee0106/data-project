import { Service, Inject } from "typedi";
import { Campaign } from "@prisma/client";
import ContentRepository from "@src/repository/content.repository";
import CampaignRepository from "@src/repository/admin/campaign.repository";
import { MessageResponseDto } from "@src/dto/global.dto";

@Service()
class CampaignService {
  @Inject() private readonly campaignRepository: CampaignRepository;
  @Inject() private readonly contentRepository: ContentRepository;

  async putCampaignService(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ): Promise<MessageResponseDto> {
    await this.campaignRepository.putCampaign(campaign);
    return { message: "캠페인이 추가되었습니다" };
  }

  async patchCampaignService(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ): Promise<MessageResponseDto> {
    await this.campaignRepository.patchCampaign(campaign);
    return { message: "캠페인이 수정되었습니다" };
  }

  async getCampaignService() {
    return await this.contentRepository.getCampaign();
  }

  async deleteCampaignService(id: number): Promise<MessageResponseDto> {
    await this.campaignRepository.deleteCampaign(id);
    return { message: "캠페인이 삭제되었습니다" };
  }
}

export default CampaignService;
