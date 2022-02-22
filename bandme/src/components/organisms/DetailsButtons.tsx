/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { ButtonCircleLikeShare } from '../molecules/ButtonCircleLikeShare';

export const DetailsButtons = () => {
  return (
    <View style = { styles.mainContainer }>

        <View style = { styles.roundedButton }>
            <ButtonPrimary/>
        </View>

        <View style = { styles.roundedButtonsContainer }>

            <View style = { styles.roundedButton }>
                    <ButtonCircleLikeShare
                            isLike={false}
                            isShare={true}
                        />
                </View>

            <View style = { styles.roundedButton }>
                <ButtonCircleLikeShare
                    isLike={false}
                    isShare={false}
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
