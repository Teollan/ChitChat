import { authController } from '@/controllers/authController';
import { Router } from 'express';

export const authRouter = Router();

authRouter.post('/login', authController.login);

authRouter.post('/logout', authController.logout);
