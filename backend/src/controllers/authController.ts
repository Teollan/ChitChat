import { authService } from '@/services/authService';
import { usersService } from '@/services/usersService';
import { ACCESS_TOKEN } from '@/utils/constants/cookieConstants';
import {
    CONFLICT,
    CREATED,
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    OK,
    UNAUTHORIZED,
} from '@/utils/constants/statusConstants';
import { DAY } from '@/utils/constants/timeConstants';
import { NotFoundError, UnauthorizedError } from '@/utils/types/errorTypes';
import { UserSeed } from '@/utils/types/userTypes';
import { Request, Response } from 'express';

async function signup(req: Request, res: Response) {
    const userSeed = req.body as UserSeed;

    try {
        const isEmailTaken = await usersService.checkIfEmailIsTaken(userSeed.email);

        if (!isEmailTaken) {
            const user = await usersService.createUser(userSeed);

            res.status(CREATED).json(user);
        } else {
            res.status(CONFLICT).json({
                details: 'Email already registered',
            });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(INTERNAL_SERVER_ERROR).json({ details: (error as Error).message });
        }
    }
}

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
            console.error(error);
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
    signup,
};
