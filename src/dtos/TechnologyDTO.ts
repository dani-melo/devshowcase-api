export interface CreateTechnologyDTO {
  name: string;
}

export interface TechnologyResponseDTO {
  id: number;
  name: string;
}

export function validateCreateTechnology(
  data: CreateTechnologyDTO
): string[] {
  const errors: string[] = [];

  if (!data.name || data.name.trim() === "") {
    errors.push("O nome da tecnologia é obrigatório.");
  }

  return errors;
}