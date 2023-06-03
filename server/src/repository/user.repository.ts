import { Service } from "typedi";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

@Service()
class UserRepository {
  async getUserByEmail(email: string) {
    const result = await prisma.user.findFirst({ where: { email } });
    return result;
  }

  async create(user: Pick<User, "email" | "provider" | "password">) {
    return await prisma.user.create({
      data: user,
    });
  }
}

export default UserRepository;
