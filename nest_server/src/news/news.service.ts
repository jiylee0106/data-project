import { Injectable } from '@nestjs/common';
import { NewsRepository } from './news.repository';
import { ContentRepository } from '../content/content.repository';

@Injectable()
export class NewsService {
  constructor(
    private readonly newsRepository: NewsRepository,
    private readonly contentRepository: ContentRepository,
  ) {}

  async putNewsService(
    news: Pick<News, 'title' | 'description' | 'link' | 'image_link'>,
  ): Promise<MessageResponseDto> {
    await this.newsRepository.putNews(news);
    return { message: '소식이 추가되었습니다' };
  }

  async getNewsService(): Promise<News[]> {
    return await this.contentRepository.getNews();
  }

  async patchNewsService(
    id: number,
    data: Pick<News, 'title' | 'description' | 'link' | 'image_link'>,
  ): Promise<MessageResponseDto> {
    await this.newsRepository.patchNews(id, data);
    return { message: '소식이 수정되었습니다' };
  }

  async deleteNewsService(id: number): Promise<MessageResponseDto> {
    await this.newsRepository.deleteNews(id);
    return { message: '소식이 삭제되었습니다' };
  }
}
