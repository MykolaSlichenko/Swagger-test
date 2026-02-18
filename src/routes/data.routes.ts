import { Router } from "express";
import {
  createData,
  updateData,
  deleteData,
  getAllData,
  getDataById,
} from "../controllers/data.controller";

const router = Router();

/**
 * @openapi
 * /api/data:
 *   post:
 *     tags:
 *       - Data
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
 *     responses:
 *       201:
 *         description: Data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     value:
 *                       type: string
 */
router.post("/data", createData);

/**
 * @openapi
 * /api/data:
 *   get:
 *     tags:
 *       - Data
 *     summary: List all data
 *     responses:
 *       200:
 *         description: A list of data items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       value:
 *                         type: string
 */
router.get("/data", getAllData);

/**
 * @openapi
 * /api/data/{id}:
 *   get:
 *     tags:
 *       - Data
 *     summary: Get data by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data to retrieve
 *     responses:
 *       200:
 *         description: The requested data item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     value:
 *                       type: string
 *       404:
 *         description: Data not found
 */
router.get("/data/:id", getDataById);

/**
 * @openapi
 * /api/data/{id}:
 *   put:
 *     tags:
 *       - Data
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
 *     responses:
 *       200:
 *         description: Data updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     value:
 *                       type: string
 */
router.put("/data/:id", updateData);

/**
 * @openapi
 * /api/data/{id}:
 *   delete:
 *     tags:
 *       - Data
 *     summary: Delete data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data to delete
 *     responses:
 *       200:
 *         description: Data deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.delete("/data/:id", deleteData);

export default router;
