import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport/local.guard';
import { RegisterRequestDto } from './dto/auth.request.dto';
import { RequestUser } from './interfaces/RequestUser.interface';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginResponseDto } from './dto/auth.response.dto';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(201)
  @ApiOperation({ summary: '회원가입' })
  @Post('register')
  async register(@Body() user: RegisterRequestDto): Promise<LoginResponseDto> {
    return this.authService.register(user);
  }

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: '유저 로그인' })
  @Post('login')
  async login(@Request() req: RequestUser): Promise<LoginResponseDto> {
    return this.authService.login(req.user);
  }
}
