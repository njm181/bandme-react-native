/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { ButtonIconProfile } from '../atoms/ButtonIconProfile';
//recibo un onpress y la info del suer para el profile icon o 
//cuando hago onpress recupero de algun storage la data

interface Props {
    onNavigate: { goToProfile: () => void; goToCreatePost: () => void; goToNotificationCenter: () => void; }
}

export const Header = ({onNavigate}: Props) => {
  return (
        <View
            style={{
                paddingHorizontal: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 4,
                backgroundColor: '#e0e0e0',
            }}
        >
            <ButtonIconProfile
              isProfileImage={true}
              imageSource={'https://reactnative.dev/img/tiny_logo.png'} // aca recibe imagen del usuario y si no vacio
              onPressAction={ () => onNavigate.goToProfile() }
            />

            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <ButtonIconProfile
                    isProfileImage={false}
                    imageSource={'add-outline'}
                    iconSize={35}
                    onPressAction={ () =>  onNavigate.goToCreatePost()}
                />

                <ButtonIconProfile
                    isProfileImage={false}
                    imageSource={'notifications-outline'}
                    iconSize={30}
                    onPressAction={ () => onNavigate.goToNotificationCenter() }
                />
            </View>
        </View>
  );
};
