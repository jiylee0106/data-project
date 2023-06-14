import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  getUserByEmail = async (email: string): Promise<User | null> => {
    return await this.prisma.user.findFirst({ where: { email } });
  };

  async getAllUsers(): Promise<User[]> {
    const result = await this.prisma.user.findMany();
    return result;
  }

  create = async (
    user: Pick<User, 'email' | 'provider' | 'password'>,
  ): Promise<User> => {
    return await this.prisma.user.create({
      data: user,
    });
  };

  async delete(user_id: number): Promise<void> {
    await this.prisma.$transaction([
      this.prisma.collection.deleteMany({ where: { userId: user_id } }),
      this.prisma.pointsLog.deleteMany({ where: { userId: user_id } }),
      this.prisma.user.delete({ where: { id: user_id } }),
    ]);
  }

  async changePassword(user_id: number, password: string): Promise<void> {
    await this.prisma.user.update({
      where: { id: user_id },
      data: { password },
    });
  }
}
