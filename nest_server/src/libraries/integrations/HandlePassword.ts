import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { ChangePasswordRequestDto } from 'src/user/user.dto';

@Injectable()
export class HandlePassword {
  async hashPassword(password: ChangePasswordRequestDto): Promise<string> {
    return await bcryptjs.hash(password, 10);
  }

  async comparePassword(
    inputPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcryptjs.compare(inputPassword, hashedPassword);
  }
}
