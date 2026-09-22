import { Router } from "express";
import { ProfileController } from "../controllers/ProfileController";

const profileRoutes = Router();
const profileController = new ProfileController();

/**
 * @openapi
 * /api/profiles:
 *   post:
 *     summary: Cadastra um novo perfil
 *     tags:
 *       - Profiles
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
 *                 example: Daniele Rocha Melo
 *               githubUrl:
 *                 type: string
 *                 example: https://github.com/dani-melo
 *               linkedinUrl:
 *                 type: string
 *                 example: https://www.linkedin.com
 *     responses:
 *       201:
 *         description: Perfil criado com sucesso
 *       400:
 *         description: Dados inválidos
 */

profileRoutes.post("/", (req, res, next) =>
  profileController.create(req, res, next)
);

/**
 * @openapi
 * /api/profiles/{id}:
 *   get:
 *     summary: Busca um perfil pelo ID
 *     tags:
 *       - Profiles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do perfil
 *     responses:
 *       200:
 *         description: Perfil encontrado com sucesso
 *       404:
 *         description: Perfil não encontrado
 */

profileRoutes.get("/:id", (req, res, next) =>
  profileController.findById(req, res, next)
);

export default profileRoutes;