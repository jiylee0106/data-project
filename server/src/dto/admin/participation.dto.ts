import { IsString, Length } from "class-validator";

class PutParticipationRequestDto {
  @IsString()
  @Length(1, 100)
  title: string;

  @IsString()
  @Length(1, 500)
  description: string;

  @IsString()
  @Length(1, 500)
  image_link: string;
}

export { PutParticipationRequestDto };
