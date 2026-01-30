import { Router } from "express";
import {
  createData,
  updateData,
  deleteData,
} from "../controllers/data.controller";

const router = Router();

router.post("/data", createData);
router.put("/data/:id", updateData);
router.delete("/data/:id", deleteData);

export default router;
