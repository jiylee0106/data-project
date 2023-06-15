import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AdminGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    if (user.role !== 'Admin') {
      throw new UnauthorizedException('관리자 권한이 없습니다');
    }

    return user;
  }
}
