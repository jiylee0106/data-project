import { IsEmail, Length, Matches, IsString } from "class-validator";

class AuthRequestDto {
  @IsEmail()
  @Length(5, 255)
  email: string = "";

  @IsString()
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/)
  @Length(6, 20)
  password: string = "";
}

class AuthResponseDto {
  @IsString()
  token: string = "";
}

export { AuthRequestDto, AuthResponseDto };
