/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParams } from '../../navigation/Navigator';
import { TextInputsValidatePassword } from '../../components/molecules/TextInputsValidatePassword';
import { useValidatePassword } from '../../hooks/useValidatePassword';
import { stylesWelcome } from '../../styles/WelcomeStyles';

interface Props extends StackScreenProps<RootStackParams, 'RegistrationFormPasswordScreen'>{};

export const RegistrationFormPasswordScreen = ({ route, navigation }: Props) => {

    //aca traemos desde el input email si el usuario existe o no para saber si ingresa una o dos veces la password
    const existUser = false;//route.params;
    const userEmail = route.params.email;
    console.log(`El usuario existe? ${existUser} HARDCODEADO`);
    console.log(`Email del usuario ${userEmail}`);

    const { 
            isValidState,
            validateLengthPassword,
            validateLengthPasswordRepeat,
            validateButtonEnable,
            sendPasswordToVerification,
            isValidPasswordRepeatState } = useValidatePassword(navigation);

    //si existe el usuario quiere decir que solo ingreso la password y me manda al dashboard
    //si no existe el usuario, debo ingresar dos veces la password en una en cada input, 
    //debo validar esos inputs y si estan correctos debo hashear y comparar o comparar directamente y ver que coincidan
    //si coinciden se debe habilitar el boton de login, y mandar al formulario de tipo de usuario enviando por params el email y la password
    // para agregar el tipo de user y asi poder registrar

    return (
        <SafeAreaView style={{ padding: 16, flex: 1 }}>
            {/* deberia tener dos estados separados uno para el primer input y otro para el segundo y paso el estado que corresponda por parametro */}
            <TextInputsValidatePassword
                existUser={existUser}
                validateLenght={validateLengthPassword}
                validateLenghtRepeat={validateLengthPasswordRepeat}
                isValidState={isValidState}
                isValidPasswordRepeatState={isValidPasswordRepeatState}
            />

            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                }}
            >
                <View style={[
                    stylesWelcome.buttonLoginContainer, 
                    {flex: 1, justifyContent: 'flex-end'},
                    ]}>
                    <TouchableOpacity
                        disabled={ validateButtonEnable(existUser) }
                        style={[
                            stylesWelcome.buttonLogin,
                            {backgroundColor: validateButtonEnable(existUser) ? 'gray' : '#ff8f00'},
                        ]}
                        onPress={() => sendPasswordToVerification(existUser, userEmail) }
                        activeOpacity={0.5}
                    >
                    {
                        existUser ?
                            <Text style={[
                                stylesWelcome.titleButton,
                                {
                                flex: 1,
                                textAlign: 'center',
                                marginLeft: 0,
                                },
                            ]}>Login</Text>
                            :
                            <Text style={[
                                stylesWelcome.titleButton,
                                {
                                flex: 1,
                                textAlign: 'center',
                                marginLeft: 0,
                                },
                            ]}>Sign in</Text>
                    }
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

