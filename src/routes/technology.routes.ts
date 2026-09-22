import { Router } from "express";
import { TechnologyController } from "../controllers/TechnologyController";


const technologyRoutes = Router();
const technologyController = new TechnologyController();

/**
 * @openapi
 * /api/technologies:
 *   post:
 *     summary: Cadastra uma nova tecnologia
 *     tags:
 *       - Technologies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: TypeScript
 *     responses:
 *       201:
 *         description: Tecnologia criada com sucesso
 *       400:
 *         description: Dados inválidos
 */

technologyRoutes.post("/", (req, res, next) =>
  technologyController.create(req, res, next)
);

/**
 * @openapi
 * /api/technologies:
 *   get:
 *     summary: Lista todas as tecnologias
 *     tags:
 *       - Technologies
 *     responses:
 *       200:
 *         description: Lista de tecnologias retornada com sucesso
 */

technologyRoutes.get("/", (req, res, next) =>
  technologyController.findAll(req, res, next)
);

export default technologyRoutes;