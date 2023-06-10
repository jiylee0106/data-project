import { CampaignType } from "@prisma/client";
import { Length, IsString, IsInt, IsEnum } from "class-validator";

class PutNewsRequestDto {
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

class PutCampaignRequestDto {
  @IsEnum(CampaignType)
  type: string;

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

class PatchCampaignRequestDto {
  @IsEnum(CampaignType)
  type: string;

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

class PatchVideoRequestDto {
  @IsInt()
  id: number;
}

class PatchParticipationRequestDto {
  @IsInt()
  id: number;
}

export {
  PutNewsRequestDto,
  PutVideoRequestDto,
  PutParticipationRequestDto,
  PutCampaignRequestDto,
  PatchCampaignRequestDto,
  PatchVideoRequestDto,
  PatchParticipationRequestDto,
};
