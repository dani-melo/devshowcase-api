export interface CreateProfileDTO {
  name: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface ProfileResponseDTO {
  id: number;
  name: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
}

export function validateCreateProfile(data: CreateProfileDTO): string[] {
  const errors: string[] = [];

  if (!data.name || data.name.trim() === "") {
    errors.push("O nome do perfil é obrigatório.");
  }

  if (data.githubUrl) {
    try {
      new URL(data.githubUrl);
    } catch {
      errors.push("A URL do GitHub deve ser válida.");
    }
  }

  if (data.linkedinUrl) {
    try {
      new URL(data.linkedinUrl);
    } catch {
      errors.push("A URL do LinkedIn deve ser válida.");
    }
  }

  return errors;
}