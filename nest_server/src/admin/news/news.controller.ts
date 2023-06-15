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
import { NewsService } from './news.service';
import { GetNewsResponseDto } from './dto/news.response.dto';
import { MessageResponseDto } from '../../app.dto';
import {
  CreateNewsRequestDto,
  UpdateNewsRequestDto,
} from './dto/news.request.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin/News')
@Controller('admin/news')
@UseGuards(JwtAuthGuard, AdminGuard)
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @ApiOperation({ summary: '소식 목록 제공' })
  @Get()
  async getNews(): Promise<GetNewsResponseDto[]> {
    return this.newsService.getNewsService();
  }

  @ApiOperation({ summary: '소식 등록' })
  @HttpCode(201)
  @Post()
  async createNews(
    @Body() body: CreateNewsRequestDto,
  ): Promise<MessageResponseDto> {
    return this.newsService.putNewsService(body);
  }

  @ApiOperation({ summary: '소식 수정' })
  @Patch(':id')
  async updateNews(
    @Param('id') id: string,
    @Body() body: UpdateNewsRequestDto,
  ): Promise<MessageResponseDto> {
    return this.newsService.patchNewsService(Number(id), body);
  }

  @ApiOperation({ summary: '소식 삭제' })
  @HttpCode(204)
  @Delete(':id')
  async deleteNews(@Param('id') id: string): Promise<MessageResponseDto> {
    return this.newsService.deleteNewsService(Number(id));
  }
}
