import path from "path";
import swaggerJsdoc, { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },

  apis: [
    path.join(__dirname, "/**/*.ts"),
    path.join(__dirname, "/**/*.js"),
  ],
};

export const swaggerSpec = swaggerJsdoc(options);