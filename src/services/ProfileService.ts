import { ProfileRepository } from "../repositories/ProfileRepository";
import { CreateProfileDTO } from "../dtos/ProfileDTO";

const profileRepository = new ProfileRepository();

export class ProfileService {
  async create(data: CreateProfileDTO) {
    return profileRepository.create(data);
  }

  async findById(id: number) {
    return profileRepository.findById(id);
  }
}