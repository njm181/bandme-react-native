/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    imageSource: string | null;
    isProfileImage: boolean;
    iconSize?: number;
    onPressAction?: () => void;
}

export const ButtonIconProfile = ({ imageSource, isProfileImage, iconSize = 45, onPressAction}: Props) => {

    const localImageSource = require('../../assets/ic_guitar_player_128.png');

    function validateProfileImage(imageSource: string | null): Boolean {
        return imageSource == null ? false : true;
    }

  return (
        <TouchableOpacity
            onPress={ onPressAction }//llamo al hook para ejecutar la navegacion
            style={ styles.button }
            activeOpacity={0.5}
        >
            {
                !isProfileImage ?
                    <Icon
                        style={styles.icon}
                        name={ imageSource }
                        size={iconSize}
                        color= "#000000"
                /> :
                <Image
                    style={styles.image}
                    source={ validateProfileImage(imageSource) ? {uri: imageSource} : localImageSource}
                />
            }
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        width: 45,
        height: 45,
        marginVertical: 4,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 1,
    },
    icon: {
        borderRadius: 25,
    },
});


