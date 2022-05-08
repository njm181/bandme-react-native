/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Share, StyleSheet, View } from 'react-native';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { ButtonCircleLikeShare } from '../molecules/ButtonCircleLikeShare';

interface Props {
    publicationUrl: string;
}

export const DetailsButtons = ({ publicationUrl }: Props) => {

    const onShare = async (url: string) => {
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

  return (
    <View style = { styles.mainContainer }>

        <View style = { styles.roundedButton }>
            <ButtonPrimary
                title = "Enrroll"
                fontSize = {15}
                height={40}
                clickAction={() => console.log('agendar evento en calendario')}
            />
        </View>

        <View style = { styles.roundedButtonsContainer }>

            <View style = { styles.roundedButton }>
                    <ButtonCircleLikeShare
                            isLike={false}
                            isShare={true}
                            onPressAction={ () => {
                                console.log('click para compartir evento');
                                onShare('');
                            }
                         }
                        />
                </View>

            <View style = { styles.roundedButton }>
                <ButtonCircleLikeShare
                    isLike={false}
                    isShare={false}
                    onPressAction={ () => console.log('click para dar like') }
                />
            </View>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    roundedButtonsContainer: {
        flexDirection: 'row',
    },
    roundedButton: {
        marginHorizontal: 0,
    },
});

