/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import Snackbar from 'react-native-snackbar';
import authLoginService from '../api/LoginService';
import { UserLogin } from '../interfaces/UserLogin';
import {RootStackParams} from '../navigation/Navigator';
import { useSnackbarAlert } from './useSnackbarAlert';
import { UserAuthResponse } from '../interfaces/UserAuthResponse';

export const useFacebookSignIn = (navigation : StackNavigationProp<RootStackParams, 'WelcomeScreen'>) => {

  const { createSnackbarAlert } = useSnackbarAlert();

  const handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
          //si el usuario cancela el login se podria mostrar un snackbar de android y el equivalnte en ios
        } else {
          console.log('Login success with permissions: ' + result.grantedPermissions?.toString());
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data?.accessToken.toString();
            console.log('token facebook: ' + accessToken);
            //aca obtengo el access token que envio al backend, el backend obtiene los datos del usuario, si existe el mail en la DB es un login y el back me manda los datos del logueo
            // si no existe entonces es un registro y el back me manda la respuesta para saber que es un registro y pasar a seleccionar el tipo de usuario, luego con los datos que me 
            //mando el back email y nombres mas el tipo de usuario se lo vuelvo a enviar ya para que genere la cuenta
            facebookSignIn(accessToken);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
        createSnackbarAlert('Ups, something wrong happened', 'Try again', () => null);
      }
    );
  };

    const facebookSignIn = async (idToken?: string) => {
      const user: UserLogin = {
        email: 'nicofacebook@mail.com',//userAuthtenticated.email!,
      };
      navigation.navigate('UserTypeScreen', user);
        /* try {
          const authLogin = authLoginService();
          const resp = await authLogin.post<UserAuthResponse>('/facebook', {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            params: {
                id_token: idToken,
            },
          });
          const userAuthtenticated = resp.data;
          console.log('usuario autenticado de facebook: ' + JSON.stringify(userAuthtenticated));
          //es un usuario registrado o es la primera vez? (es login o registro lo que voy a hacer)
          if (userAuthtenticated.jwt != '' && userAuthtenticated.jwt != undefined){
            //usuario que ya estaba registrado y quiere loguearse
            //definir que datos mando desde el back asi los mappeo aca a lo que necesito
            navigation.navigate('DashboardScreen');//mando el objeto usuario ya mapeado o uso Realm DB https://docs.mongodb.com/realm/sdk/react-native/ o lo guardo en cache https://www.npmjs.com/package/react-native-cache
          } else {
          //como es un registro por red social el back ya obtuvo los datos del usuario y me mando el email ahora lo envio directo a que me diga que tipo de usuario es asi se lo envio al back junto con el email para identificar en mongo
           const user: UserLogin = {
            email: userAuthtenticated.email!,
          };
          navigation.navigate('UserTypeScreen', user);
          }
        } catch (error: any){
          console.log('el error de la promesa: ' + error);
          createSnackbarAlert('Ups, something wrong happened with Facebook', 'Try again', () => null);
        } */
      };

    return {
      handleFacebookLogin,
        facebookSignIn,
    };
};
