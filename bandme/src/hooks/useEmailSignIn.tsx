/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigator';

export const useEmailSignIn = (navigation : StackNavigationProp<RootStackParams, 'WelcomeScreen'>) => {

    const handleEmailLogin = () => {
        console.log('Login de email');
        navigation.navigate('RegistrationFormEmailScreen');
    };

    return {
        handleEmailLogin,
    };
};