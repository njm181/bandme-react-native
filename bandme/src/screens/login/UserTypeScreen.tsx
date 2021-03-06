/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelectUserType } from '../../hooks/useSelectUserType';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/Navigator';
import { stylesWelcome } from '../../styles/WelcomeStyles';
import { ButtonsUserType } from '../../components/molecules/ButtonsUserType';

interface Props extends StackScreenProps<RootStackParams, 'UserTypeScreen'>{}

export const UserTypeScreen = ({navigation, route}: Props) => {

    const user = route.params;

    const { setUserType, validateButtonEnable, setUser, buttonsActivityStatus } = useSelectUserType(navigation);

    return (
        <SafeAreaView style={ stylesWelcome.container }>

            <Text style={ stylesWelcome.title }>What type of user are you?</Text>

                <ButtonsUserType
                    setUserType= { setUserType }
                    buttonActivityStatus={ buttonsActivityStatus }
                />

                <View style={[
                        stylesWelcome.buttonLoginContainer, 
                        {flex: 1, justifyContent: 'flex-end'},
                    ]}>
                    <TouchableOpacity
                        disabled={ validateButtonEnable() }
                        style={[
                            stylesWelcome.buttonLogin,
                            {backgroundColor: validateButtonEnable() ? 'gray' : '#ff8f00'},
                        ]}
                        onPress={() => setUser(user)}
                        activeOpacity={0.5}
                    >
                        <Text style={[
                            stylesWelcome.titleButton,
                            {
                            flex: 1,
                            textAlign: 'center',
                            marginLeft: 0,
                            },
                        ]}>Login</Text>
                    </TouchableOpacity>
                </View>

        </SafeAreaView>
    );
};

