import { User as UserType } from "@prisma/client";

declare global {
  namespace Express {
    interface AuthInfo {}

    interface Token {
      token?: string;
    }

    interface User
      extends Pick<UserType, "id" | "email" | "provider" | "role"> {}

    interface Request {
      authInfo?: AuthInfo | undefined;
      user?: User | undefined;
    }
  }
}
