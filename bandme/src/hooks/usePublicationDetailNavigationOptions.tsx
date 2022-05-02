/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { RootStackParams } from '../navigation/Navigator';

export const usePublicationDetailNavigationOptions = (navigation: StackNavigationProp<RootStackParams, 'PublicationDetailScreen'>) => {

    const goToProfile = () => {// debe recibir algun dato para obtener la data del usuario para enviar a profile o al menos el id de usuario asi en Profile se busca la data
        navigation.navigate('ProfileScreen');
    };

    const goToBack = () => {
        navigation.goBack();
    };

    const onPublicationDetailNavigationOptions = {
        goToProfile,
        goToBack,
    };

  return {
    onPublicationDetailNavigationOptions,
  };
};
