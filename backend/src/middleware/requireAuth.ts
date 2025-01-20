import { JWT_ACCESS_KEY } from '@/utils/constants/encryptionConstants';
import { INTERNAL_SERVER_ERROR, UNAUTHORIZED } from '@/utils/constants/statusConstants';
import { Request, Response, NextFunction } from 'express';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    try {
        jwt.verify(req.cookies.access, JWT_ACCESS_KEY);

        next();
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            res.status(UNAUTHORIZED).json({
                details: error.message,
            });
        } else if (error instanceof JsonWebTokenError) {
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
