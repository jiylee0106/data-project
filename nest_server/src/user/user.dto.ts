import { ApiProperty } from '@nestjs/swagger';
import { Length, Matches, IsString } from 'class-validator';

class ChangePasswordRequestDto {
  @ApiProperty()
  @IsString({ message: '비밀번호 형식을 확인하세요' })
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/, {
    message: '비밀번호 형식을 확인하세요(영문+숫자+특수문자)',
  })
  @Length(8, 20, { message: '비밀번호는 8자이상 20자이하로 입력하세요' })
  password: string;
}

export { ChangePasswordRequestDto };
