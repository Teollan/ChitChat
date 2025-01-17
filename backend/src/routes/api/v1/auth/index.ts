import { Router, Request, Response } from 'express';

export const authRouter = Router();

authRouter.post('/login', (_: Request, res: Response) => {
    res.status(200).json({
        message: 'login',
    });
});

authRouter.post('/logout', (_: Request, res: Response) => {
    res.status(200).json({
        message: 'logout',
    });
});
