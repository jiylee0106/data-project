import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';
import { UserRepository } from './user.repository';
import { HandlePassword } from '../libraries/integrations/HandlePassword';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService, HandlePassword],
  exports: [UserRepository],
})
export class UserModule {}
