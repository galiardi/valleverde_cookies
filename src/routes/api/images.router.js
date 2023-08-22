import { Router } from 'express';
import {
  createImage,
  getImagesByEventId,
} from '../../controllers/images.controller.js';
import { verifyAdminToken } from '../../middlewares/verifyAdminToken.js';

const router = Router();

router.post('/', verifyAdminToken, createImage);
router.get('/:eventId', getImagesByEventId);

export default router;
