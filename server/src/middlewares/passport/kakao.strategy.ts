import { Strategy as KakaoStrategy } from "passport-kakao";
import { kakaoConfig } from "@src/libraries/config/config";
import dotenv from "dotenv";
import UserService from "@src/services/user.service";
import AuthService from "@src/services/auth.service";
import HandleLogin from "@src/libraries/integrations/handleLogin";
import Container from "typedi";
dotenv.config();

const userService = Container.get(UserService);
const authService = Container.get(AuthService);
const handleLogin = Container.get(HandleLogin);

const kakaoStrategy = new KakaoStrategy(
  kakaoConfig,
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.id + "@kakao.com";
      const provider = "Kakao";

      const existingUser = await userService.getUserService(email);

      if (existingUser) {
        const { id, email, provider, role } = existingUser;
        const { token } = handleLogin.signJWT({ id, email, provider, role });
        return done(null, { id, email, provider, role, token });
      }

      await authService.registerService(
        {
          email,
          password: "",
        },
        provider
      );

      const savedUser = await userService.getUserService(email);
      const { id } = savedUser!;

      const { token } = handleLogin.signJWT({
        id,
        email,
        provider,
        role: savedUser!.role,
      });

      done(null, { ...savedUser, token });
    } catch (err) {
      done(err);
    }
  }
);

export default kakaoStrategy;
