import { Router } from "express";
import { ProfileController } from "../controllers/ProfileController";

const profileRoutes = Router();
const profileController = new ProfileController();

profileRoutes.post("/", (req, res, next) =>
  profileController.create(req, res, next)
);

profileRoutes.get("/:id", (req, res, next) =>
  profileController.findById(req, res, next)
);

export default profileRoutes;