import {
  Controller,
  Get,
  Patch,
  Delete,
  Body,
  Req,
  UseGuards,
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
import { ChangePasswordRequestDto } from './user.dto';
import { GetUserResponse } from '../docs/user.swagger';
import { MessageResponse } from '../docs/global.swagger';

@ApiTags('User')
@Controller('user')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '유저 정보 제공' })
  @ApiResponse(GetUserResponse)
  async getUser(@Req() req: RequestUser) {
    const result = await this.userService.getUser(req.user.email);
    return result;
  }

  @ApiOperation({ summary: '유저 정보 업데이트' })
  @ApiBody({
    description: '업데이트 요청 정보',
    type: ChangePasswordRequestDto,
  })
  @ApiResponse(MessageResponse(200, '유저 업데이트 성공'))
  @Patch()
  async changePassword(
    @Req() req: RequestUser,
    @Body() body: ChangePasswordRequestDto,
  ) {
    await this.userService.changePassword(req.user.id, body.password);
    return { message: '유저 정보 업데이트 성공' };
  }

  @ApiOperation({ summary: '유저 삭제' })
  @ApiResponse(MessageResponse(200, '유저 삭제 성공'))
  @Delete()
  async deleteUser(@Req() req: RequestUser) {
    await this.userService.deleteUser(req.user.id);
    return { message: '유저 삭제 성공' };
  }
}
