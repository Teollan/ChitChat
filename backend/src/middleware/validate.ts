import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from '@/utils/constants/statusConstants';
import { RequestHandler } from 'express';
import { ZodError, ZodSchema } from 'zod';

export function validateBody(schema: ZodSchema): RequestHandler {
    return (req, res, next) => {
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(BAD_REQUEST).json({
                    message: 'Body validation failed',
                    details: error.errors,
                });
            } else {
                res.status(INTERNAL_SERVER_ERROR).json({
                    message: 'Internal server error',
                    details: (error as Error).message,
                });
            }
        }
    };
}

export function validateParams(schema: ZodSchema): RequestHandler {
    return (req, res, next) => {
        try {
            req.params = schema.parse(req.params);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(BAD_REQUEST).json({
                    message: 'Params validation failed',
                    details: error.errors,
                });
            } else {
                res.status(INTERNAL_SERVER_ERROR).json({
                    message: 'Internal server error',
                    reason: (error as Error).message,
                });
            }
        }
    };
}
