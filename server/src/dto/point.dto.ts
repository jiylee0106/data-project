import { ActionType, Method } from "@prisma/client";
import { IsEnum, IsInt } from "class-validator";

class putPointRequestDto {
  @IsEnum(ActionType)
  action_type: ActionType;

  @IsEnum(Method)
  method: Method;
}

class getPointResponseDto {
  @IsInt()
  point: number;
}

export { putPointRequestDto, getPointResponseDto };
