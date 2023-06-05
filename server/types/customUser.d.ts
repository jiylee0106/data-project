// custom.d.ts
import { User as UserType } from "@prisma/client";

declare global {
  namespace Express {
    interface AuthInfo {}
    interface User extends UserType {}

    interface Request {
      authInfo?: AuthInfo | undefined;
      user?: User | undefined;
    }
  }
}
