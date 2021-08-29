import {Controllers} from "../controllers/controllers"; 
import express from "express";

const routes = express.Router();

routes.post("/", Controllers.createProduct);
routes.get("/", Controllers.readAllProducts);
routes.get("/:id", Controllers.readById);
routes.put("/", Controllers.updateProduct);
routes.delete('/:id', Controllers.deleteProduct);

export default routes;