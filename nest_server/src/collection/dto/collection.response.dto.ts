import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

class GetAllCollectionResponseDto {
  @ApiProperty()
  @IsArray()
  @IsNumber({}, { each: true })
  collection: number[];
}

export { GetAllCollectionResponseDto };
