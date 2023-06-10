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

  async patchVideo(id: number) {
    console.log("id는" + id);
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
}

export default VideoRepository;
