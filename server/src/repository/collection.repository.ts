import { Service } from "typedi";
import { PrismaClient, Collection } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class CollectionRepository {
  async getAllCollection(user_id: number): Promise<Collection[]> {
    const result = await prisma.collection.findMany({
      where: { userId: user_id },
    });
    return result;
  }

  async putCollectedSpecies(data: Pick<Collection, "userId" | "animal_id">) {
    await prisma.collection.create({
      data,
    });
  }
}

export default CollectionRepository;
