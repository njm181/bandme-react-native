/* eslint-disable no-fallthrough */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { stylesUserType } from '../../styles/UserTypeStyles';
import { BottonUserType } from '../atoms/ButtonUserType';

interface Props {
    setUserType: (userType: string) => void;
    buttonActivityStatus: { buttonArtist: boolean; buttonBand: boolean; buttonPlace: boolean; };
}

export const ButtonsUserType = ({ setUserType, buttonActivityStatus} : Props) => {

  return (
      <View>
          <View style={ stylesUserType.buttonVerticalContainer }>
                    <BottonUserType
                        title="Artist"
                        iconName="person"
                        clickAction={ setUserType }
                        buttonActivityStatus= { buttonActivityStatus.buttonArtist }
                    />
                </View>

                <View style={ stylesUserType.buttonHorizontalContainer }>
                    <BottonUserType
                        title="Band"
                        iconName="people"
                        clickAction={ setUserType }
                        buttonActivityStatus= { buttonActivityStatus.buttonBand }
                    />
                    <BottonUserType
                        title="Place"
                        iconName="location"
                        clickAction={ setUserType }
                        buttonActivityStatus= { buttonActivityStatus.buttonPlace }
                    />
                </View>
      </View>
  );
};
