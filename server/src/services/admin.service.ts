import { Service, Inject } from "typedi";
import AdminRepository from "@src/repository/admin.repository";
import { Campaign, News, Participation, Video } from "@prisma/client";

@Service()
class AdminService {
  @Inject() private readonly adminRepository: AdminRepository;

  async putNewsService(
    news: Pick<News, "title" | "description" | "link" | "image_link">
  ) {
    await this.adminRepository.putNews(news);
  }

  async putVideoService(
    video: Pick<Video, "video_id" | "title" | "description">
  ) {
    await this.adminRepository.putVideo(video);
  }

  async putParticipationService(
    participation: Pick<Participation, "title" | "description" | "image_link">
  ) {
    await this.adminRepository.putParticipation(participation);
  }

  async putCampaignService(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ) {
    await this.adminRepository.putCampaign(campaign);
  }

  async patchCampaignService(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ) {
    await this.adminRepository.patchCampaign(campaign);
  }

  async patchVideoService(id: number) {
    await this.adminRepository.patchVideo(id);
  }

  async patchParticipationService(id: number) {
    await this.adminRepository.patchParticipation(id);
  }

  async getNewsService() {
    return await this.adminRepository.getNews();
  }

  async getVideoService() {
    return await this.adminRepository.getVideo();
  }

  async getParticipationService() {
    return await this.adminRepository.getParticipation();
  }

  async getCampaignService() {
    return await this.adminRepository.getCampaign();
  }
}

export default AdminService;
