import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Collection } from '@prisma/client';

@Injectable()
export class CollectionRepository {
  constructor(private prisma: PrismaService) {}

  async getAllCollection(user_id: number): Promise<Collection[]> {
    const result = await this.prisma.collection.findMany({
      where: { userId: user_id },
    });
    return result;
  }

  async putCollectedSpecies(
    data: Pick<Collection, 'userId' | 'animal_id'>,
  ): Promise<void> {
    await this.prisma.collection.create({
      data,
    });
  }
}
