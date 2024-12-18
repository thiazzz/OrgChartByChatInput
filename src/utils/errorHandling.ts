export class ApiError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof ApiError) return error;
  
  const message = error instanceof Error ? error.message : 'An unexpected error occurred';
  return new ApiError(message);
};