import { User } from '@/entities/user';
import { DeepPartial } from 'typeorm';
import { Requires } from '@utils/types/requiresType';

export type UserData = Omit<User, 'password'>;
export type UserSeed = Omit<Requires<User, keyof User>, 'id'>;
export type UserPatch = Omit<DeepPartial<User>, 'id'>;
