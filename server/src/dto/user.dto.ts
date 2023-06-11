import { Length, Matches, IsString } from "class-validator";

class ChangePasswordRequestDto {
  @IsString()
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/)
  @Length(6, 20)
  password: string;
}

export { ChangePasswordRequestDto };
