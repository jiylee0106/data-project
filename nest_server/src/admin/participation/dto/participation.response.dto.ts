import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsString, Length } from 'class-validator';

class GetParticipationResponseDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  title: string;

  @ApiProperty()
  @IsString()
  @Length(1, 500)
  description: string;

  @ApiProperty()
  @IsString()
  @Length(1, 500)
  image_link: string;

  @ApiProperty()
  @IsInt()
  is_selected: number;

  @ApiProperty()
  @IsDate()
  created_at: Date;
}

export { GetParticipationResponseDto };
