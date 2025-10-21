import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

app.use("/api", contactRoutes);
app.use(errorHandler);
export default app;