import { Router } from 'express';
import { UserModel } from '../models/User';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const users = await UserModel.find().populate('team').sort({ displayName: 1 });
    res.json({ users });
  } catch (error) {
    next(error);
  }
});

export default router;
