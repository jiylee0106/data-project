import CollectionController from "@src/controllers/collection.controller";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const collectionController = Container.get(CollectionController);

router.get("/", collectionController.getAllCollectionController);

export default router;
