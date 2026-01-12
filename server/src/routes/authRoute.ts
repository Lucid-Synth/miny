import express from 'express';
import { signInHandler, signUpHandler } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signUpHandler);
router.post('/signin', signInHandler);

export default router;