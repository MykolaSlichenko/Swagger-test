import { Request, Response } from "express";

type DataItem = {
  id: string;
  name?: string;
  value?: string;
  [key: string]: any;
};

const dataStore: DataItem[] = [];

const generateId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

export const getRoot = (_req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
};

export const getAllData = (_req: Request, res: Response) => {
  res.json({ data: dataStore });
};

export const getDataById = (req: Request, res: Response) => {
  const { id } = req.params;
  const item = dataStore.find((d) => d.id === id);
  if (!item) {
    return res.status(404).json({ message: `Data with ID ${id} not found` });
  }
  res.json({ data: item });
};

export const createData = (req: Request, res: Response) => {
  const payload = req.body || {};
  const newItem: DataItem = { id: generateId(), ...payload };
  dataStore.push(newItem);
  console.log("Created data:", newItem);

  res.status(201).json({
    message: "Data created successfully",
    data: newItem,
  });
};

export const updateData = (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body || {};
  const idx = dataStore.findIndex((d) => d.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: `Data with ID ${id} not found` });
  }

  const updated = { ...dataStore[idx], ...payload };
  dataStore[idx] = updated;
  console.log(`Updated data for ID ${id}:`, updated);

  res.json({ message: `Data updated successfully for ID ${id}`, data: updated });
};

export const deleteData = (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = dataStore.findIndex((d) => d.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: `Data with ID ${id} not found` });
  }

  dataStore.splice(idx, 1);
  console.log(`Deleted data with ID ${id}`);

  res.json({ message: `Data deleted successfully for ID ${id}` });
};

export const test = (_req: Request, res: Response) => {
  res.json({ ok: true });
};
