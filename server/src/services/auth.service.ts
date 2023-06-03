import HandlePassword from "src/libraries/integrations/handlePassword";
import UserRepository from "src/repository/user.repository";
import { Service } from "typedi";
import { User } from "@prisma/client";

@Service()
class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly handlePassword: HandlePassword
  ) {}

  loginService = async () => {};

  registerService = async (user: Pick<User, "email" | "password">) => {
    const { email, password } = user;
    const isExistUser = await this.userRepository.getUserByEmail(email);
    if (isExistUser) throw "이미 존재하는 이메일입니다";
    const hashedPassword = await this.handlePassword.hashPassword(password!);
    await this.userRepository.create({
      email,
      password: hashedPassword,
      provider: "Local",
    });
    // return await this.handleLogin.loginAuthenticate(email, password!);
  };
}

export default AuthService;
