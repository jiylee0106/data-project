import { Length, IsString } from "class-validator";

class NewsRequestDto {
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

class VideoRequestDto {
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

class ParticipationRequestDto {
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

class CampaignRequestDto {
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

export {
  NewsRequestDto,
  VideoRequestDto,
  ParticipationRequestDto,
  CampaignRequestDto,
};
