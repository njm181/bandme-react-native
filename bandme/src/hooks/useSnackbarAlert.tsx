/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import Snackbar from 'react-native-snackbar';

export const useSnackbarAlert = () => {

    const createSnackbarAlert = (message: string, buttonText: string, clickAction: () => void ) => {
        Snackbar.show({
            text: message,//'Ups, something wrong happened',
            duration: Snackbar.LENGTH_LONG,
            action: {
              text: buttonText,//'Try again',
              textColor: '#ff8f00',
              onPress: () => { clickAction(); },
            },
          });
    };

  return {
    createSnackbarAlert,
  };
};
