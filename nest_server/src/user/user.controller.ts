import {
  Controller,
  Get,
  Patch,
  Delete,
  Body,
  Req,
  UseGuards,
  HttpCode,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';
import { RequestUser } from '../auth/interfaces/RequestUser.interface';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ChangePasswordRequestDto } from './dto/user.request.dto';
import { GetAllUserResponse, GetUserResponse } from '../docs/user/user.swagger';
import { MessageResponse } from '../docs/global.swagger';
import {
  GetAllUsersResponseDto,
  GetUserResponseDto,
} from './dto/user.response.dto';
import { MessageResponseDto } from '../app.dto';
import { AdminGuard } from 'src/auth/passport/admin.guard';

@ApiTags('User')
@Controller('user')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '유저 정보 제공' })
  @ApiResponse(GetUserResponse)
  async getUser(@Req() req: RequestUser): Promise<GetUserResponseDto> {
    const result = await this.userService.getUser(req.user.email);
    return result;
  }

  @Get('users')
  @UseGuards(AdminGuard)
  @ApiOperation({ summary: '유저 전체 정보 제공' })
  @ApiResponse(GetAllUserResponse)
  async getAllUser(): Promise<GetAllUsersResponseDto[]> {
    const result = await this.userService.getAllUsersService();
    return result;
  }

  @ApiOperation({ summary: '비밀번호 변경' })
  @ApiBody({
    description: '업데이트 요청 정보',
    type: ChangePasswordRequestDto,
  })
  @ApiResponse(MessageResponse(200, '비밀번호 변경 성공'))
  @Patch('password')
  async changePassword(
    @Req() req: RequestUser,
    @Body() body: ChangePasswordRequestDto,
  ): Promise<MessageResponseDto> {
    const result = await this.userService.changePassword(
      req.user.id,
      body.password,
    );
    return result;
  }

  @HttpCode(204)
  @ApiOperation({ summary: '유저 삭제' })
  @ApiResponse(MessageResponse(204, '유저 삭제 성공'))
  @Delete()
  async deleteUser(@Req() req: RequestUser): Promise<MessageResponseDto> {
    const result = await this.userService.deleteUser(req.user.id);
    return result;
  }

  @HttpCode(204)
  @UseGuards(AdminGuard)
  @ApiOperation({ summary: '다른 유저 삭제' })
  @ApiResponse(MessageResponse(204, '유저 삭제 성공'))
  @Delete(':id')
  async deleteOther(@Param('id') id: string): Promise<MessageResponseDto> {
    const result = await this.userService.deleteUser(Number(id));
    return result;
  }
}
