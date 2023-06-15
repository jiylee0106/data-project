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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginResponseDto } from './dto/auth.response.dto';
import { AuthResponse } from '../docs/auth/auth.swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiResponse(AuthResponse)
  @HttpCode(201)
  @ApiOperation({ summary: '회원가입' })
  @Post('register')
  async register(@Body() user: RegisterRequestDto): Promise<LoginResponseDto> {
    return this.authService.register(user);
  }

  @ApiResponse(AuthResponse)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: '유저 로그인' })
  @Post('login')
  async login(@Request() req: RequestUser): Promise<LoginResponseDto> {
    return this.authService.login(req.user);
  }
}
