/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { ButtonCircleLikeShare } from '../molecules/ButtonCircleLikeShare';

export const DetailsButtons = () => {
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
                            onPressAction={ () => console.log('click para compartir evento') }
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
