/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { RootStackParams } from '../navigation/Navigator';
import { UserLogin } from '../interfaces/UserLogin';
import { UserType } from '../interfaces/UserTypeEnum';
import authLoginService from '../api/LoginService';
import { UserAuthResponse } from '../interfaces/UserAuthResponse';
import { useSnackbarAlert } from './useSnackbarAlert';


export const useSelectUserType = (navigation: StackNavigationProp<RootStackParams, 'UserTypeScreen'>) => {

    const { createSnackbarAlert } = useSnackbarAlert();

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

    const goToWelcomeScreen = () => {
        navigation.navigate('WelcomeScreen');
    };

    const createAccount = async (user: UserLogin) => {
        //aca recibo el usuario + el usertype armo el objeto y lo mando por service
        console.log('Usuario: ' + JSON.stringify(user));
        try {
            const authLogin = authLoginService();
            const resp = await authLogin.post<UserAuthResponse>('/create-account', {
              headers: { 'Content-Type': 'application/json; charset=UTF-8' },
              params: {
                   email: user.email,
                   userType: user.userType,
                },
            });
            const userAuthtenticated = resp.data;
            console.log('usuario autenticado: ' + JSON.stringify(userAuthtenticated));

            if (userAuthtenticated.jwt != '' && userAuthtenticated.jwt != undefined){
                //usuario que ya estaba registrado y quiere loguearse
                //definir que datos mando desde el back asi los mappeo aca a lo que necesito
                navigation.navigate('DashboardScreen');//mando el objeto usuario ya mapeado o uso Realm DB https://docs.mongodb.com/realm/sdk/react-native/ o lo guardo en cache https://www.npmjs.com/package/react-native-cache
              } else {
                //el servicio no trajo el token
                createSnackbarAlert('Sorry, something wrong happened with authentication, try again later', 'Ok', goToWelcomeScreen );
              }
        } catch (error: any) {
            createSnackbarAlert('Ups, something wrong happened with authentication', 'Try again', goToWelcomeScreen);
        }
    };


    return {
        setUserType,
        validateButtonEnable,
        createAccount,
        buttonsActivityStatus,
        setUser,
    };
};
