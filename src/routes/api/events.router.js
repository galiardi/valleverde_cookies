import { Router } from 'express';
import {
  registerUserOnEvent,
  createEvent,
  getAllEvents,
  getEventByYear,
} from '../../controllers/events.controller.js';
import { verifyAdminToken } from '../../middlewares/verifyAdminToken.js';
import { verifyUserToken } from '../../middlewares/verifyUserToken.js';

const router = Router();

router.post('/register', verifyUserToken, registerUserOnEvent); // ownership verificada en el controller
router.post('/create', verifyAdminToken, createEvent);
router.get('/all', getAllEvents);
router.get('/:year', getEventByYear);

export default router;
