import { prisma } from "../lib/prisma";
import { CreateTechnologyDTO } from "../dtos/TechnologyDTO";

export class TechnologyRepository {
  async create(data: CreateTechnologyDTO) {
    return prisma.technology.create({
      data: {
        name: data.name,
      },
    });
  }

  async findAll() {
    return prisma.technology.findMany();
  }
}