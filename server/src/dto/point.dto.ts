import { ActionType, Method } from "@prisma/client";
import { IsEnum } from "class-validator";

class putPointRequestDto {
  @IsEnum(ActionType)
  action_type: ActionType;

  @IsEnum(Method)
  method: Method;
}

export { putPointRequestDto };
