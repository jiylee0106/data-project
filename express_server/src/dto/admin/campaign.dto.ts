import { CampaignType } from "@prisma/client";
import { IsEnum, IsString, Length } from "class-validator";

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

export { PutCampaignRequestDto, PatchCampaignRequestDto };
