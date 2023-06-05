import CollectionService from "@src/services/collection.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const collectionService = Container.get(CollectionService);
@Service()
class CollectionController {
  getAllCollectionController = async (req: Request, res: Response) => {
    const result = await collectionService.getAllCollectionService(
      req.user!.id
    );
    res.status(201).json(result);
  };
}

export default CollectionController;
