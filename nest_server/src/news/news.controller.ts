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
import { AdminGuard } from '../auth/passport/admin.guard';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';
import { NewsService } from './news.service';

@Controller('admin/news')
@UseGuards(JwtAuthGuard, AdminGuard)
export class NewsController {
  constructor(private readonly newService: NewsService) {}

  @Get()
  async getNews() {
    return this.newService.getNewsService();
  }

  @Post()
  async createNews(@Body() body: any) {
    return this.newService.putNewsService(body);
  }

  @Patch(':id')
  async updateNews(@Param('id') id: string, @Body() body: any) {
    return this.newService.patchNewsService(Number(id), body);
  }

  @Delete(':id')
  async deleteNews(@Param('id') id: string) {
    return this.newService.deleteNewsService(Number(id));
  }
}
