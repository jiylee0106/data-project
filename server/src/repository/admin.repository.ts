import { Service } from "typedi";
import {
  Campaign,
  News,
  Participation,
  PrismaClient,
  User,
  Video,
} from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class AdminRepository {
  async putNews(
    news: Pick<News, "title" | "description" | "link" | "image_link">
  ): Promise<void> {
    await prisma.news.create({ data: news });
  }

  async putVideo(
    video: Pick<Video, "video_id" | "title" | "description">
  ): Promise<void> {
    await prisma.video.create({ data: video });
  }

  async putParticipation(
    participation: Pick<Participation, "title" | "description" | "image_link">
  ): Promise<void> {
    await prisma.participation.create({ data: participation });
  }

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

  async getNews(): Promise<News[]> {
    const result = await prisma.news.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return result;
  }

  async getVideo(): Promise<Video> {
    const result = await prisma.video.findMany({
      orderBy: {
        id: "desc",
      },
      take: 1,
    });

    return result[0];
  }

  async getCampaign(): Promise<Campaign[]> {
    const result = await prisma.campaign.findMany();

    return result;
  }

  async getParticipation(): Promise<Participation> {
    const result = await prisma.participation.findMany({
      orderBy: {
        id: "desc",
      },
      take: 1,
    });

    return result[0];
  }
}

export default AdminRepository;
