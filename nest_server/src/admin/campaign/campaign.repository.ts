import { Injectable } from '@nestjs/common';
import { Campaign } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CampaignRepository {
  constructor(private readonly prisma: PrismaService) {}

  async putCampaign(
    campaign: Pick<Campaign, 'type' | 'title' | 'description' | 'image_link'>,
  ): Promise<void> {
    await this.prisma.campaign.create({ data: campaign });
  }

  async patchCampaign(
    campaign: Pick<Campaign, 'type' | 'title' | 'description' | 'image_link'>,
  ): Promise<void> {
    const { type, title, description, image_link } = campaign;
    await this.prisma.campaign.update({
      where: { type },
      data: { title, description, image_link },
    });
  }

  async deleteCampaign(id: number): Promise<void> {
    await this.prisma.campaign.delete({ where: { id } });
  }
}
