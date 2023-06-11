import { Service } from "typedi";
import {
  Campaign,
  News,
  Participation,
  PrismaClient,
  Video,
} from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class ContentRepository {
  async getSelectedVideo(): Promise<Video | null> {
    const result = await prisma.video.findFirst({ where: { is_selected: 1 } });
    return result;
  }

  async getSelectedParticipation(): Promise<Participation | null> {
    const result = await prisma.participation.findFirst({
      where: { is_selected: 1 },
    });
    return result;
  }

  async getNews(): Promise<News[]> {
    const result = await prisma.news.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return result;
  }

  async getCampaign(): Promise<Campaign[]> {
    const result = await prisma.campaign.findMany();

    return result;
  }
}

export default ContentRepository;
