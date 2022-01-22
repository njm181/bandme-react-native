/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StackNavigationProp } from '@react-navigation/stack';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import authLoginService from '../api/LoginService';
import {RootStackParams} from '../navigation/Navigator';

export const useFacebookSignIn = (navigation : StackNavigationProp<RootStackParams, 'WelcomeScreen'>) => {


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
            //facebookSignIn(accessToken);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
        //si falla el login se podria mostrar un snackbar de android y el equivalnte en ios
      }
    );
  };

    const facebookSignIn = async (idToken?: string) => {
        try {
          const authLogin = authLoginService();
          const resp = await authLogin.get('/auth/facebook', {
            params: {
                id_token: idToken,
            },
          });
          const userAuthtenticated = resp.data;
          console.log('usuario autenticado de facebook: ' + JSON.stringify(userAuthtenticated));
          //aca setearia el state ya con los datos del usuario, en un context/store global (redux)
          //por ultimo realizo la navegacion
          //es un usuario registrado o es la primera vez? (es login o registro lo que voy a hacer)
          /* navigation.navigate('DashboardScreen');
          navigation.navigate('UserTypeScreen'); */
        } catch (error: any){
          console.log('el error de la promesa: ' + error);
          //devolver error y mostrar snackbar
        }
      };

    return {
      handleFacebookLogin,
        facebookSignIn,
    };
};
