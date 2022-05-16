import { UserType } from './UserTypeEnum';

/* eslint-disable prettier/prettier */
export interface UserAuth {
    emailExist?: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
    profilePhoto?: string;
    provider?: string;
    password?: string;
    userType?: UserType;
}

