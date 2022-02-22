/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    imageSource: string | null;
    isProfileImage: boolean;
}

export const ButtonIconProfile = ({ imageSource, isProfileImage }: Props) => {

    const localImageSource = require('../../assets/ic_guitar_player_128.png');

    function validateProfileImage(imageSource: string | null): Boolean {
        return imageSource == null ? false : true;
    }

  return (
        <TouchableOpacity
        style={ styles.button }
            activeOpacity={0.5}
            onPress={ () => console.log('click buton icon profile!')}
        >
            {
                !isProfileImage ?
                    <Icon
                    style={styles.icon}
                    name= { imageSource }
                    size={45}
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
        marginRight: 8,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 1,
    },
    icon: {
        width: 45,
        height: 45,
        borderRadius: 25,
    },
});


