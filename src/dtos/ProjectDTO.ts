export interface CreateProjectDTO {
  title: string;
  description?: string;
  repositoryUrl?: string;
  profileId: number;
  technologyIds?: number[];
}

export interface ProjectResponseDTO {
  id: number;
  title: string;
  description: string | null;
  repositoryUrl: string | null;
  profileId: number;
}

export function validateCreateProject(data: CreateProjectDTO): string[] {
  const errors: string[] = [];

  if (!data.title || data.title.trim() === "") {
    errors.push("O título do projeto é obrigatório.");
  }

  if (!data.profileId || data.profileId <= 0) {
    errors.push("O profileId é obrigatório e deve ser válido.");
  }

  if (data.repositoryUrl) {
    try {
      new URL(data.repositoryUrl);
    } catch {
      errors.push("A URL do repositório deve ser válida.");
    }
  }

  return errors;
}