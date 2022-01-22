/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    placeHolderText: string;
    validateLenght: (password: string) => void;
}

export const TextInputPassword = ( { placeHolderText, validateLenght }: Props) => {

    const [iconVisibilityState, setIconVisibilityState] = useState(true);

    return (
        <View>
                <View
                    style={ styles.containerPassword }
                >
                    <TextInput
                        style = { styles.inputPassword }
                        autoCapitalize="none"
                        secureTextEntry= {iconVisibilityState}
                        placeholder= {placeHolderText}
                        textContentType={'newPassword'}
                        multiline={false}
                        placeholderTextColor={'#9e9e9e'}
                        onChangeText={(password) => validateLenght(password)}
                        maxLength={8}
                    />
                    <Icon
                        name={ iconVisibilityState ? 'eye-outline' : 'eye-off-outline'}
                        size={20}
                        color={'black'}
                        onPress={() => setIconVisibilityState(!iconVisibilityState)} />
                </View>
            </View>
    );
};


const styles = StyleSheet.create({
    containerPassword: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 16,
    },
    inputPassword: {
        flex: 1,
    },
  });
