/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { ButtonIconProfile } from '../atoms/ButtonIconProfile';

export const Header = () => {
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
                />

                <ButtonIconProfile
                    isProfileImage={false}
                    imageSource={'notifications-outline'}
                    iconSize={30}
                />
            </View>
        </View>
  );
};
