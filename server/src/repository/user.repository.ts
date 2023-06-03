import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

class UserRepository {
  getUserByEmail = async (email: string) => {
    const result = await prisma.user.findFirst({ where: { email } });
    if (!result) throw new Error("존재하지 않는 계정입니다");
    return result;
  };

  create = async (user: Pick<User, "email" | "provider" | "password">) => {
    return await prisma.user.create({
      data: user,
    });
  };
}

export default UserRepository;
