/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { PublicationDetail } from '../interfaces/PublicationDetail';
import { RootStackParams } from '../navigation/Navigator';

export const useEditPublication = (navigation: StackNavigationProp<RootStackParams, 'ProfileScreen'>) => { //recibe un id de posteo para ir a buscarlo al servicio y traer los datos


    /* const [detallesPublicacion, setdetallesPublicacion] = useState<PublicationDetail>({
            id: '123456',
            title: 'Titulo del evento',
            street: 'Avenida San Martin',
            streetNumber: '5790',
            postalCode: '1441',
            description: 'Este es un evento de prueba para verificar que se puede editar un evento sin problemas con una descripcion bastante larga y los elementos continuan funcionando correctamente sin problema alguno y ya no se que mas escribir en esta descripcion',
            eventDate: '13 May 2022',
            eventTime: '22:30',
            eventType: 'advertising',
    }) */

    const getPublicationDetails = (idPublication: string) => {
        console.log('id del posteo: ' + idPublication);
        const publicationDetail: PublicationDetail = {
            id: '123456',
            title: 'Titulo del evento',
            street: 'Avenida San Martin',
            streetNumber: '5790',
            postalCode: '1441',
            description: 'Este es un evento de prueba para verificar que se puede editar un evento sin problemas con una descripcion bastante larga y los elementos continuan funcionando correctamente sin problema alguno y ya no se que mas escribir en esta descripcion',
            eventDate: '13 May 2022',
            eventTime: '22:30',
            eventType: 'advertising', //'   search
        };
        goToEditPublication(publicationDetail);
    };

    const goToEditPublication = (detallesPublicacion: PublicationDetail) => {
        navigation.navigate('CreateEditPublicationScreen', detallesPublicacion);
    };





  return {
        getPublicationDetails,
    };
};
