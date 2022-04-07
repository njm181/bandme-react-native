/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ValidateEmail } from '../../interfaces/UserValidateEmail';

interface Props {
    emailState: ValidateEmail;
    validateEmail: (text: string) => false | undefined;
}

export const TextInputEmail = ({emailState, validateEmail}: Props) => {
    return (
        <View>
            <TextInput
            style = {[
                {borderColor: emailState.validated ? 'black' : 'red'},
                stylesEmail.inputEmail,
            ]}
            autoCapitalize="none"
            placeholder="example@example.com"
            placeholderTextColor={'#9e9e9e'}
            multiline={false}
            textContentType={'emailAddress'}
            onChangeText={(email) => validateEmail(email)}
            value={ emailState.email }
        />
        {
            emailState.validated ?
                <Text
                    style={{
                        color: 'red',
                        marginTop: 8,
                        marginStart: 2,
                    }}
                >
                Invalid format email
                </Text>
                    : null
        }
        </View>
    );
};

const stylesEmail = StyleSheet.create({
    inputEmail: {
        marginTop: 16,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
  });