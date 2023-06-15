import { User } from "@prisma/client";
import { MessageResponseDto } from "@src/dto/global.dto";
import HandlePassword from "@src/libraries/integrations/handlePassword";
import UserRepository from "@src/repository/user.repository";
import { Inject, Service } from "typedi";

@Service()
class UserService {
  @Inject() private readonly userRepository: UserRepository;
  @Inject() private readonly handlePassword: HandlePassword;

  async getUserService(email: string): Promise<User | null> {
    return await this.userRepository.getUserByEmail(email);
  }

  async deleteUserService(user_id: number): Promise<MessageResponseDto> {
    await this.userRepository.delete(user_id);
    return { message: "유저가 삭제되었습니다" };
  }

  async changePasswordService(
    user_id: number,
    newPassword: string
  ): Promise<MessageResponseDto> {
    const hashedPassword = await this.handlePassword.hashPassword(newPassword);
    await this.userRepository.changePassword(user_id, hashedPassword);
    return { message: "비밀번호가 변경되었습니다" };
  }

  async getAllUsersService(): Promise<Partial<User>[]> {
    const users = await this.userRepository.getAllUsers();
    const result = users.map((item) => {
      const { id, email, provider, role, created_at } = item;
      return { id, email, provider, role, created_at };
    });
    return result;
  }
}

export default UserService;
