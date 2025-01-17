import { Router } from 'express';
import { usersRouter } from './users';
import { authRouter } from './auth';

export const v1Router = Router();

v1Router.use('/users', usersRouter);
v1Router.use('/auth', authRouter);
