/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ValidateEmail } from '../interfaces/UserValidateEmail';
import { RootStackParams } from '../navigation/Navigator';


export const useValidateEmail = (navigation : StackNavigationProp<RootStackParams, 'RegistrationFormEmailScreen'>) => {

    const [emailState, setEmailState] = useState<ValidateEmail>({email: '', validated: true});

    const validateEmail = (text: string) => {

        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (text.length == 0){
          setEmailState({email: text, validated: true});
        } else if (reg.test(text) === false) {
          console.log('Email is Not Correct');
          setEmailState({ email: text, validated: false });
          return false;
        }
        else {
          setEmailState({ email: text, validated: true });
          console.log('Email is Correct');
        }
      };

      const validateButtonEnable = (validateEmail: ValidateEmail) => {
        //true boton apagado, false boton prendido
          if (validateEmail.email.length == 0){
            return true;
          } else if (validateEmail.validated){
            return false;
          } else {
            return true;
          }
      };

      const sendEmailToVerification = (email: string) => {
        console.log(`email para verificar ${email}`);
        //le pego al servicio y espero respuesta por si ese email existe o no
        //si existe devuelvo true y mando a poner la password en un unico campo
        //si no existe devuelvo false y mando a crear la password con los dos campos de password
        if (true) {
          console.log('Usuario registrado, ingrese su password');
          navigation.navigate('RegistrationFormPasswordScreen', {existUser: true, email: email});
        } else {
          console.log('Usuario no registrado, genere su password');
          navigation.navigate('RegistrationFormPasswordScreen', {existUser: false, email: email});
        }
      };

    return {
        emailState,
        validateEmail,
        validateButtonEnable,
        sendEmailToVerification,
    };
};
