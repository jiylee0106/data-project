import { Service } from "typedi";
import { PrismaClient, Video } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class VideoRepository {
  async putVideo(
    video: Pick<Video, "video_id" | "title" | "description">
  ): Promise<void> {
    await prisma.video.create({ data: video });
  }

  async setCurrentVideo(id: number): Promise<void> {
    await prisma.$transaction([
      prisma.video.updateMany({
        where: { is_selected: 1 },
        data: { is_selected: 0 },
      }),
      prisma.video.update({
        where: { id },
        data: { is_selected: 1 },
      }),
    ]);
  }

  async getVideo(): Promise<Video[]> {
    const result = await prisma.video.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return result;
  }

  async patchVideo(
    id: number,
    video: Pick<Video, "video_id" | "title" | "description">
  ): Promise<void> {
    const { video_id, title, description } = video;
    await prisma.video.update({
      where: { id },
      data: { video_id, title, description },
    });
  }

  async deleteVideo(id: number): Promise<void> {
    await prisma.video.delete({ where: { id } });
  }
}

export default VideoRepository;
