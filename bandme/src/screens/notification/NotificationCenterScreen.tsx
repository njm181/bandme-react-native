import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ButtonBack } from '../../components/molecules/ButtonBack';
import { RootStackParams } from '../../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'NotificationCenterScreen'> {}

export const NotificationCenterScreen = ({navigation}: Props) => {

  return (

    <View>
      {/* <ButtonBack
        goToBack= { navigation.goBack }
      />
 */}
      <Text>Notifications's center
          para mostrar publicaciones pagadas
            de eventos artistas, bandas, que buscan 
            integrantes o de artistas que buscan bandas
            o buscan comprar instrumentos o publicitar
          sus canciones etc
      </Text>
    </View>

  );
};
