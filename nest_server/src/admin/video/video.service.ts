import { Injectable } from '@nestjs/common';
import { VideoRepository } from './video.repository';
import { Video } from '@prisma/client';

@Injectable()
export class VideoService {
  constructor(private readonly videoRepository: VideoRepository) {}

  async putVideoService(
    video: Pick<Video, 'video_id' | 'title' | 'description'>,
  ) {
    await this.videoRepository.putVideo(video);
    return { message: '영상이 추가되었습니다' };
  }

  async setCurrentVideoService(id: number) {
    await this.videoRepository.setCurrentVideo(id);
    return { message: '현재 영상이 설정되었습니다' };
  }

  async getVideoService(): Promise<Video[]> {
    return await this.videoRepository.getVideo();
  }

  async patchVideoService(
    id: number,
    video: Pick<Video, 'video_id' | 'title' | 'description'>,
  ) {
    await this.videoRepository.patchVideo(id, video);
    return { message: '영상이 수정되었습니다' };
  }

  async deleteVideoService(id: number) {
    await this.videoRepository.deleteVideo(id);
    return { message: '영상이 삭제되었습니다' };
  }
}
