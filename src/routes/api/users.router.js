import { Router } from 'express';
import {
  registerUser,
  login,
  recoverPassword,
  updateUser,
} from '../../controllers/users.controller.js';
import { verifyUserToken } from '../../middlewares/verifyUserToken.js';
import { verifyOwnership } from '../../middlewares/verifyOwnership.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', login);
router.post('/recover-password', recoverPassword);
router.put('/:userId', verifyUserToken, verifyOwnership, updateUser);

export default router;
