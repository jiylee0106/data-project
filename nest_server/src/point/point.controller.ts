import { Body, Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { PointService } from './point.service';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RequestUser } from '../auth/interfaces/RequestUser.interface';
import { PutPointsRequestDto } from './dto/point.request.dto';

@ApiTags('Point')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('point')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Get()
  async getPoint(@Req() req: RequestUser) {
    const result = await this.pointService.getPointService(req.user.id);
    return result;
  }

  @Get('logs')
  async getAllLogs(@Req() req: RequestUser) {
    const result = await this.pointService.getAllLogService(req.user.id);
    return result;
  }

  @Get('campaign')
  async getCampaignLogs(@Req() req: RequestUser) {
    const result = await this.pointService.getCampaignLogService(req.user.id);
    return result;
  }

  @Get('daily-events')
  async getDailyEventsLogs(@Req() req: RequestUser) {
    const result = await this.pointService.getDailyEventsLogService(
      req.user.id,
    );
    return result;
  }

  @Put()
  async putPoints(@Req() req: RequestUser, @Body() body: PutPointsRequestDto) {
    const result = await this.pointService.putPointService({
      userId: req.user.id,
      ...body,
    });
    return result;
  }
}
