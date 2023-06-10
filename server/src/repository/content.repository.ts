import { Service } from "typedi";
import { Participation, PrismaClient, User, Video } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class ContentRepository {
  async getSelectedVideo(): Promise<Video | null> {
    const result = await prisma.video.findFirst({ where: { is_selected: 1 } });
    return result;
  }

  async getSelectedParticipation(): Promise<Participation | null> {
    const result = await prisma.participation.findFirst({
      where: { is_selected: 1 },
    });
    return result;
  }
}

export default ContentRepository;
