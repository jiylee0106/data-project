import { Role } from '@prisma/client';
import { IsEnum, IsEmail } from 'class-validator';

class GetUserResponseDto {
  @IsEmail()
  email: string;

  @IsEnum(Role)
  role: Role;
}

export { GetUserResponseDto };
