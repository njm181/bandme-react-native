/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Share, StyleSheet, View } from 'react-native';
import { useCreateCalendarEvent } from '../../hooks/useCreateCalendarEvent';
import { useSharePublication } from '../../hooks/useSharePublication';
import { PublicationDetail } from '../../interfaces/PublicationDetail';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { ButtonCircleLikeShare } from '../molecules/ButtonCircleLikeShare';

interface Props {
    publicationUrl: string;
    publicationDetail: PublicationDetail;
}

export const DetailsButtons = ({ publicationUrl, publicationDetail }: Props) => {

    const { sharePublication } = useSharePublication();
    const { createEvent } = useCreateCalendarEvent();

  return (
    <View style = { styles.mainContainer }>

        <View style = { styles.roundedButton }>
            <ButtonPrimary
                title = "Remember"
                fontSize = {15}
                height={40}
                clickAction={() => {
                    console.log('agendar evento en calendario');
                    createEvent(
                        'Titulo del evento',
                        'Este es un evento de prueba para verificar que se puede editar un evento sin problemas con una descripcion bastante larga y los elementos continuan funcionando correctamente sin problema alguno y ya no se que mas escribir en esta descripcion',
                        '13 Jun 2022',
                        '22:30',
                        'Avenida San Martin',
                        '5508'
                        );//publicationDetail
                }
            }
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

