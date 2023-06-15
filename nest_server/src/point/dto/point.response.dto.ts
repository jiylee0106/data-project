import { ApiProperty } from '@nestjs/swagger';
import { ActionType, Method } from '@prisma/client';
import { IsDate, IsEnum, IsInt } from 'class-validator';

class GetPointResponseDto {
  @IsInt()
  point: number;
}

class PointsLogsDto {
  @IsInt()
  id: number;

  @IsInt()
  userId: number;

  @IsInt()
  points: number;

  @IsEnum(ActionType)
  action_type: ActionType;

  @IsEnum(Method)
  method: Method;

  @IsDate()
  event_date: Date;
}

class GetAllPointLogsResponseDto {
  @ApiProperty({ type: [PointsLogsDto] })
  logs: PointsLogsDto[];
}

class GetCampaignLogsResponseDto {
  @ApiProperty({ type: [PointsLogsDto] })
  logs: PointsLogsDto[];
}

class GetDailyEventsLogsResponseDto {
  @ApiProperty({ type: [PointsLogsDto] })
  logs: PointsLogsDto[];
}

export {
  GetPointResponseDto,
  GetAllPointLogsResponseDto,
  GetCampaignLogsResponseDto,
  GetDailyEventsLogsResponseDto,
};
