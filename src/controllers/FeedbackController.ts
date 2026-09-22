import { Request, Response } from "express";
import { FeedbackService } from "../services/FeedbackService";
import { validateCreateFeedback } from "../dtos/FeedbackDTO";

const feedbackService = new FeedbackService();

export class FeedbackController {
  async create(req: Request, res: Response) {
    const projectId = Number(req.params.id);

    const errors = validateCreateFeedback(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    try {
      const feedback = await feedbackService.create(
        projectId,
        req.body
      );

      return res.status(201).json(feedback);
    } catch (error) {
      return res.status(404).json({
        error: "Projeto não encontrado."
      });
    }
  }
}