import { Request, Response, NextFunction } from "express";
import { ProjectService } from "../services/ProjectService";
import { validateCreateProject } from "../dtos/ProjectDTO";

const projectService = new ProjectService();

export class ProjectController {
  async create(req: Request, res: Response, next: NextFunction) {
  const errors = validateCreateProject(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const project = await projectService.create(req.body);

    return res.status(201).json(project);
  } catch (error) {
    const appError = new Error("Profile não encontrado.") as any;
    appError.statusCode = 404;

    return next(appError);
  }
}

  async findAll(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const projects = await projectService.findAll(page, limit);

     return res.status(200).json(projects);
  }

  async upvote(req: Request, res: Response, next: NextFunction) {
   const projectId = Number(req.params.id);

      try {
        const project = await projectService.upvote(projectId);

        return res.status(200).json(project);
      } catch (error) {
        const appError = new Error("Projeto não encontrado.") as any;
        appError.statusCode = 404;

        return next(appError);
      }
  }
}
