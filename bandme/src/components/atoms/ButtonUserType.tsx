/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { stylesUserType } from '../../styles/UserTypeStyles';

interface Props {
    title: string;
    iconName: string;
    clickAction: (userType: string) => void;
    buttonActivityStatus: boolean;
}

export const BottonUserType = ({ title, iconName, clickAction, buttonActivityStatus }: Props) => {

    let buttonProps = {
        style: buttonActivityStatus ? stylesUserType.buttonCardSelected : stylesUserType.buttonCard,
    };

    return (
        <View>
            <TouchableOpacity
                {...buttonProps}
                activeOpacity={0.5}
                onPress={ () => {
                    clickAction(title);
                }}
            >
                <Icon
                    name= { iconName }
                    size={25}
                    color= "#ffffff"
                />
                <Text style={{fontSize: 16, color: '#ffffff'}}>{ title }</Text>
            </TouchableOpacity>
        </View>
    );
};
