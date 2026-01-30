import { Request, Response } from "express";

export const getRoot = (_req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
};

export const createData = (req: Request, res: Response) => {
  const data = req.body;
  console.log("Received data:", data);

  res.status(201).json({
    message: "Data received successfully",
    data,
  });
};

export const updateData = (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  console.log(`Updating data for ID ${id}:`, data);

  res.json({
    message: `Data updated successfully for ID ${id}`,
    data,
  });
};

export const deleteData = (req: Request, res: Response) => {
  const { id } = req.params;

  console.log(`Deleting data for ID ${id}`);

  res.json({
    message: `Data deleted successfully for ID ${id}`,
  });
};

export const test = (_req: Request, res: Response) => {
  res.json({ ok: true });
};
