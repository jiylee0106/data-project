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
import { VideoService } from './video.service';
import { GetVideoResponseDto } from './dto/video.response.dto';
import {
  CreateVideoRequestDto,
  UpdateVideoRequestDto,
} from './dto/video.request.dto';
import { MessageResponseDto } from '../../app.dto';

@Controller('admin/video')
@UseGuards(JwtAuthGuard, AdminGuard)
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  async getVideo(): Promise<GetVideoResponseDto[]> {
    return this.videoService.getVideoService();
  }

  @Post()
  async createVideo(
    @Body() body: CreateVideoRequestDto,
  ): Promise<MessageResponseDto> {
    return this.videoService.putVideoService(body);
  }

  @Patch('patch/:id')
  async updateVideo(
    @Param('id') id: string,
    @Body() body: UpdateVideoRequestDto,
  ): Promise<MessageResponseDto> {
    return this.videoService.patchVideoService(Number(id), body);
  }

  @Patch('set-current/:id')
  async setCurrentVideo(@Param('id') id: string): Promise<MessageResponseDto> {
    return this.videoService.setCurrentVideoService(Number(id));
  }

  @Delete(':id')
  async deleteVideo(@Param('id') id: string): Promise<MessageResponseDto> {
    return this.videoService.deleteVideoService(Number(id));
  }
}
