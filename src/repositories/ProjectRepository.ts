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

    async findAll(page: number = 1, limit: number = 10) {
      const skip = (page - 1) * limit;

       return prisma.project.findMany({
        skip: skip,
        take: limit,
      });
    }

    async updateAverageRating(projectId: number, averageRating: number) {
      return prisma.project.update({
        where: {
        id: projectId,
        },
        data: {
        averageRating: averageRating,
        },
      });
    }

    async incrementUpvote(projectId: number) {
      return prisma.project.update({
        where: {
        id: projectId,
        },
        data: {
        upvotes: {
          increment: 1,
        },
        },
      });
    }
  }
