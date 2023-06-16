import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { HandlePassword } from '../libraries/integrations/HandlePassword';
import { User } from '@prisma/client';
import { LoginRequestDto, RegisterRequestDto } from './dto/auth.request.dto';
import { LoginResponseDto } from './dto/auth.response.dto';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private readonly handlePassword: HandlePassword,
  ) {}

  register = async (user: RegisterRequestDto): Promise<LoginResponseDto> => {
    const existingUser = await this.userRepository.getUserByEmail(user.email);
    if (existingUser) {
      throw new UnauthorizedException('이미 존재하는 계정입니다');
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
      username: result.email,
      sub: result.id,
      role: result.role,
    };
    const token = this.jwtService.sign(payload, { expiresIn: '14d' });

    return { token };
  };

  validateUser = async (
    loginBody: LoginRequestDto,
  ): Promise<Pick<User, 'id' | 'email' | 'role'>> => {
    const user = await this.userRepository.getUserByEmail(loginBody.email);

    if (!user) {
      throw new UnauthorizedException('존재하지 않는 계정입니다');
    }

    const isPasswordCorrect = await this.handlePassword.comparePassword(
      loginBody.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다');
    }

    return { id: user.id, email: user.email, role: user.role };
  };

  login = async (
    user: Pick<User, 'id' | 'email' | 'role'>,
  ): Promise<LoginResponseDto> => {
    const payload = { username: user.email, sub: user.id, role: user.role };
    const token = this.jwtService.sign(payload, { expiresIn: '10s' });

    return { token };
  };
}
