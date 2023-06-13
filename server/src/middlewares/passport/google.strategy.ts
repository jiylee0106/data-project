import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleConfig } from "@src/libraries/config/config";
import Container from "typedi";
import UserService from "@src/services/user.service";
import HandleLogin from "@src/libraries/integrations/handleLogin";
import AuthService from "@src/services/auth.service";

const userService = Container.get(UserService);
const authService = Container.get(AuthService);
const handleLogin = Container.get(HandleLogin);

const googleStrategy = new GoogleStrategy(
  googleConfig,
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile._json.email as string;
      const provider = "Google";

      const existingUser = await userService.getUserService(email);

      if (existingUser) {
        const { id, email, provider, role } = existingUser;
        return done(null, { id, email, provider, role });
      }

      await authService.registerService(
        {
          email,
          password: "",
        },
        provider
      );

      const savedUser = await userService.getUserService(email);
      done(null, savedUser!);
    } catch (err: any) {
      done(err);
    }
  }
);

export default googleStrategy;
