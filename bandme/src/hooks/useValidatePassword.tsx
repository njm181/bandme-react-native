/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { RootStackParams } from '../navigation/Navigator';
import { useSnackbarAlert } from './useSnackbarAlert';
import authLoginService from '../api/LoginService';
import { UserAuth } from '../interfaces/UserAuth';

export const useValidatePassword = (navigation : StackNavigationProp<RootStackParams, 'RegistrationFormPasswordScreen'>) => {

    const [isValidState, setIsValidState] = useState(true);
    const [passwordState, setPasswordState] = useState<string>('');
    const [passwordRepeatState, setPasswordRepeatState] = useState<string>('');
    const [isValidPasswordRepeatState, setIsValidPasswordRepeatState] = useState(true);
    const { createSnackbarAlert } = useSnackbarAlert();


    const validateLengthPassword = (password: string) => {
            if (password.length == 0 ){
                setPasswordState('');
                setIsValidState(true);
            } else if (password.length < 4 ){
                setPasswordState('');
                setIsValidState(false);
            } else {
                setIsValidState(true);
                setPasswordState(password);
            }
    };

    const validateLengthPasswordRepeat = (passwordRepeat: string) => {
      if (passwordRepeat.length == 0 ){
        setPasswordRepeatState('');
          setIsValidPasswordRepeatState(true);
      } else if (passwordRepeat.length < 4 ){
        setPasswordRepeatState('');
          setIsValidPasswordRepeatState(false);
      } else {
        setIsValidPasswordRepeatState(true);
        setPasswordRepeatState(passwordRepeat);
      }
};

    const validateButtonEnable = (existUser: Boolean) => {
        //true boton apagado, false boton prendido
        if (existUser){
          console.log('existe user');
          if (passwordState.length < 4){
            return true;
          } else {
            return false;
          }
        } else {
          console.log('no existe user');
          if (passwordState.length >= 4 && passwordRepeatState.length >= 4){
            console.log('no existe user/return true');
            return false;
          } else {
            console.log('no existe user');
            return true;
          }
        }
    };

    const goToWelcomeScreen = () => {
      navigation.navigate('WelcomeScreen');
    };

    const sendPasswordToVerification = async (existUser: Boolean, userEmail: string) => {
        //lo mismo aplica para logueos con redes sociales ---> FALTA aplicar en sus hooks
        if (existUser) {
          //si el usuario existe mando la password para verificar y loguear y mandar al dashboard
          console.log('Usuario para loguear');
          //llamo al servicio y le pego a /validate/login enviando el email y la password obtenida de passwordState para loguear y mandar a dashboard
          try {
            const authLogin = authLoginService();
            const resp = await authLogin.post('/validate/login', {
              headers: { 'Content-Type': 'application/json '},
              email: userEmail,
              password: passwordState,
            });

            const userAuthenticated = resp.data;
            const isAuthenticated = userAuthenticated.isAuthenticated;
            console.log('user is authenticated?: ' + isAuthenticated);

            if (isAuthenticated) {
             console.log('user data: ' +  userAuthenticated.user_data.jwt);
             navigation.navigate('DashboardScreen', userAuthenticated.user_data.jwt);
            } else {
              console.log('password incorrecta: ' + JSON.stringify(userAuthenticated));
              createSnackbarAlert(userAuthenticated.message, 'Try again', goToWelcomeScreen);
            }
          } catch (error) {
            console.log('el error de la promesa: ' + error);
            createSnackbarAlert('Ups, something wrong happened with authentication', 'Try again', goToWelcomeScreen);
          }
        } else {
          //si el usuario no existe debo chequear que las dos passwords ingresadas coincidan
          console.log('Usuario para registrar');
          //chequeo de passwords
          const passwordChecked = verifyPasswords();
          if (passwordChecked){
            //luego hasheo la password y armo un objeto usuario que tenga el email y la pass hasheada, hace falta hashear?
             const user: UserAuth = {
              email: userEmail,
              password: passwordState,
              provider: 'EMAIL',
            };
            console.log('Passwords coinciden: ' + JSON.stringify(user));
            navigation.navigate('UserTypeScreen', user);
          } else {
            console.log('Passwords no coinciden');
            createSnackbarAlert('Ups, passwords do not match', 'Try again', () => null);
          }
          //luego paso al formulario para que me diga que tipo de usuario es, entonces ya tendria los tres datos para crear una cuenta en backend,
        }
      };

      const verifyPasswords = () => {
        if (passwordState === passwordRepeatState) {
          return true;
        } else {
          return false;
        }
      };

    return {
        isValidState,
        validateLengthPassword,
        validateLengthPasswordRepeat,
        passwordState,
        validateButtonEnable,
        sendPasswordToVerification,
        passwordRepeatState,
        isValidPasswordRepeatState,
    };
};
