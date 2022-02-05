/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { RootStackParams } from '../navigation/Navigator';
import { UserLogin } from '../interfaces/UserLogin';
import { UserType } from '../interfaces/UserTypeEnum';
import authLoginService from '../api/LoginService';
import { useSnackbarAlert } from './useSnackbarAlert';
import { UserAuth } from '../interfaces/UserAuth';


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

    const setUser = (user: UserAuth) => {
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

    const createAccount = async (user: UserAuth) => {
        //aca recibo el usuario + el usertype armo el objeto y lo mando por service
        console.log('Usuario para crear cuenta: ' + JSON.stringify(user));
        try {
            let resp = null;
            const authLogin = authLoginService();
            if (user.firstName != null && user.firstName != undefined){
                resp = await authLogin.post('/create/account', {
                    headers: { 'Content-Type': 'application/json' },
                    email: user.email,
                    password: user.password,
                    userType: user.userType,
                    provider: user.provider,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    profilePhoto: user.profilePhoto,
                });
            } else {
                resp = await authLogin.post('/create/account', {
                    headers: { 'Content-Type': 'application/json' },
                    email: user.email,
                    password: user.password,
                    userType: user.userType,
                    provider: user.provider,
                });
            }
            const userAuthenticated = resp.data;
            console.log('usuario autenticado: ' + JSON.stringify(userAuthenticated));

            if (userAuthenticated.accountCreated) {
                //cuenta creada y acceso a dashboard
                console.log('Cuenta creada: ' + JSON.stringify(userAuthenticated.payload.user_data));
                console.log('Cuenta creada JWT: ' + userAuthenticated.payload.jwt);
                navigation.navigate('DashboardScreen', userAuthenticated.payload.jwt);
                //mando el objeto usuario ya mapeado o uso Realm DB https://docs.mongodb.com/realm/sdk/react-native/ o lo guardo en cache https://www.npmjs.com/package/react-native-cache
            } else {
                console.log('Servicio responde success pero no se pudo crear la cuenta');
                createSnackbarAlert('Sorry, something wrong happened to create the account, try again later', 'Ok', goToWelcomeScreen );
            }
        } catch (error: any) {
            console.log('Error con el servicio de creat cuenta: ' + error);
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
