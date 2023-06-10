/// <reference types="../../types/customuser.d.ts" />

import passport from "passport";
import jwtStrategy from "./jwt.strategy";
import Container from "typedi";
import UserService from "@src/services/user.service";

const userService = Container.get(UserService);

const initializePassport = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser(async (email: string, done: any) => {
    try {
      const result = await userService.getUserService(email);
      done(null, result);
    } catch (err) {
      done(err);
    }
  });

  passport.use(jwtStrategy);

  return passport;
};

export { initializePassport };
