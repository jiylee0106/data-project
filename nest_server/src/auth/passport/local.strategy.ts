import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { User } from '@prisma/client';
import { LoginRequestDto } from '../dto/auth.request.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(
    loginBody: LoginRequestDto,
  ): Promise<Pick<User, 'id' | 'email' | 'role'>> {
    const user = await this.authService.validateUser(loginBody);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
