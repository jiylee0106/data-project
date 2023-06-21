import { CampaignType } from '@prisma/client';
import { IsEnum, IsString, Length } from 'class-validator';

class CreateCampaignRequestDto {
  @IsEnum(CampaignType)
  type: CampaignType;

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

class UpdateCampaignRequestDto {
  @IsEnum(CampaignType)
  type: CampaignType;

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

export { CreateCampaignRequestDto, UpdateCampaignRequestDto };
