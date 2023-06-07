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
  ): Promise<PointsLog> {
    return await prisma.pointsLog.create({
      data,
    });
  }

  async rollbackPointsLog(id: number): Promise<void> {
    await prisma.pointsLog.delete({
      where: { id },
    });
  }
}

export default PointRepository;
