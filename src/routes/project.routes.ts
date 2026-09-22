import { Router } from "express";
import { ProjectController } from "../controllers/ProjectController";
import { FeedbackController } from "../controllers/FeedbackController";

const projectRoutes = Router();
const projectController = new ProjectController();
const feedbackController = new FeedbackController();

/**
 * @openapi
 * /api/projects:
 *   post:
 *     summary: Cadastra um novo projeto
 *     tags:
 *       - Projects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - profileId
 *             properties:
 *               title:
 *                 type: string
 *                 example: Meu Projeto
 *               description:
 *                 type: string
 *                 example: Projeto desenvolvido para o DevShowcase
 *               repositoryUrl:
 *                 type: string
 *                 example: https://github.com/usuario/projeto
 *               profileId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Projeto criado com sucesso.
 *       400:
 *         description: Dados inválidos.
 *       404:
 *         description: Profile não encontrado.
 */

projectRoutes.post("/", (req, res, next) =>
  projectController.create(req, res, next)
);

/**
 * @openapi
 * /api/projects:
 *   get:
 *     summary: Lista os projetos
 *     description: Retorna os projetos cadastrados com suporte à paginação e filtro por tecnologia.
 *     tags:
 *       - Projects
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Número da página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Quantidade de projetos por página
 *       - in: query
 *         name: technology
 *         schema:
 *           type: string
 *         description: Nome da tecnologia usada para filtrar os projetos
 *         example: TypeScript
 *     responses:
 *       200:
 *         description: Lista de projetos retornada com sucesso.
 */

projectRoutes.get("/", (req, res) => projectController.findAll(req, res));

/**
 * @openapi
 * /api/projects/{id}/upvote:
 *   put:
 *     summary: Incrementa o número de upvotes de um projeto
 *     tags:
 *       - Projects
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do projeto
 *     responses:
 *       200:
 *         description: Upvote registrado com sucesso.
 *       404:
 *         description: Projeto não encontrado.
 */

projectRoutes.put("/:id/upvote", (req, res, next) =>
  projectController.upvote(req, res, next)
);

/**
 * @openapi
 * /api/projects/{id}/feedbacks:
 *   post:
 *     summary: Cadastra um feedback para um projeto
 *     description: Registra uma nota de 1 a 5 e um comentário, atualizando a nota média do projeto.
 *     tags:
 *       - Projects
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do projeto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - authorName
 *               - comment
 *               - rating
 *             properties:
 *               authorName:
 *                 type: string
 *                 example: Daniele
 *               comment:
 *                 type: string
 *                 example: Projeto muito bom!
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *                 example: 5
 *     responses:
 *       201:
 *         description: Feedback cadastrado com sucesso.
 *       400:
 *         description: Dados inválidos ou nota fora do intervalo de 1 a 5.
 *       404:
 *         description: Projeto não encontrado.
 */

projectRoutes.post("/:id/feedbacks", (req, res, next) =>
  feedbackController.create(req, res, next)
);

export default projectRoutes;