import { Request, Response, NextFunction } from "express";

export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);

  const statusCode = error.statusCode || 500;

  const message =
    error.message || "Ocorreu um erro interno no servidor.";

  return res.status(statusCode).json({
    error: message,
  });
}