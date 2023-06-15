import {
  Body,
  Controller,
  Delete,
  Get,
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

@Controller('admin/participation')
@UseGuards(JwtAuthGuard, AdminGuard)
export class ParticipationController {
  constructor(private readonly participationService: ParticipationService) {}

  @Get()
  async getParticipation(): Promise<GetParticipationResponseDto[]> {
    return this.participationService.getParticipationService();
  }

  @Post()
  async createParticipation(
    @Body() body: CreateParticipationRequestDto,
  ): Promise<MessageResponseDto> {
    return this.participationService.putParticipationService(body);
  }

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

  @Patch('set-current/:id')
  async setCurrentParticipation(
    @Param('id') id: string,
  ): Promise<MessageResponseDto> {
    return this.participationService.setCurrentParticipationService(Number(id));
  }

  @Delete(':id')
  async deleteParticipation(
    @Param('id') id: string,
  ): Promise<MessageResponseDto> {
    return this.participationService.deleteParticipationService(Number(id));
  }
}
