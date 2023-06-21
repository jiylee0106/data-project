import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      if (info && info.name === 'TokenExpiredError') {
        throw new UnauthorizedException('토큰이 만료되었습니다');
      } else if (info && info.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('토큰이 유효하지 않습니다');
      }
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
