import { Router } from 'express';
import { ActivityModel } from '../models/Activity';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const activities = await ActivityModel.find()
      .populate('user')
      .populate('team')
      .sort({ loggedAt: -1 });
    res.json({ activities });
  } catch (error) {
    next(error);
  }
});

export default router;
