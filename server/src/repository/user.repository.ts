import { Service } from "typedi";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class UserRepository {
  async getUserByEmail(email: string): Promise<User | null> {
    const result = await prisma.user.findFirst({ where: { email } });
    return result;
  }

  async create(
    user: Pick<User, "email" | "provider" | "password">
  ): Promise<void> {
    await prisma.user.create({
      data: user,
    });
  }

  async delete(user_id: number): Promise<void> {
    await prisma.$transaction([
      prisma.user.delete({ where: { id: user_id } }),
      prisma.pointsLog.deleteMany({ where: { userId: user_id } }),
      prisma.collection.deleteMany({ where: { userId: user_id } }),
    ]);
  }

  async changePassword(user_id: number, password: string): Promise<void> {
    await prisma.user.update({
      where: { id: user_id },
      data: { password },
    });
  }
}

export default UserRepository;
