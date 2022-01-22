/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ButtonEmailEnableDisabled } from '../../components/atoms/ButtonEmailEnableDisabled';
import { TextInputEmail } from '../../components/atoms/TextInputEmail';
import { useValidateEmail } from '../../hooks/useValidateEmail';
import { RootStackParams } from '../../navigation/Navigator';
import { stylesWelcome } from '../../styles/WelcomeStyles';

interface Props extends StackScreenProps<RootStackParams, 'RegistrationFormEmailScreen'>{}


export const RegistrationFormEmailScreen = ({navigation}: Props) => {

    const { emailState, validateEmail, validateButtonEnable, sendEmailToVerification } = useValidateEmail(navigation);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 16, flex: 1 }}>
                <View style={{flex: 1}}>
                    <TextInputEmail
                        emailState={emailState}
                        validateEmail={validateEmail}
                    />
                    <ButtonEmailEnableDisabled
                        emailState={emailState}
                        validateButtonEnable={validateButtonEnable}
                        sendEmailToVerification={sendEmailToVerification}
                    />
                </View>
            </View>

        </SafeAreaView>
    );

};



