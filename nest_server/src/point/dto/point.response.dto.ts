import { ApiProperty } from '@nestjs/swagger';
import { ActionType, Method } from '@prisma/client';
import { IsDate, IsEnum, IsInt } from 'class-validator';

class GetPointResponseDto {
  @ApiProperty()
  @IsInt()
  point: number;
}

class PointsLogsDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt()
  userId: number;

  @ApiProperty()
  @IsInt()
  points: number;

  @ApiProperty()
  @IsEnum(ActionType)
  action_type: ActionType;

  @ApiProperty()
  @IsEnum(Method)
  method: Method;

  @ApiProperty()
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
