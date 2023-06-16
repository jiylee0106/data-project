import { IsArray, IsNumber } from 'class-validator';

class GetAllCollectionResponseDto {
  @IsArray()
  @IsNumber({}, { each: true })
  collection: number[];
}

export { GetAllCollectionResponseDto };
