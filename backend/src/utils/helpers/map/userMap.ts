import { User } from '@entities/user';
import { UserData } from '@/utils/types/userTypes';

export function userToUserData({ password: _, ...userData }: User): UserData {
    return userData;
}
