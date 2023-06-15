import { ActionType, Method } from '@prisma/client';
import { IsDate, IsEnum, IsInt } from 'class-validator';

class GetPointResponseDto {
  @IsInt()
  point: number;
}

class GetAllPointsLogsResponseDto {
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

class GetCampaignLogsResponseDto {
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

class GetDailyEventsLogsResponseDto {
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

export {
  GetPointResponseDto,
  GetAllPointsLogsResponseDto,
  GetCampaignLogsResponseDto,
  GetDailyEventsLogsResponseDto,
};
