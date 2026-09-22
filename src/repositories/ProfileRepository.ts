import { prisma } from "../lib/prisma";
import { CreateProfileDTO } from "../dtos/ProfileDTO";

export class ProfileRepository {
  async create(data: CreateProfileDTO) {
    return prisma.profile.create({
      data: {
        name: data.name,
        githubUrl: data.githubUrl,
        linkedinUrl: data.linkedinUrl,
      },
    });
  }

  async findById(id: number) {
    return prisma.profile.findUnique({
      where: {
        id: id,
      },
    });
  }
}