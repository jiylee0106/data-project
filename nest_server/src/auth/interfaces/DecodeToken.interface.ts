import { Role } from '@prisma/client';

interface DecodedToken {
  username: string;
  sub: number;
  role: Role;
  iat?: number;
  exp?: number;
}

export { DecodedToken };
