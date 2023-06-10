import { Service, Inject } from "typedi";
import { Video } from "@prisma/client";
import VideoRepository from "@src/repository/admin/video.repository";

@Service()
class VideoService {
  @Inject() private readonly videoRepository: VideoRepository;

  async putVideoService(
    video: Pick<Video, "video_id" | "title" | "description">
  ) {
    await this.videoRepository.putVideo(video);
  }

  async patchVideoService(id: number) {
    await this.videoRepository.patchVideo(id);
  }

  async getVideoService() {
    return await this.videoRepository.getVideo();
  }
}

export default VideoService;
