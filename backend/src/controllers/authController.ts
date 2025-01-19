import { authService } from '@/services/authService';
import { ACCESS_TOKEN } from '@/utils/constants/cookieConstants';
import {
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    OK,
    UNAUTHORIZED,
} from '@/utils/constants/statusConstants';
import { DAY } from '@/utils/constants/timeConstants';
import { NotFoundError, UnauthorizedError } from '@/utils/types/errorTypes';
import { Request, Response } from 'express';

async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        const user = await authService.authenticateUser(email, password);
        const access = authService.generateAccessToken(user.id);

        res.cookie(ACCESS_TOKEN, access, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1 * DAY,
        });

        res.status(OK).json(user);
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(NOT_FOUND).json({
                details: error.message,
            });
        } else if (error instanceof UnauthorizedError) {
            res.status(UNAUTHORIZED).json({
                details: error.message,
            });
        } else if (error instanceof Error) {
            res.status(INTERNAL_SERVER_ERROR).json({
                details: error.message,
            });
        }
    }
}

async function logout(_: Request, res: Response) {
    res.clearCookie(ACCESS_TOKEN);

    res.status(OK).json({
        message: 'logout',
    });
}

export const authController = {
    login,
    logout,
};
