import { Injectable } from '@nestjs/common';
import { CollectionRepository } from './collection.repository';
import { GetAllCollectionDto } from './collection.dto';

@Injectable()
export class CollectionService {
  constructor(private readonly collectionRepository: CollectionRepository) {}

  async getAllCollectionService(user_id: number): Promise<GetAllCollectionDto> {
    const collection = await this.collectionRepository.getAllCollection(
      user_id,
    );
    const sortedCollection = collection.sort((a, b) => a.id - b.id);

    return { collection: sortedCollection.map((item) => item.animal_id) };
  }
}
