import CollectionController from "@src/controllers/collection.controller";
import { validateJWT } from "@src/middlewares/passport";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const collectionController = Container.get(CollectionController);

router.get("/", validateJWT, collectionController.getAllCollectionController);

export default router;
