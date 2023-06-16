import { ApiProperty } from '@nestjs/swagger';
import { ActionType, Method } from '@prisma/client';
import { IsEnum } from 'class-validator';

class PutPointsRequestDto {
  @ApiProperty()
  @IsEnum(ActionType)
  action_type: ActionType;

  @ApiProperty()
  @IsEnum(Method)
  method: Method;
}

export { PutPointsRequestDto };
