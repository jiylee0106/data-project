import { GetUserResponseDto } from '../../user/dto/user.response.dto';

const GetUserResponse = {
  status: 200,
  description:
    '사용자 정보 제공\n\n 제공된 정보: \n - `email`: 사용자 이메일 \n - `role`: 사용자 권한',
  type: GetUserResponseDto,
};

const GetAllUserResponse = {
  status: 200,
  description:
    '사용자 정보 제공\n\n 제공된 정보: \n - `id`: 유저ID \n - `email`: 사용자 이메일 \n - `provider`: 관리기관 \n - `role`: 사용자 권한 \n - `created_at`: 생성 날짜',
  type: GetUserResponseDto,
};

export { GetUserResponse, GetAllUserResponse };
