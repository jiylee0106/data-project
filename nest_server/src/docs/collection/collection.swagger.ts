import { GetAllCollectionResponseDto } from '../../collection/dto/collection.response.dto';

const GetAllCollectionResponse = {
  status: 200,
  description:
    '컬렉션 정보 제공\n\n 제공된 정보: \n - `collection`: 동물 id 모음 배열',
  type: GetAllCollectionResponseDto,
};

export { GetAllCollectionResponse };
