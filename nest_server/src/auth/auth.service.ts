import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { HandlePassword } from '../libraries/integrations/HandlePassword';
import { User } from '@prisma/client';
import { AuthRequestDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private readonly handlePassword: HandlePassword,
  ) {}

  register = async (user: AuthRequestDto) => {
    const existingUser = await this.userRepository.getUserByEmail(user.email);
    if (existingUser) {
      throw new UnauthorizedException('이미 존재하는 이메일입니다');
    }
    const hashedPassword = await this.handlePassword.hashPassword(
      user.password,
    );
    const result = await this.userRepository.create({
      email: user.email,
      provider: 'Local',
      password: hashedPassword,
    });
    const payload = {
      email: result.email,
      id: result.id,
      provider: result.provider,
      role: result.role,
    };
    const token = this.jwtService.sign(payload, { expiresIn: '14d' });

    return { token };
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
    const token = this.jwtService.sign(payload, { expiresIn: '14d' });

    return { token };
  };
}
