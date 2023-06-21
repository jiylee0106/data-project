import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Video } from '@prisma/client';

@Injectable()
export class VideoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async putVideo(
    video: Pick<Video, 'video_id' | 'title' | 'description'>,
  ): Promise<void> {
    await this.prisma.video.create({ data: video });
  }

  async setCurrentVideo(id: number): Promise<void> {
    await this.prisma.$transaction([
      this.prisma.video.updateMany({
        where: { is_selected: 1 },
        data: { is_selected: 0 },
      }),
      this.prisma.video.update({
        where: { id },
        data: { is_selected: 1 },
      }),
    ]);
  }

  async getVideo(): Promise<Video[]> {
    const result = await this.prisma.video.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return result;
  }

  async patchVideo(
    id: number,
    video: Pick<Video, 'video_id' | 'title' | 'description'>,
  ): Promise<void> {
    const { video_id, title, description } = video;
    await this.prisma.video.update({
      where: { id },
      data: { video_id, title, description },
    });
  }

  async deleteVideo(id: number): Promise<void> {
    await this.prisma.video.delete({ where: { id } });
  }
}
