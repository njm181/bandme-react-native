/* eslint-disable prettier/prettier */

import { UserType } from './UserTypeEnum';

/* eslint-disable no-trailing-spaces */
export interface UserLogin {
    email: string;
    password?: string | null;
    userType?: UserType | null;
};
