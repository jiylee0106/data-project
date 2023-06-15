import { ApiProperty } from '@nestjs/swagger';
import { Provider, Role } from '@prisma/client';
import { IsEnum, IsEmail, IsInt, IsDate } from 'class-validator';

class GetUserResponseDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsEnum(Role)
  role: Role;
}

class GetAllUsersResponseDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsEnum(Provider)
  provider: Provider;

  @ApiProperty()
  @IsEnum(Role)
  role: Role;

  @ApiProperty()
  @IsDate()
  created_at: Date;
}

export { GetUserResponseDto, GetAllUsersResponseDto };
