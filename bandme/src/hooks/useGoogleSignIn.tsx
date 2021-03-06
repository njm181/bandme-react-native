/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import authLoginService from '../api/LoginService';
import {RootStackParams} from '../navigation/Navigator';
import {UserAuthResponse} from '../interfaces/UserAuthResponse';
import {UserAuthRequest} from '../interfaces/UserAuthRequest';
import { UserLogin } from '../interfaces/UserLogin';
import { useSnackbarAlert } from './useSnackbarAlert';


export const useGoogleSignIn = (navigation: StackNavigationProp<RootStackParams, 'WelcomeScreen'>) => {

  const [googleUser, setGoogleUser] = useState<UserAuthResponse>({}); //podria ponerle tipado a este useState <User>
  const { createSnackbarAlert } = useSnackbarAlert();

  useEffect(() => {
    configureGoogleSignIn();
    //isSignIn()
  }, []);

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '892431398539-915ov40vchovc1q11n936o93q8khj4ht.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '892431398539-s468l7jeomr9bljhiltu487cbs2kg0sk.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Login de google');
      console.log(userInfo);
      //aca mando el id token y el email
      const userAuthRequest: UserAuthRequest = {
        idToken: userInfo.idToken,
        //email: userInfo.user.email,
      };
      authenticateUser(userAuthRequest);
    } catch (error: any) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
        createSnackbarAlert('Ups, something wrong happened with Google', 'Try again', () => null);
      } else {
        console.log('Some Other Error Happened: ' + error);
        createSnackbarAlert('Ups, something wrong happened', 'Try again', () => null);
      }
    }
  };


  const authenticateUser = async (userAuthRequest: UserAuthRequest) => {
    const user: UserLogin = {
      email: 'nicogoogle@mail.com',//userAuthtenticated.email!,
    };
    navigation.navigate('UserTypeScreen', user);
   /*  try {
      const authLogin = authLoginService();
      const resp = await authLogin.post<UserAuthResponse>('/google', {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        params: { id_token: userAuthRequest.idToken, },
      });
      const userAuthtenticated = resp.data;
      console.log('usuario autenticado: ' + JSON.stringify(userAuthtenticated));
          //es un usuario registrado o es la primera vez? (es login o registro lo que voy a hacer)
          if (userAuthtenticated.jwt != '' && userAuthtenticated.jwt != undefined){
            //usuario que ya estaba registrado y quiere loguearse
            //definir que datos mando desde el back asi los mappeo aca a lo que necesito
            navigation.navigate('DashboardScreen');//mando el objeto usuario ya mapeado o uso Realm DB https://docs.mongodb.com/realm/sdk/react-native/ o lo guardo en cache https://www.npmjs.com/package/react-native-cache
          } else {
            //como es un registro por red social lo envio directo a que me diga que tipo de usuario es asi se lo envio al back junto con el email para identificar en mongo
          ??const user: UserLogin = {
            email: userAuthtenticated.email!,
          };
          navigation.navigate('UserTypeScreen', user);
          }
    } catch (error: any){
      console.log('el error de la promesa: ' + error);
      createSnackbarAlert('Ups, something wrong happened with Google', 'Try again');
    } */
  };

  return {
    configureGoogleSignIn,
    handleGoogleLogin,
    googleUser,
  };
};
