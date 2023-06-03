import bcrypt from "bcryptjs";
import { Service } from "typedi";

@Service()
class HandlePassword {
  async comparePassword(password: string, password2: string) {
    return await bcrypt.compare(password, password2);
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }
}

export default HandlePassword;
