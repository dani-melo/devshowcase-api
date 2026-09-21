import { ProjectRepository } from "../repositories/ProjectRepository";
import { CreateProjectDTO } from "../dtos/ProjectDTO";

const projectRepository = new ProjectRepository();

export class ProjectService {
  async create(data: CreateProjectDTO) {
    return projectRepository.create(data);
  }

  async findAll() {
   return projectRepository.findAll();
}
}