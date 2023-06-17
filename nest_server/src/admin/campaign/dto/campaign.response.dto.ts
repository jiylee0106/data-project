import { ApiProperty } from '@nestjs/swagger';
import { CampaignType } from '@prisma/client';
import { IsDate, IsEnum, IsInt, IsString, Length } from 'class-validator';

class GetCampaignResponseDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsEnum(CampaignType)
  type: CampaignType;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  title: string;

  @ApiProperty()
  @IsString()
  @Length(1, 500)
  description: string;

  @ApiProperty()
  @IsString()
  @Length(1, 500)
  image_link: string;

  @ApiProperty()
  @IsDate()
  created_at: Date;
}

export { GetCampaignResponseDto };
