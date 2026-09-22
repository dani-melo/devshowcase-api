export interface CreateFeedbackDTO {
  authorName: string;
  comment: string;
  rating: number;
}

export function validateCreateFeedback(data: CreateFeedbackDTO): string[] {
  const errors: string[] = [];

  if (!data.authorName || data.authorName.trim() === "") {
    errors.push("O nome do autor é obrigatório.");
  }

  if (!data.comment || data.comment.trim() === "") {
    errors.push("O comentário é obrigatório.");
  }

  if (!data.rating || data.rating < 1 || data.rating > 5) {
    errors.push("A nota deve ser entre 1 e 5.");
  }

  return errors;
}