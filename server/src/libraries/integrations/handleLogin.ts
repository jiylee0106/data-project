import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import HandlePassword from "./handlePassword";
import UserRepository from "@src/repository/user.repository";
import { User } from "@prisma/client";
import { Inject, Service } from "typedi";
dotenv.config();

@Service()
class HandleLogin {
  @Inject() private readonly userRepository: UserRepository;
  @Inject() private readonly handlePassword: HandlePassword;

  signJWT(payload: Pick<User, "id" | "email" | "provider">) {
    const secret = process.env.JWT_SECRET!;

    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "14d",
    });

    return { token };
  }

  async loginAuthenticate(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw { status: 401, message: "존재하지 않는 계정입니다" };
    }
    const comparePasswordResult = await this.handlePassword.comparePassword(
      password,
      user?.password as string
    );
    if (!comparePasswordResult) {
      throw { status: 401, message: "비밀번호가 일치하지 않습니다" };
    }
    const { id } = user as User;
    const { token } = this.signJWT({
      email,
      id,
      provider: "Local",
    });
    return { token };
  }
}

export default HandleLogin;
