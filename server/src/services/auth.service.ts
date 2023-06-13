import HandlePassword from "@src/libraries/integrations/handlePassword";
import UserRepository from "@src/repository/user.repository";
import { Service, Inject } from "typedi";
import { Provider, User } from "@prisma/client";
import HandleLogin from "@src/libraries/integrations/handleLogin";
import { AuthResponseDto } from "@src/dto/auth.dto";
import { NextFunction, Request, Response } from "express";

@Service()
class AuthService {
  @Inject() private readonly userRepository: UserRepository;
  @Inject() private readonly handlePassword: HandlePassword;
  @Inject() private readonly handleLogin: HandleLogin;

  async registerService(
    user: Pick<User, "email" | "password">,
    provider: Provider
  ): Promise<AuthResponseDto> {
    const { email, password } = user;
    const isExistUser = await this.userRepository.getUserByEmail(email);
    if (isExistUser)
      throw { status: 403, message: "이미 존재하는 이메일입니다" };
    const hashedPassword = await this.handlePassword.hashPassword(password!);
    await this.userRepository.create({
      email,
      password: hashedPassword,
      provider,
    });

    return await this.handleLogin.loginAuthenticate(email, password!);
  }

  async loginService(
    user: Pick<User, "email" | "password">
  ): Promise<AuthResponseDto> {
    const { email, password } = user;
    return await this.handleLogin.loginAuthenticate(email, password!);
  }

  async googleLoginService(req: Request, res: Response, next: NextFunction) {
    return (await this.handleLogin.googleLoginAuthenticate(
      req,
      res,
      next
    )) as User;
  }

  async kakaoLoginService(req: Request, res: Response, next: NextFunction) {
    return (await this.handleLogin.kakaoLoginAuthenticate(
      req,
      res,
      next
    )) as User;
  }
}

export default AuthService;
