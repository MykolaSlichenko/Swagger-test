import { Router } from "express";
// import { getRoot, test } from "../controllers/data.controller";
// import dataRoutes from "./data.routes";

const router = Router();

// /**
//  * @openapi
//  * /:
//  *   get:
//  *     tags:
//  *       - Info
//  *     summary: Root endpoint
//  *     responses:
//  *       200:
//  *         description: Hello message
//  */
// router.get("/", getRoot);

// /**
//  * @openapi
//  * /test:
//  *   get:
//  *     tags:
//  *       - Info
//  *     summary: Test endpoint
//  *     responses:
//  *       200:
//  *         description: OK
//  */
// router.get("/test", test);

// // Mount data routes with /api prefix
// router.use("/api", dataRoutes);

export default router;