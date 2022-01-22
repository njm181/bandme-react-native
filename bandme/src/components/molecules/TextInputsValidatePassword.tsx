/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { TextInputPassword } from '../atoms/TextInputPassword';

interface Props {
    existUser: Boolean;
    validateLenght: (password: string) => void;
    isValidState: boolean;
    isValidPasswordRepeatState: boolean;
    validateLenghtRepeat: (passwordRepeat: string) => void;
}

export const TextInputsValidatePassword = ({existUser, validateLenght, isValidState, isValidPasswordRepeatState, validateLenghtRepeat}: Props) => {
    return (
        !existUser ?
            <View>
                <TextInputPassword
                    placeHolderText="Create your password"
                    validateLenght={validateLenght}
                    />
                    {
                        !isValidState ?
                            <Text
                                style={{
                                    color: 'red',
                                    marginTop: 8,
                                    marginStart: 2,
                                }}
                            >
                            Min lenght 4 characters
                            </Text>
                                : null
                    }
                <TextInputPassword
                    placeHolderText="Repeat your password"
                    validateLenght={validateLenghtRepeat}
                />
                {
                    !isValidPasswordRepeatState ?
                        <Text
                            style={{
                                color: 'red',
                                marginTop: 8,
                                marginStart: 2,
                            }}
                        >
                        Min lenght 4 characters
                        </Text>
                        : null
                    }
            </View>
        :
            <View>
                <TextInputPassword
                placeHolderText="Enter your password"
                validateLenght={validateLenght}
                />
                {
                    !isValidState ?
                        <Text
                            style={{
                                color: 'red',
                                marginTop: 8,
                                marginStart: 2,
                            }}
                        >
                        Min lenght 4 characters
                        </Text>
                        : null
                }
            </View>
    );
};
