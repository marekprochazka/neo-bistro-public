import { ZodError } from 'zod';

export class APIError extends Error {
  public fields: string[];
  public description: string;

  constructor(message: string, fields: string[]) {
    super(message);
    this.name = 'APIError';
    this.fields = fields;
    this.description = message;
  }

  static fromZodError(error: ZodError) {
    return new APIError(
      error.message,
      error.issues.map((issue) => issue.path.join('.')),
    );
  }
}
