import { Router } from "express";
import {
  createData,
  updateData,
  deleteData,
} from "../controllers/data.controller";

const router = Router();

/**
 * @openapi
 * /api/data:
 *   post:
 *     summary: Create data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               value:
 *                 type: string
 *             required:
 *               - name
 *               - value
 */
router.post("/data", createData);

/**
 * @openapi
 * /api/data/{id}:
 *   put:
 *     summary: Update data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               value:
 *                 type: string
 */
router.put("/data/:id", updateData);

/**
 * @openapi
 * /api/data/{id}:
 *   delete:
 *     summary: Delete data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data to delete
 */
router.delete("/data/:id", deleteData);

export default router;
