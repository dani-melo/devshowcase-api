import { FeedbackRepository } from "../repositories/FeedbackRepository";
import { CreateFeedbackDTO } from "../dtos/FeedbackDTO";
import { ProjectRepository } from "../repositories/ProjectRepository";

const feedbackRepository = new FeedbackRepository();
const projectRepository = new ProjectRepository();

export class FeedbackService {
  async create(projectId: number, data: CreateFeedbackDTO) {
    const feedback = await feedbackRepository.create(projectId, data);

    const feedbacks = await feedbackRepository.findByProjectId(projectId);
    
    const totalRating = feedbacks.reduce(
        (sum, item) => sum + item.rating, 0
    );

    const averageRating = totalRating / feedbacks.length;
       
    await projectRepository.updateAverageRating(
        projectId,
        averageRating
        );

    return feedback;
  }

    
}