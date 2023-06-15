import { IsString, Length } from 'class-validator';

class CreateParticipationRequestDto {
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

class UpdateParticipationRequestDto {
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

export { CreateParticipationRequestDto, UpdateParticipationRequestDto };
