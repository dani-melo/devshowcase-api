import { Router } from "express";
import { ProjectController } from "../controllers/ProjectController";

const projectRoutes = Router();
const projectController = new ProjectController();

projectRoutes.post("/", (req, res) => projectController.create(req, res));

export default projectRoutes;