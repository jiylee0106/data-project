import {
  Body,
  Controller,
  Get,
  HttpCode,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PointService } from './point.service';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RequestUser } from '../auth/interfaces/RequestUser.interface';
import { PutPointsRequestDto } from './dto/point.request.dto';
import {
  GetAllPointLogsResponseDto,
  GetCampaignLogsResponseDto,
  GetDailyEventsLogsResponseDto,
  GetPointResponseDto,
} from './dto/point.response.dto';
import { MessageResponseDto } from '../app.dto';
import {
  GetAllPointLogsResponse,
  GetCampaignLogsResponse,
  GetDailyEventsLogsResponse,
  PointResponse,
} from '../docs/point/point.swagger';
import { MessageResponse } from 'src/docs/global.swagger';

@ApiTags('Point')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('point')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @ApiOperation({ summary: '유저 보유 포인트 제공' })
  @ApiResponse(PointResponse)
  @Get()
  async getPoint(@Req() req: RequestUser): Promise<GetPointResponseDto> {
    const result = await this.pointService.getPointService(req.user.id);
    return result;
  }

  @ApiOperation({ summary: '유저 모든 포인트 로그 제공' })
  @ApiResponse(GetAllPointLogsResponse)
  @Get('logs')
  async getAllLogs(
    @Req() req: RequestUser,
  ): Promise<GetAllPointLogsResponseDto> {
    const result = await this.pointService.getAllLogService(req.user.id);
    return result;
  }

  @ApiOperation({ summary: '유저 캠페인 로그 제공' })
  @ApiResponse(GetCampaignLogsResponse)
  @Get('campaign')
  async getCampaignLogs(
    @Req() req: RequestUser,
  ): Promise<GetCampaignLogsResponseDto> {
    const result = await this.pointService.getCampaignLogService(req.user.id);
    return result;
  }

  @ApiOperation({ summary: '유저 일일 이벤트 로그 제공' })
  @ApiResponse(GetDailyEventsLogsResponse)
  @Get('daily-events')
  async getDailyEventsLogs(
    @Req() req: RequestUser,
  ): Promise<GetDailyEventsLogsResponseDto> {
    const result = await this.pointService.getDailyEventsLogService(
      req.user.id,
    );
    return result;
  }

  @ApiOperation({ summary: '유저 포인트 적립/사용' })
  @ApiResponse(MessageResponse(201, '포인트 적립 성공 | 포인트 사용 성공'))
  @HttpCode(201)
  @Put()
  async putPoints(
    @Req() req: RequestUser,
    @Body() body: PutPointsRequestDto,
  ): Promise<MessageResponseDto> {
    console.log(req.user);
    const result = await this.pointService.putPointService({
      userId: req.user.id,
      ...body,
    });
    return result;
  }
}
