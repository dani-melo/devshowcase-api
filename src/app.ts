import express from "express";
import projectRoutes from "./routes/project.routes";
import { errorHandler } from "./middlewares/errorHandler";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import profileRoutes from "./routes/profile.routes";
import technologyRoutes from "./routes/technology.routes"; 

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/projects", projectRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/technologies", technologyRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "DevShowcase API está funcionando!"
  });
});


app.use(errorHandler);
export default app;