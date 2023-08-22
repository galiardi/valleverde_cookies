import { Router } from 'express';
import {
  createDonation,
  getDonationsByUserId,
} from '../../controllers/donations.controller.js';
import { verifyUserToken } from '../../middlewares/verifyUserToken.js';
import { verifyOwnership } from '../../middlewares/verifyOwnership.js';

const router = Router();

router.post('/', verifyUserToken, createDonation);
router.get('/:userId', verifyUserToken, verifyOwnership, getDonationsByUserId);

export default router;
