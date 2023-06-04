import { Service } from "typedi";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class UserRepository {
  async getUserByEmail(email: string): Promise<User | null> {
    const result = await prisma.user.findFirst({ where: { email } });
    return result;
  }

  async create(user: Pick<User, "email" | "provider" | "password">) {
    await prisma.user.create({
      data: user,
    });
  }

  async delete(user_id: number) {
    await prisma.user.delete({ where: { id: user_id } });
  }
}

export default UserRepository;
