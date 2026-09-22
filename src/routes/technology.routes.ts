import { Router } from "express";
import { TechnologyController } from "../controllers/TechnologyController";


const technologyRoutes = Router();
const technologyController = new TechnologyController();

technologyRoutes.post("/", (req, res, next) =>
  technologyController.create(req, res, next)
);

technologyRoutes.get("/", (req, res, next) =>
  technologyController.findAll(req, res, next)
);

export default technologyRoutes;