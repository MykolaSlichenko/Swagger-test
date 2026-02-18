import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import routes from "./routes";

const app: Application = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    // Inject CSS to hide tag/category headers so endpoints appear ungrouped
    customCss: ".opblock-tag { display: none !important; } .opblock-tag-section { padding: 0 !important; border: 0 !important; }",
    swaggerOptions: {
      operationsSorter: (a: any, b: any) => {
        const methodsOrder = ["get", "post", "put", "patch", "delete", "options", "head"];
        const result = methodsOrder.indexOf(a.get("method")) - methodsOrder.indexOf(b.get("method"));
        if (result !== 0) {
          return result;
        }
        return a.get("path").localeCompare(b.get("path"));
      },
    },
  })
);

// Routes
app.use(routes);

export default app;
