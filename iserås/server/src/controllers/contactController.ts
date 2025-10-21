import { Request, Response, NextFunction } from "express";

export const contactController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO: ta reda på vilka parameterar som är nödvändiga
    const { name, email } = req.body;

    // TODO2: Validera input

    // TODO3: Skicka e-post
    res.status(201).json({
      message: "Tack för ditt meddelande, vi återkommer snart!",
    });
  } catch (error) {
    next(error);
  }
};