import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { HandlePassword } from '../libraries/integrations/HandlePassword';
import { DecodedToken } from './interfaces/DecodeToken.interface';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private readonly handlePassword: HandlePassword,
  ) {}

  join = async () => {
    const existingUser = await this.userRepository.getUserByEmail(user.email);
    if (existingUser) {
      throw new UnauthorizedException('이미 존재하는 이메일입니다');
    }
    const hashedPassword = await this.handlePassword.hashPassword(
      user.password,
    );
    const result = await this.userRepository.create(
      user.email,
      'Local',
      hashedPassword,
    );
    const payload = { username: result.email, sub: result.id };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '2w' });
    await this.redisService.set(
      `refresh_token:${result.id}`,
      refreshToken,
      60 * 60 * 24 * 14,
    );

    return { token, refreshToken };
  };

  validateUser = async (
    email: string,
    password: string,
  ): Promise<Pick<User, 'id' | 'email'>> => {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('존재하지 않는 계정입니다');
    }

    const isPasswordCorrect = await this.handlePassword.comparePassword(
      password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다');
    }

    return { id: user.id, email: user.email };
  };

  login = async (user: Pick<User, 'id' | 'email'>) => {
    const payload = { username: user.email, sub: user.id };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '2w' });
    await this.redisService.set(
      `refresh_token:${user.id}`,
      refreshToken,
      60 * 60 * 24 * 14,
    );

    return { token, refreshToken };
  };
}
