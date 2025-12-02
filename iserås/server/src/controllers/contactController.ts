import { Request, Response, NextFunction } from "express";
import { sendMail } from "../services/mailServices.ts";

export const contactController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, message } = req.body;

 try {
    await sendMail({
      to:email,
      subject: `Ny kontaktförfrågan från ${name}`,
      text: message,
      html: `<p>${message}</p>`
    });

    res.json({ success: true, message: "Mail skickat!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Kunde inte skicka mail." });
  }
    
  } catch (error) {
    next(error);
  }
};