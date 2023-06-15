import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { HandlePassword } from '../libraries/integrations/HandlePassword';
import {
  GetAllUsersResponseDto,
  GetUserResponseDto,
} from './dto/user.response.dto';
import { MessageResponseDto } from '../app.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly handlePassword: HandlePassword,
  ) {}

  getUser = async (email: string): Promise<GetUserResponseDto> => {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('유저 조회 실패');
    }
    return { email: user.email, role: user.role };
  };

  async getAllUsersService(): Promise<GetAllUsersResponseDto[]> {
    const users = await this.userRepository.getAllUsers();
    const result = users.map((item) => {
      const { id, email, provider, role, created_at } = item;
      return { id, email, provider, role, created_at };
    });
    return result;
  }

  changePassword = async (
    id: number,
    password: string,
  ): Promise<MessageResponseDto> => {
    const hashedPassword = await this.handlePassword.hashPassword(password);
    await this.userRepository.changePassword(id, hashedPassword);
    return { message: '비밀번호 변경 성공' };
  };

  deleteUser = async (id: number): Promise<MessageResponseDto> => {
    await this.userRepository.delete(id);
    return { message: '유저 삭제 성공' };
  };
}
