import { Service } from "typedi";
import { PrismaClient, PointsLog } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class PointRepository {
  async getPointsLog(user_id: number): Promise<PointsLog[]> {
    const result = await prisma.pointsLog.findMany({
      where: { userId: user_id },
    });
    return result;
  }

  async putPointsLog(
    data: Pick<PointsLog, "userId" | "points" | "action_type" | "method">
  ) {
    await prisma.pointsLog.create({
      data,
    });
  }
}

export default PointRepository;
