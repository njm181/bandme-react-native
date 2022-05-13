/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Share } from 'react-native';

export const useSharePublication = () => {


    const sharePublication = async (url: string) => {
        try {
            const result = await Share.share({
                //url
                message: 'www.bandme.com/posteo-123',
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
              console.log('shared with activity type of result.activityType');
            } else {
              // shared
              console.log('shared');
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
            console.log('dismissed');
          }
        } catch (error) {
          //alert(error.message);
          console.log('Error al momento de compartir la publicacion');
        }
      };


  return {
    sharePublication,
  };
};
