/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Share, StyleSheet, View } from 'react-native';
import { useSharePublication } from '../../hooks/useSharePublication';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { ButtonCircleLikeShare } from '../molecules/ButtonCircleLikeShare';

interface Props {
    publicationUrl: string;
}

export const DetailsButtons = ({ publicationUrl }: Props) => {

    const { sharePublication } = useSharePublication();

  return (
    <View style = { styles.mainContainer }>

        <View style = { styles.roundedButton }>
            <ButtonPrimary
                title = "Remember"
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
                                sharePublication(publicationUrl);
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

