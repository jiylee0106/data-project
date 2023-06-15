import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminGuard } from '../auth/passport/admin.guard';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';

@Controller('admin/news')
@UseGuards(JwtAuthGuard, AdminGuard)
export class NewsController {
  @Get()
  async getAllCollection() {
    return 'hi';
  }
}
