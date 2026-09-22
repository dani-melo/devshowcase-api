import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "DevShowcase API",
      version: "1.0.0",
      description: "API para gerenciamento de perfis, projetos, tecnologias e feedbacks.",
    },
    servers: [
  {
    url: "/",
    description: "Servidor atual",
  },
],
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);