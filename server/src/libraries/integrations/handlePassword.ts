import bcrypt from "bcryptjs";
import { Service } from "typedi";

@Service()
class HandlePassword {
  async comparePassword(password: string, password2: string): Promise<boolean> {
    return await bcrypt.compare(password, password2);
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}

export default HandlePassword;
