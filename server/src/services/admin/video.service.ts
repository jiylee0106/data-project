import { Service, Inject } from "typedi";
import AdminRepository from "@src/repository/admin.repository";
import { Video } from "@prisma/client";

@Service()
class VideoService {
  @Inject() private readonly adminRepository: AdminRepository;

  async putVideoService(
    video: Pick<Video, "video_id" | "title" | "description">
  ) {
    await this.adminRepository.putVideo(video);
  }

  async patchVideoService(id: number) {
    await this.adminRepository.patchVideo(id);
  }

  async getVideoService() {
    return await this.adminRepository.getVideo();
  }
}

export default VideoService;
