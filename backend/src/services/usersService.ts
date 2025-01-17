import { User } from '@entities/user';
import { db } from '@config/database';
import { userToUserData } from '@helpers/map/userMap';
import { UserPatch, UserSeed } from '@/utils/types/userTypes';

async function getUsers() {
    const users = await db.getRepository(User).find();

    return users.map(userToUserData);
}

async function getUserById(userId: number) {
    const user = await db.getRepository(User).findOneBy({
        id: userId,
    });

    if (!user) {
        throw new Error('User not found');
    }

    return userToUserData(user);
}

async function createUser(seed: UserSeed) {
    const user = await db.getRepository(User).create(seed);
    const results = await db.getRepository(User).save(user);

    return userToUserData(results);
}

async function updateUser(userId: number, patch: UserPatch) {
    const user = await db.getRepository(User).findOneBy({
        id: userId,
    });

    if (!user) {
        throw new Error('User not found');
    }

    const updatedUser = db.getRepository(User).merge(user, patch);

    const results = await db.getRepository(User).save(updatedUser);

    return userToUserData(results);
}

async function deleteUser(userId: number) {
    const results = await db.getRepository(User).delete(userId);

    return results;
}

export const usersService = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
