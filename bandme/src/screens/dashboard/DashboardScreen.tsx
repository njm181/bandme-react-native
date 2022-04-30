/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/molecules/Header';
import { ListPost } from '../../components/organisms/ListPost';
import { useDashboardNavigationOptions } from '../../hooks/useDashboardNavigationOptions';
import { RootStackParams } from '../../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'DashboardScreen'> {}

export const DashboardScreen = ({navigation}: Props) => {

//  PROHIBIR HACER BACK, SI HACE BACK QUE MANDE AL WELCOME Y CIERRE LA SESION O QUE PREGUNTE SI DESEA SALIR DE LA APP
    const { onDashboardNavigationOptions } = useDashboardNavigationOptions(navigation);
    return (
        <SafeAreaView
            style={{flex: 1}}
        >
            {/* cuando ya tenga todos los datos del usuario
            ahi voy a poder guardalos en un context, o sea usar redux
            de forma global para abastecer el resto de los flujos
            en login no amerita usarlo ya que no hay persistencia de datos en ese flujo
            mas que pasaje de parametros de una vista a la otra de forma directa */}
            <Header
                onNavigate={ onDashboardNavigationOptions }
            />
            <ListPost
                onNavigate={ onDashboardNavigationOptions }
            />
        </SafeAreaView>
    );
};

// Realm DB https://docs.mongodb.com/realm/sdk/react-native/
// o lo guardo en cache https://www.npmjs.com/package/react-native-cache
//o usar firebase real time database
//o Context API de React Native
//todo esto en dashboard para cuando obtenga todos los datos del usuario