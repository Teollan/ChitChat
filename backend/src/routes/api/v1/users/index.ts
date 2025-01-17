import { Router } from 'express';
import { usersController } from '@/controllers/usersController';
import { validateBody } from '@/middleware/validate';
import { userPatchSchema, userSeedSchema } from '@/utils/schemas/userSchemas';

export const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);

usersRouter.get('/:userId', usersController.getUserById);

usersRouter.post('/', validateBody(userSeedSchema), usersController.createUser);

usersRouter.patch('/:userId', validateBody(userPatchSchema), usersController.updateUser);

usersRouter.delete('/:userId', usersController.deleteUser);
