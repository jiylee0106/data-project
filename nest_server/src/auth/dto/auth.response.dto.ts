import { IsString } from 'class-validator';

class LoginResponseDto {
  @IsString()
  token: string;
}

export { LoginResponseDto };
