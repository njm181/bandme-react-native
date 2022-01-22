/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ValidateEmail } from '../../interfaces/UserValidateEmail';
import { stylesWelcome } from '../../styles/WelcomeStyles';

interface Props {
    emailState: ValidateEmail;
    validateButtonEnable: (validateEmail: ValidateEmail) => boolean;
    sendEmailToVerification: (email: string) => void;
}

export const ButtonEmailEnableDisabled = ({ emailState, validateButtonEnable, sendEmailToVerification }: Props) => {

    return (
        <View style={[
            stylesWelcome.buttonLoginContainer, 
            {flex: 1, justifyContent: 'flex-end'},
            ]}>
            <TouchableOpacity
                disabled={ validateButtonEnable(emailState) }
                style={[
                    stylesWelcome.buttonLogin,
                    {backgroundColor: validateButtonEnable(emailState) ? 'gray' : '#ff8f00'},
                ]}
                onPress={() => sendEmailToVerification(emailState.email)}
                activeOpacity={0.5}
            >
            <Text style={[
                stylesWelcome.titleButton,
                {
                flex: 1,
                textAlign: 'center',
                marginLeft: 0,
                },
            ]}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};
