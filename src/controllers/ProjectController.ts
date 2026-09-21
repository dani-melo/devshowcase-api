import { Request, Response } from "express";
import { ProjectService } from "../services/ProjectService";
import { validateCreateProject } from "../dtos/ProjectDTO";

const projectService = new ProjectService();

export class ProjectController {
  async create(req: Request, res: Response) {
    const errors = validateCreateProject(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    try{
        const project = await projectService.create(req.body);

        return res.status(201).json(project);
        }catch (error) {
        return res.status(404).json({ error: "Profile não encontrado." });
    }
  }
  async findAll(req: Request, res: Response) {
   const projects = await projectService.findAll();

   return res.status(200).json(projects);
  }
}
