/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react';
import { RootStackParams } from '../navigation/Navigator';

export const useDashboardNavigationOptions = (navigation: StackNavigationProp<RootStackParams, 'DashboardScreen'>) => {

    const goToProfile = () => {// debe recibir algun dato para obtener la data del usuario para enviar a profile o al menos el id de usuario asi en Profile se busca la data
        navigation.navigate('ProfileScreen');
    };

    const goToCreatePost = () => {
        navigation.navigate('CreateEditPublicationScreen');
    };

    const goToNotificationCenter = () => {
        navigation.navigate('NotificationCenterScreen');
    };

    const goToPublicationDetail = () => {
        navigation.navigate('PublicationDetailScreen');
    };

    const onDashboardNavigationOptions = {
        goToProfile,
        goToCreatePost,
        goToNotificationCenter,
        goToPublicationDetail,
    };

    return {
        onDashboardNavigationOptions,
  };
};
