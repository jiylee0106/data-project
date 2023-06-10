import { Participation, Video } from "@prisma/client";
import ContentRepository from "@src/repository/content.repository";
import { Inject, Service } from "typedi";

@Service()
class ContentService {
  @Inject() private readonly contentRepository: ContentRepository;

  async getSelectedVideoService(): Promise<Video | null> {
    return await this.contentRepository.getSelectedVideo();
  }

  async getSelectedParticipationService(): Promise<Participation | null> {
    return await this.contentRepository.getSelectedParticipation();
  }

  async getNewsService() {
    return await this.contentRepository.getNews();
  }

  async getCampaignService() {
    return await this.contentRepository.getCampaign();
  }
}

export default ContentService;
