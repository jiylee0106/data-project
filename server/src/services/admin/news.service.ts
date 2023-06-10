import { Service, Inject } from "typedi";
import AdminRepository from "@src/repository/admin.repository";
import { News } from "@prisma/client";
import ContentRepository from "@src/repository/content.repository";

@Service()
class NewsService {
  @Inject() private readonly adminRepository: AdminRepository;
  @Inject() private readonly contentRepository: ContentRepository;

  async putNewsService(
    news: Pick<News, "title" | "description" | "link" | "image_link">
  ) {
    await this.adminRepository.putNews(news);
  }

  async getNewsService() {
    return await this.contentRepository.getNews();
  }
}

export default NewsService;
