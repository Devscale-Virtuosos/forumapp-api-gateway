import { NextFunction, Request, Response } from "express";
import { createError, env } from "../utils";

export async function verifyAccessToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { accessToken, refreshToken } = req.cookies;
  try {
    const response = await fetch(
      `${env.API_GATEWAY_URL}/api/auth/verify-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, refreshToken }),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw createError(
        response.status,
        error.message || "Something went wrong"
      );
    }

    next();
  } catch (error) {
    next(error);
  }
}
