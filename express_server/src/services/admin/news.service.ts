import { Service, Inject } from "typedi";
import { News } from "@prisma/client";
import ContentRepository from "@src/repository/content.repository";
import NewsRepository from "@src/repository/admin/news.repository";
import { MessageResponseDto } from "@src/dto/global.dto";

@Service()
class NewsService {
  @Inject() private readonly newsRepository: NewsRepository;
  @Inject() private readonly contentRepository: ContentRepository;

  async putNewsService(
    news: Pick<News, "title" | "description" | "link" | "image_link">
  ): Promise<MessageResponseDto> {
    await this.newsRepository.putNews(news);
    return { message: "소식이 추가되었습니다" };
  }

  async getNewsService(): Promise<News[]> {
    return await this.contentRepository.getNews();
  }

  async patchNewsService(
    id: number,
    data: Pick<News, "title" | "description" | "link" | "image_link">
  ): Promise<MessageResponseDto> {
    await this.newsRepository.patchNews(id, data);
    return { message: "소식이 수정되었습니다" };
  }

  async deleteNewsService(id: number): Promise<MessageResponseDto> {
    await this.newsRepository.deleteNews(id);
    return { message: "소식이 삭제되었습니다" };
  }
}

export default NewsService;
