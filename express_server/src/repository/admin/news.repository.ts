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

  async patchNews(
    id: number,
    data: Pick<News, "title" | "description" | "link" | "image_link">
  ): Promise<void> {
    const { title, description, link, image_link } = data;
    await prisma.news.update({
      where: { id },
      data: { title, description, link, image_link },
    });
  }

  async deleteNews(id: number): Promise<void> {
    await prisma.news.delete({ where: { id } });
  }
}

export default NewsRepository;
