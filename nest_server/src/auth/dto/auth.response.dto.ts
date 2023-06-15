import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class LoginResponseDto {
  @ApiProperty()
  @IsString()
  token: string;
}

export { LoginResponseDto };
