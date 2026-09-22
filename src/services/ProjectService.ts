import { ProjectRepository } from "../repositories/ProjectRepository";
import { CreateProjectDTO } from "../dtos/ProjectDTO";

const projectRepository = new ProjectRepository();

export class ProjectService {
  async create(data: CreateProjectDTO) {
    return projectRepository.create(data);
  }

  async findAll(page: number = 1, limit: number = 10) {
    return projectRepository.findAll(page, limit);
  }

  async upvote(projectId: number) {
   return projectRepository.incrementUpvote(projectId);
  }
}