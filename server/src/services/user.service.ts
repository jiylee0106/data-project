import UserRepository from "@src/repository/user.repository";
import { Inject, Service } from "typedi";

@Service()
class UserService {
  @Inject() private readonly userRepository: UserRepository;

  async getUserService(email: string) {
    return await this.userRepository.getUserByEmail(email);
  }

  async deleteUserService(user_id: number) {
    return await this.userRepository.delete(user_id);
  }
}

export default UserService;
