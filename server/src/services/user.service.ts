import { User } from "@prisma/client";
import UserRepository from "@src/repository/user.repository";
import { Inject, Service } from "typedi";

@Service()
class UserService {
  @Inject() private readonly userRepository: UserRepository;

  async getUserService(email: string): Promise<User | null> {
    return await this.userRepository.getUserByEmail(email);
  }

  async deleteUserService(user_id: number): Promise<{ message: string }> {
    await this.userRepository.delete(user_id);
    return { message: "유저가 삭제되었습니다" };
  }
}

export default UserService;
