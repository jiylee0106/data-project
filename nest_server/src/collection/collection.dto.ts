import { IsArray, IsNumber } from 'class-validator';

class GetAllCollectionDto {
  @IsArray()
  @IsNumber({}, { each: true })
  collection: number[];
}

export { GetAllCollectionDto };
