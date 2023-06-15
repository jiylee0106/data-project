import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { HandlePassword } from '../libraries/integrations/HandlePassword';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly handlePassword: HandlePassword,
  ) {}

  getUser = async (email: string) => {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('유저 조회 실패');
    }
    return { email: user.email, role: user.role };
  };

  changePassword = async (id: number, password: string) => {
    const hashedPassword = await this.handlePassword.hashPassword(password);
    await this.userRepository.changePassword(id, hashedPassword);
    return { message: '비밀번호 변경 성공' };
  };

  deleteUser = async (id: number) => {
    return await this.userRepository.delete(id);
  };
}
