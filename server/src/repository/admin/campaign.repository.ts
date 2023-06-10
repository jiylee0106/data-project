import { Service } from "typedi";
import { Campaign, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class CampaignRepository {
  async putCampaign(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ): Promise<void> {
    await prisma.campaign.create({ data: campaign });
  }

  async patchCampaign(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ): Promise<void> {
    const { type, title, description, image_link } = campaign;
    await prisma.campaign.update({
      where: { type },
      data: { title, description, image_link },
    });
  }
}

export default CampaignRepository;
