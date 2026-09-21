import express from "express";
import projectRoutes from "./routes/project.routes";

const app = express();

app.use(express.json());
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "DevShowcase API está funcionando!"
  });
});

export default app;