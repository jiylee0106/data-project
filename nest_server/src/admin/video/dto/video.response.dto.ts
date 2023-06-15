import { IsDate, IsInt, IsString, Length } from 'class-validator';

class GetVideoResponseDto {
  @IsInt()
  id: number;
  @IsString()
  @Length(1, 100)
  video_id: string;

  @IsString()
  @Length(1, 100)
  title: string;

  @IsString()
  @Length(1, 500)
  description: string;

  @IsInt()
  is_selected: number;

  @IsDate()
  created_at: Date;
}

export { GetVideoResponseDto };
