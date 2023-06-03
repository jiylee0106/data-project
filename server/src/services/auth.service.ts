import HandlePassword from "@src/libraries/integrations/handlePassword";
import UserRepository from "@src/repository/user.repository";
import { Service, Inject } from "typedi";
import { User } from "@prisma/client";

@Service()
class AuthService {
  @Inject() userRepository: UserRepository;
  @Inject() handlePassword: HandlePassword;

  async registerService(user: Pick<User, "email" | "password">) {
    const { email, password } = user;
    const isExistUser = await this.userRepository.getUserByEmail(email);
    if (isExistUser)
      throw { status: 403, message: "이미 존재하는 이메일입니다" };
    const hashedPassword = await this.handlePassword.hashPassword(password!);
    await this.userRepository.create({
      email,
      password: hashedPassword,
      provider: "Local",
    });

    return "complete";
    // return await this.handleLogin.loginAuthenticate(email, password!);
  }

  async loginService() {}
}

export default AuthService;
