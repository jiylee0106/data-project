import { IsString, Length } from "class-validator";

class PutVideoRequestDto {
  @IsString()
  @Length(1, 100)
  video_id: string;

  @IsString()
  @Length(1, 100)
  title: string;

  @IsString()
  @Length(1, 500)
  description: string;
}

export { PutVideoRequestDto };
