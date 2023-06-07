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

  async getCampaignLog(user_id: number): Promise<PointsLog[]> {
    return await prisma.pointsLog.findMany({
      where: {
        userId: user_id,
        OR: [
          { method: "Joined_Campaign1" },
          { method: "Joined_Campaign2" },
          { method: "Joined_Campaign3" },
        ],
      },
    });
  }

  async getDailyEventsLog(user_id: number): Promise<PointsLog[]> {
    const today = new Date();
    const dateString = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;

    return await prisma.pointsLog.findMany({
      where: {
        userId: user_id,
        NOT: [
          { method: "Joined_Campaign1" },
          { method: "Joined_Campaign2" },
          { method: "Joined_Campaign3" },
        ],
        event_date: {
          gte: new Date(dateString),
          lt: new Date(new Date(dateString).getTime() + 24 * 60 * 60 * 1000),
        },
      },
    });
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
