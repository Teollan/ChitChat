import { authController } from '@/controllers/authController';
import { validateBody } from '@/middleware/validate';
import { userSeedSchema } from '@/utils/schemas/userSchemas';
import { Router } from 'express';

export const authRouter = Router();

authRouter.post('/signup', validateBody(userSeedSchema), authController.signup);

authRouter.post('/login', authController.login);

authRouter.post('/logout', authController.logout);
