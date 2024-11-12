import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

export const getUsers = async (req: Request, res: Response) => {
    console.log("user request", req)
  const limit = parseInt(req.query.limit as string) || 10;
  const page = parseInt(req.query.page as string) || 1;
  const sortBy = (req.query.sort as string) || 'createdAt';
  const search = req.query.search ? JSON.parse(req.query.search as string) : {};

  const query = UserModel.find(search)
    .limit(limit)
    .skip((page - 1) * limit)
    .sort(sortBy);

  const total = await UserModel.countDocuments(search);
  const items = await query.exec();

  res.json({
    total,
    limit,
    page,
    sortBy,
    items,
  });
};
