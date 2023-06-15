import { CampaignType } from '@prisma/client';
import { IsDate, IsEnum, IsInt, IsString, Length } from 'class-validator';

class GetCampaignResponseDto {
  @IsInt()
  id: number;

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

  @IsDate()
  created_at: Date;
}

export { GetCampaignResponseDto };
