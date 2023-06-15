import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { RequestUser } from '../auth/interfaces/RequestUser.interface';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';
import { AdminGuard } from '../auth/passport/admin.guard';

@Controller('admin')
@UseGuards(JwtAuthGuard, AdminGuard)
export class AdminController {
  @Get()
  async getUser(@Req() req: RequestUser) {
    console.log(req.user);
  }
}
