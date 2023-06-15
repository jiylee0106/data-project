import { IsDate, IsInt, IsString, Length } from 'class-validator';

class GetNewsResponseDto {
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
  link: string;

  @IsString()
  @Length(1, 500)
  image_link: string;

  @IsDate()
  created_at: Date;
}

export { GetNewsResponseDto };
