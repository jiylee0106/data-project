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

  async putVideo(video: Pick<Video, "title" | "description">): Promise<void> {
    await prisma.video.create({ data: video });
  }

  async putCampaign(
    video: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ): Promise<void> {
    await prisma.video.create({ data: video });
  }

  async putParticipation(
    video: Pick<Participation, "title" | "description" | "image_link">
  ): Promise<void> {
    await prisma.video.create({ data: video });
  }
}

export default AdminRepository;
