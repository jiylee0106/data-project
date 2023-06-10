import { Service, Inject } from "typedi";
import { Video } from "@prisma/client";
import VideoRepository from "@src/repository/admin/video.repository";
import { MessageResponseDto } from "@src/dto/global.dto";

@Service()
class VideoService {
  @Inject() private readonly videoRepository: VideoRepository;

  async putVideoService(
    video: Pick<Video, "video_id" | "title" | "description">
  ): Promise<MessageResponseDto> {
    await this.videoRepository.putVideo(video);
    return { message: "영상이 추가되었습니다" };
  }

  async setCurrentVideoService(id: number): Promise<MessageResponseDto> {
    await this.videoRepository.setCurrentVideo(id);
    return { message: "현재 영상이 설정되었습니다" };
  }

  async getVideoService(): Promise<Video[]> {
    return await this.videoRepository.getVideo();
  }

  async patchVideoService(
    id: number,
    video: Pick<Video, "video_id" | "title" | "description">
  ): Promise<MessageResponseDto> {
    await this.videoRepository.patchVideo(id, video);
    return { message: "영상이 수정되었습니다" };
  }

  async deleteVideoService(id: number): Promise<MessageResponseDto> {
    await this.videoRepository.deleteVideo(id);
    return { message: "영상이 삭제되었습니다" };
  }
}

export default VideoService;
