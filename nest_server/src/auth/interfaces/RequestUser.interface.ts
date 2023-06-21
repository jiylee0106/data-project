import { Role } from '@prisma/client';
import { Request } from 'express';

interface RequestUser extends Request {
  user: {
    id: number;
    email: string;
    role: Role;
    token?: string;
  };
}

export { RequestUser };
