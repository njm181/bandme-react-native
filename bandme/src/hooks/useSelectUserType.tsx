/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { RootStackParams } from '../navigation/Navigator';
import { UserLogin } from '../interfaces/UserLogin';
import { UserType } from '../interfaces/UserTypeEnum';



export const useSelectUserType = (navigation: StackNavigationProp<RootStackParams, 'UserTypeScreen'>) => {

    const [buttonsActivityStatus, setButtonsActivityStatus] = useState({
        buttonArtist: false,
        buttonBand: false,
        buttonPlace: false,
        buttonLogin: false,
      });


    const setEnableButton = (userType: string) => {
        console.log('que user type es? : ' + userType);
        switch (userType) {
            case 'Artist': {
                setButtonsActivityStatus({
                    buttonArtist: true,
                    buttonBand: false,
                    buttonPlace: false,
                    buttonLogin: true,
                });
                break;
            }
            case 'Band': {
                setButtonsActivityStatus({
                    buttonArtist: false,
                    buttonBand: true,
                    buttonPlace: false,
                    buttonLogin: true,
                });
                break;
            }
            case 'Place': {
                setButtonsActivityStatus({
                    buttonArtist: false,
                    buttonBand: false,
                    buttonPlace: true,
                    buttonLogin: true,
                });
                break;
            }
            default: {
                setButtonsActivityStatus({
                    buttonArtist: false,
                    buttonBand: false,
                    buttonPlace: false,
                    buttonLogin: false,
                });
                break;
            }
        }
    };

    const setUserType = (userType: string) => {
        setEnableButton(userType);
    };

    const setUser = (user: UserLogin) => {
        let userType = UserType.UNDEFINED;

        if (buttonsActivityStatus.buttonArtist) {
            userType = UserType.ARTIST;
        } else if (buttonsActivityStatus.buttonBand) {
            userType = UserType.BAND;
        } else if (buttonsActivityStatus.buttonPlace) {
            userType = UserType.PLACE;
        }
        user.userType = userType;
        createAccount(user);
    };

    const validateButtonEnable = () => {
        if (!buttonsActivityStatus.buttonLogin){
            return true; //disabled
        } else {
            return false; //enable
        }
    };

    const createAccount = (user: UserLogin) => {
        //aca recibo el usuario + el usertype armo el objeto y lo mando por service
        console.log('Usuario: ' + JSON.stringify(user));
        //navigation.navigate('dashboard', userType);
    };

    return {
        setUserType,
        validateButtonEnable,
        createAccount,
        buttonsActivityStatus,
        setUser,
    };
};
