import { Request, Response, NextFunction } from "express";
import { TechnologyService } from "../services/TechnologyService";
import { validateCreateTechnology } from "../dtos/TechnologyDTO";

const technologyService = new TechnologyService();

export class TechnologyController {
  async create(req: Request, res: Response, next: NextFunction) {
    const errors = validateCreateTechnology(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    try {
      const technology = await technologyService.create(req.body);

      return res.status(201).json(technology);
    } catch (error) {
      return next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const technologies = await technologyService.findAll();

      return res.status(200).json(technologies);
    } catch (error) {
      return next(error);
    }
  }
}