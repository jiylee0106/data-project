import { GetAllCollectionDto } from "@src/dto/collection.dto";
import CollectionRepository from "@src/repository/collection.repository";
import { Inject, Service } from "typedi";

@Service()
class CollectionService {
  @Inject() private readonly collectionRepository: CollectionRepository;

  async getAllCollectionService(user_id: number): Promise<GetAllCollectionDto> {
    const collection = await this.collectionRepository.getAllCollection(
      user_id
    );
    const sortedCollection = collection.sort((a, b) => a.id - b.id);

    return { collection: sortedCollection.map((item) => item.animal_id) };
  }
}

export default CollectionService;
