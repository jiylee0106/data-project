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
import { NewsService } from './news.service';
import { GetNewsResponseDto } from './dto/news.response.dto';
import { MessageResponseDto } from '../../app.dto';
import {
  CreateNewsRequestDto,
  UpdateNewsRequestDto,
} from './dto/news.request.dto';

@Controller('admin/news')
@UseGuards(JwtAuthGuard, AdminGuard)
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getNews(): Promise<GetNewsResponseDto[]> {
    return this.newsService.getNewsService();
  }

  @Post()
  async createNews(
    @Body() body: CreateNewsRequestDto,
  ): Promise<MessageResponseDto> {
    return this.newsService.putNewsService(body);
  }

  @Patch(':id')
  async updateNews(
    @Param('id') id: string,
    @Body() body: UpdateNewsRequestDto,
  ): Promise<MessageResponseDto> {
    return this.newsService.patchNewsService(Number(id), body);
  }

  @Delete(':id')
  async deleteNews(@Param('id') id: string): Promise<MessageResponseDto> {
    return this.newsService.deleteNewsService(Number(id));
  }
}
