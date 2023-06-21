import { Module } from '@nestjs/common';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';
import { CollectionRepository } from './collection.repository';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService, CollectionRepository, PrismaService],
})
export class CollectionModule {}
