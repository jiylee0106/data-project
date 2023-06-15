import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Participation } from '@prisma/client';

@Injectable()
export class ParticipationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async putParticipation(
    participation: Pick<Participation, 'title' | 'description' | 'image_link'>,
  ): Promise<void> {
    await this.prisma.participation.create({ data: participation });
  }

  async setCurrentParticipation(id: number): Promise<void> {
    await this.prisma.$transaction([
      this.prisma.participation.updateMany({
        where: { is_selected: 1 },
        data: { is_selected: 0 },
      }),
      this.prisma.participation.update({
        where: { id },
        data: { is_selected: 1 },
      }),
    ]);
  }

  async getParticipation(): Promise<Participation[]> {
    const result = await this.prisma.participation.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return result;
  }

  async patchParticipation(
    id: number,
    participation: Pick<Participation, 'title' | 'description' | 'image_link'>,
  ): Promise<void> {
    const { title, description, image_link } = participation;
    await this.prisma.participation.update({
      where: { id },
      data: { title, description, image_link },
    });
  }

  async deleteParticipation(id: number): Promise<void> {
    await this.prisma.participation.delete({ where: { id } });
  }
}
