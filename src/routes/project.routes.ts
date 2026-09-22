import { Router } from "express";
import { ProjectController } from "../controllers/ProjectController";
import { FeedbackController } from "../controllers/FeedbackController";

const projectRoutes = Router();
const projectController = new ProjectController();
const feedbackController = new FeedbackController();

projectRoutes.post("/", (req, res) => projectController.create(req, res));
projectRoutes.get("/", (req, res) => projectController.findAll(req, res));

projectRoutes.put("/:id/upvote", (req, res) =>
  projectController.upvote(req, res)
);

projectRoutes.post("/:id/feedbacks", (req, res) =>
  feedbackController.create(req, res)
);

export default projectRoutes;