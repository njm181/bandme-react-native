/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { UserLogin } from '../interfaces/UserLogin';
import { RootStackParams } from '../navigation/Navigator';
import { useSnackbarAlert } from './useSnackbarAlert';


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

    const validateButtonEnable = (existUser: boolean) => {
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

    const sendPasswordToVerification = (existUser: Boolean, userEmail: string) => {
        //lo mismo aplica para logueos con redes sociales ---> FALTA aplicar en sus hooks
        if (existUser) {
          //si el usuario existe mando la password para verificar y loguear y mandar al dashboard
          console.log('Usuario para loguear');
        } else {
          //si el usuario no existe debo chequear que las dos passwords ingresadas coincidan
          console.log('Usuario para registrar');
          //chequeo de passwords
          const passwordChecked = verifyPasswords();
          if (passwordChecked){
            //luego hasheo la password y armo un objeto usuario que tenga el email y la pass hasheada, hace falta hashear?
             const user: UserLogin = {
              email: userEmail,
              password: passwordState,
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
