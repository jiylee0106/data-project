import { Service } from "typedi";
import { Participation, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class ParticipationRepository {
  async putParticipation(
    participation: Pick<Participation, "title" | "description" | "image_link">
  ): Promise<void> {
    await prisma.participation.create({ data: participation });
  }

  async patchParticipation(id: number) {
    await prisma.$transaction([
      prisma.participation.updateMany({
        where: { is_selected: 1 },
        data: { is_selected: 0 },
      }),
      prisma.participation.update({
        where: { id },
        data: { is_selected: 1 },
      }),
    ]);
  }

  async getParticipation(): Promise<Participation[]> {
    const result = await prisma.participation.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return result;
  }
}

export default ParticipationRepository;
