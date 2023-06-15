import { Body, Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { PointService } from './point.service';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RequestUser } from '../auth/interfaces/RequestUser.interface';
import { PutPointsRequestDto } from './dto/point.request.dto';
import {
  GetAllPointLogsResponseDto,
  GetCampaignLogsResponseDto,
  GetDailyEventsLogsResponseDto,
  GetPointResponseDto,
} from './dto/point.response.dto';
import { MessageResponseDto } from '../app.dto';

@ApiTags('Point')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('point')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Get()
  async getPoint(@Req() req: RequestUser): Promise<GetPointResponseDto> {
    const result = await this.pointService.getPointService(req.user.id);
    return result;
  }

  @Get('logs')
  async getAllLogs(
    @Req() req: RequestUser,
  ): Promise<GetAllPointLogsResponseDto> {
    const result = await this.pointService.getAllLogService(req.user.id);
    return result;
  }

  @Get('campaign')
  async getCampaignLogs(
    @Req() req: RequestUser,
  ): Promise<GetCampaignLogsResponseDto> {
    const result = await this.pointService.getCampaignLogService(req.user.id);
    return result;
  }

  @Get('daily-events')
  async getDailyEventsLogs(
    @Req() req: RequestUser,
  ): Promise<GetDailyEventsLogsResponseDto> {
    const result = await this.pointService.getDailyEventsLogService(
      req.user.id,
    );
    return result;
  }

  @Put()
  async putPoints(
    @Req() req: RequestUser,
    @Body() body: PutPointsRequestDto,
  ): Promise<MessageResponseDto> {
    const result = await this.pointService.putPointService({
      userId: req.user.id,
      ...body,
    });
    return result;
  }
}
