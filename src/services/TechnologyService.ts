import { TechnologyRepository } from "../repositories/TechnologyRepository";
import { CreateTechnologyDTO } from "../dtos/TechnologyDTO";

const technologyRepository = new TechnologyRepository();

export class TechnologyService {
  async create(data: CreateTechnologyDTO) {
    return technologyRepository.create(data);
  }

  async findAll() {
    return technologyRepository.findAll();
  }
}