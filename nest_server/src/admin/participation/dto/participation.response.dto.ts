import { IsDate, IsInt, IsString, Length } from 'class-validator';

class GetParticipationResponseDto {
  @IsInt()
  id: number;

  @IsString()
  @Length(1, 100)
  title: string;

  @IsString()
  @Length(1, 500)
  description: string;

  @IsString()
  @Length(1, 500)
  image_link: string;

  @IsInt()
  is_selected: number;

  @IsDate()
  created_at: Date;
}

export { GetParticipationResponseDto };
