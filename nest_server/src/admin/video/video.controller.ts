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
import { VideoService } from './video.service';
import { GetVideoResponseDto } from './dto/video.response.dto';
import {
  CreateVideoRequestDto,
  UpdateVideoRequestDto,
} from './dto/video.request.dto';
import { MessageResponseDto } from '../../app.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('admin/video')
@UseGuards(JwtAuthGuard, AdminGuard)
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @ApiOperation({ summary: '영상 목록 제공' })
  @Get()
  async getVideo(): Promise<GetVideoResponseDto[]> {
    return this.videoService.getVideoService();
  }

  @ApiOperation({ summary: '영상 생성' })
  @HttpCode(201)
  @Post()
  async createVideo(
    @Body() body: CreateVideoRequestDto,
  ): Promise<MessageResponseDto> {
    return this.videoService.putVideoService(body);
  }

  @ApiOperation({ summary: '영상 수정' })
  @Patch('patch/:id')
  async updateVideo(
    @Param('id') id: string,
    @Body() body: UpdateVideoRequestDto,
  ): Promise<MessageResponseDto> {
    return this.videoService.patchVideoService(Number(id), body);
  }

  @ApiOperation({ summary: '보여줄 영상 설정' })
  @Patch('set-current/:id')
  async setCurrentVideo(@Param('id') id: string): Promise<MessageResponseDto> {
    return this.videoService.setCurrentVideoService(Number(id));
  }

  @ApiOperation({ summary: '영상 삭제' })
  @HttpCode(204)
  @Delete(':id')
  async deleteVideo(@Param('id') id: string): Promise<MessageResponseDto> {
    return this.videoService.deleteVideoService(Number(id));
  }
}
