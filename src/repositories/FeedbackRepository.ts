import { prisma } from "../lib/prisma";
import { CreateFeedbackDTO } from "../dtos/FeedbackDTO";

export class FeedbackRepository {
  async create(projectId: number, data: CreateFeedbackDTO) {
    return prisma.feedback.create({
      data: {
        authorName: data.authorName,
        comment: data.comment,
        rating: data.rating,
        projectId: projectId,
      },
    });
  }

  async findByProjectId(projectId: number) {
    return prisma.feedback.findMany({
        where: {
        projectId: projectId,
        },
    });
  }
}

