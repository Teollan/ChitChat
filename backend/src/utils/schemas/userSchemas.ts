import { z } from 'zod';

export const userSeedSchema = z.object({
    firstName: z.string().min(3, 'must be at least 3 characters'),
    lastName: z.string().min(3, 'must be at least 3 characters'),
    email: z.string().email('must be a valid email'),
    password: z.string().min(4, 'must be at least 4 characters'),
});

export const userPatchSchema = z.object({
    firstName: z.string().min(3, 'must be at least 3 characters').optional(),
    lastName: z.string().min(3, 'must be at least 3 characters').optional(),
    email: z.string().email('must be a valid email').optional(),
});
