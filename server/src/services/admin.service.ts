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

  async putVideoService(video: Pick<Video, "title" | "description">) {
    await this.adminRepository.putVideo(video);
  }

  async putCampaignService(
    campaign: Pick<Campaign, "type" | "title" | "description" | "image_link">
  ) {
    await this.adminRepository.putCampaign(campaign);
  }

  async putParticipationService(
    participation: Pick<Participation, "title" | "description" | "image_link">
  ) {
    await this.adminRepository.putParticipation(participation);
  }
}

export default AdminService;
