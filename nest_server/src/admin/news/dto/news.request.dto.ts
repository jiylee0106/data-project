import { IsString, Length } from 'class-validator';

class CreateNewsRequestDto {
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
}

class UpdateNewsRequestDto {
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
}

export { CreateNewsRequestDto, UpdateNewsRequestDto };
