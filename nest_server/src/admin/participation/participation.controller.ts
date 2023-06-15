import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminGuard } from '../../auth/passport/admin.guard';
import { JwtAuthGuard } from '../../auth/passport/jwt.guard';
import { ParticipationService } from './participation.service';
import { GetParticipationResponseDto } from './dto/participation.response.dto';
import { MessageResponseDto } from '../../app.dto';
import {
  CreateParticipationRequestDto,
  UpdateParticipationRequestDto,
} from './dto/participation.request.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin/Participation')
@Controller('admin/participation')
@UseGuards(JwtAuthGuard, AdminGuard)
export class ParticipationController {
  constructor(private readonly participationService: ParticipationService) {}

  @ApiOperation({ summary: '동참 목록 제공' })
  @Get()
  async getParticipation(): Promise<GetParticipationResponseDto[]> {
    return this.participationService.getParticipationService();
  }

  @ApiOperation({ summary: '동참 등록' })
  @HttpCode(201)
  @Post()
  async createParticipation(
    @Body() body: CreateParticipationRequestDto,
  ): Promise<MessageResponseDto> {
    return this.participationService.putParticipationService(body);
  }

  @ApiOperation({ summary: '동참 수정' })
  @Patch('patch/:id')
  async updateParticipation(
    @Param('id') id: string,
    @Body() body: UpdateParticipationRequestDto,
  ): Promise<MessageResponseDto> {
    return this.participationService.patchParticipationService(
      Number(id),
      body,
    );
  }

  @ApiOperation({ summary: '보여줄 동참 설정' })
  @Patch('set-current/:id')
  async setCurrentParticipation(
    @Param('id') id: string,
  ): Promise<MessageResponseDto> {
    return this.participationService.setCurrentParticipationService(Number(id));
  }

  @ApiOperation({ summary: '동참 삭제' })
  @HttpCode(204)
  @Delete(':id')
  async deleteParticipation(
    @Param('id') id: string,
  ): Promise<MessageResponseDto> {
    return this.participationService.deleteParticipationService(Number(id));
  }
}
