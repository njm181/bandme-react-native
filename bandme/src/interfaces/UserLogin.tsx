/* eslint-disable prettier/prettier */
import { UserType } from './UserTypeEnum';
/* eslint-disable no-trailing-spaces */

export interface UserLogin {
    email: string;
    provider: string;
    password?: string;
    userType: UserType;
    profilePhoto?: string;
    firstName?: string;
    lastName?: string;
    jwt: string;
}
