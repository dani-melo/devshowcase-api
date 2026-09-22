import { Request, Response, NextFunction } from "express";
import { FeedbackService } from "../services/FeedbackService";
import { validateCreateFeedback } from "../dtos/FeedbackDTO";

const feedbackService = new FeedbackService();

export class FeedbackController {
    async create(req: Request, res: Response, next: NextFunction) {
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
        const appError = new Error("Projeto não encontrado.") as any;
        appError.statusCode = 404;

        return next(appError);
      }
    }
}