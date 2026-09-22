import { Request, Response, NextFunction } from "express";
import { ProfileService } from "../services/ProfileService";
import { validateCreateProfile } from "../dtos/ProfileDTO";

const profileService = new ProfileService();

export class ProfileController {
  async create(req: Request, res: Response, next: NextFunction) {
    const errors = validateCreateProfile(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    try {
      const profile = await profileService.create(req.body);

      return res.status(201).json(profile);
    } catch (error) {
      return next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    try {
      const profile = await profileService.findById(id);

      if (!profile) {
        const appError = new Error("Profile não encontrado.") as any;
        appError.statusCode = 404;

        return next(appError);
      }

      return res.status(200).json(profile);
    } catch (error) {
      return next(error);
    }
  }
}