import { DeepPartial } from 'typeorm';

export type UserData = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

export type UserSeed = UserData & { password: string };

export type UserPatch = DeepPartial<UserSeed>;
