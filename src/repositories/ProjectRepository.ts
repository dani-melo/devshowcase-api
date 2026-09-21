import { prisma } from "../lib/prisma";
import { CreateProjectDTO } from "../dtos/ProjectDTO";

export class ProjectRepository {
  async create(data: CreateProjectDTO) {
    return prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        repositoryUrl: data.repositoryUrl,
        profileId: data.profileId,
      },
    });
}

    async findAll() {
        return prisma.project.findMany();
    }

  }
