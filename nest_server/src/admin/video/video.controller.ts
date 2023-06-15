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

@Controller('admin/video')
@UseGuards(JwtAuthGuard, AdminGuard)
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  async getVideo() {
    return this.videoService.getVideoService();
  }

  @Post()
  async createVideo(@Body() body: any) {
    return this.videoService.putVideoService(body);
  }

  @Patch('patch/:id')
  async updateVideo(@Param('id') id: string, @Body() body: any) {
    return this.videoService.patchVideoService(Number(id), body);
  }

  @Patch('set-current/:id')
  async setCurrentVideo(@Param('id') id: string) {
    return this.videoService.setCurrentVideoService(Number(id));
  }

  @Delete(':id')
  async deleteVideo(@Param('id') id: string) {
    return this.videoService.deleteVideoService(Number(id));
  }
}
