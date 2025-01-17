import { Request, Response } from 'express';
import { OK, INTERNAL_SERVER_ERROR, CREATED } from '@constants/statusConstants';
import { usersService } from '@/services/usersService';
import { UserPatch, UserSeed } from '@/utils/types/userTypes';

async function getUsers(_: Request, res: Response) {
    try {
        const users = await usersService.getUsers();

        res.status(OK).json(users);
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ details: (error as Error).message });
    }
}

async function getUserById(req: Request, res: Response) {
    try {
        const userId = parseInt(req.params.userId);
        const user = await usersService.getUserById(userId);

        res.status(OK).json(user);
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ details: (error as Error).message });
    }
}

async function createUser(req: Request, res: Response) {
    try {
        const userSeed = req.body as UserSeed;
        const user = await usersService.createUser(userSeed);

        res.status(CREATED).json(user);
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ details: (error as Error).message });
    }
}

async function updateUser(req: Request, res: Response) {
    try {
        const userId = parseInt(req.params.userId);
        const userPatch = req.body as UserPatch;
        const user = await usersService.updateUser(userId, userPatch);

        res.status(CREATED).json(user);
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ details: (error as Error).message });
    }
}

async function deleteUser(req: Request, res: Response) {
    try {
        const userId = parseInt(req.params.userId);
        const user = await usersService.deleteUser(userId);

        res.status(OK).json(user);
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ details: (error as Error).message });
    }
}

export const usersController = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
