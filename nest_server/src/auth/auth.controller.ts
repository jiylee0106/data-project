import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport/local.guard';
import { AuthRequestDto } from './auth.dto';
import { RequestUser } from './interfaces/RequestUser.interface';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: '회원가입' })
  @Post('register')
  async register(@Body() user: AuthRequestDto) {
    return this.authService.register(user);
  }

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: '유저 로그인' })
  @Post('login')
  async login(@Request() req: RequestUser) {
    return this.authService.login(req.user);
  }
}
