import { LoginResponseDto } from '../../auth/dto/auth.response.dto';

const AuthResponse = {
  status: 200,
  description: '토큰 정보 제공\n\n 제공된 정보: \n - `token`: JWT 토큰',
  type: LoginResponseDto,
};

export { AuthResponse };
