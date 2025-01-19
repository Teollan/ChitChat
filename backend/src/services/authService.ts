import { db } from '@/config/database';
import { User } from '@/entities/user';
import bcrypt from 'bcrypt';
import { userToUserData } from '@/utils/helpers/map/userMap';
import { NotFoundError, UnauthorizedError } from '@/utils/types/errorTypes';
import jwt from 'jsonwebtoken';

async function authenticateUser(email: string, password: string) {
    const users = await db.getRepository(User).find({
        where: {
            email,
        },
    });

    if (users.length === 0) {
        throw new NotFoundError('User not found');
    }

    const user = users[0];

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new UnauthorizedError("Email and password don't match");
    }

    return userToUserData(user);
}

function generateAccessToken(userId: number) {
    const access = jwt.sign({ userId }, process.env.JWT_ACCESS_KEY!, {
        expiresIn: '1d',
    });

    return access;
}

export const authService = {
    authenticateUser,
    generateAccessToken,
};
