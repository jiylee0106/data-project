import { Service, Inject } from "typedi";
import { News } from "@prisma/client";
import ContentRepository from "@src/repository/content.repository";
import NewsRepository from "@src/repository/admin/news.repository";

@Service()
class NewsService {
  @Inject() private readonly newsRepository: NewsRepository;
  @Inject() private readonly contentRepository: ContentRepository;

  async putNewsService(
    news: Pick<News, "title" | "description" | "link" | "image_link">
  ) {
    await this.newsRepository.putNews(news);
  }

  async getNewsService() {
    return await this.contentRepository.getNews();
  }
}

export default NewsService;
