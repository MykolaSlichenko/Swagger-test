import { Router } from "express";
import { getRoot, test } from "../controllers/data.controller";

const router = Router();

/**
 * @openapi
 * /:
 *   get:
 *     summary: Root endpoint
 *     responses:
 *       200:
 *         description: Hello message
 */
router.get("/", getRoot);

/**
 * @openapi
 * /test:
 *   get:
 *     summary: Test endpoint
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/test", test);

export default router;