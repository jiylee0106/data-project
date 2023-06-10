import { Service } from "typedi";
import { News, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class NewsRepository {
  async putNews(
    news: Pick<News, "title" | "description" | "link" | "image_link">
  ): Promise<void> {
    await prisma.news.create({ data: news });
  }
}

export default NewsRepository;
