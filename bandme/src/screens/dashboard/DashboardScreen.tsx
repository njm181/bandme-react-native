/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonLogin } from '../../components/atoms/ButtonLogin';
import { CheckBoxCustom } from '../../components/atoms/CheckBoxCustom';
import { TextInputEmail } from '../../components/atoms/TextInputEmail';
import { TextInputStringNumber } from '../../components/atoms/TextInputStringNumber';
import { CustomDateTimePicker } from '../../components/molecules/ CustomDateTimePicker';
import { ButtonCircleLikeShare } from '../../components/molecules/ButtonCircleLikeShare';
import { Header } from '../../components/molecules/Header';
import { CreatePublicationForm } from '../../components/organisms/CreatePublicationForm';
import { DetailsButtons } from '../../components/organisms/DetailsButtons';
import { ListPost } from '../../components/organisms/ListPost';
import { PublicationDetail } from '../../components/organisms/PublicationDetail';
import { PublicationDetailCard } from '../../components/organisms/PublicationDetailCard';
import { useValidateTextInput } from '../../hooks/useValidateTextInput';

export const DashboardScreen = () => {

//  PROHIBIR HACER BACK, SI HACE BACK QUE MANDE AL WELCOME Y CIERRE LA SESION O QUE PREGUNTE SI DESEA SALIR DE LA APP

    return (
        <SafeAreaView
            style={{flex: 1}}
        >
            {/* cuando ya tenga todos los datos del usuario
            ahi voy a poder guardalos en un context, o sea usar redux
            de forma global para abastecer el resto de los flujos
            en login no amerita usarlo ya que no hay persistencia de datos en ese flujo
            mas que pasaje de parametros de una vista a la otra de forma directa */}
            {/* <Header/> */}
            {/* <Post/> */}
            {/* <ListPost/> */}
            {/* <DetailsButtons/> */}
            {/* <PublicationDetailCard/> */}
            {/* <PublicationDetail/> */}
            {/* <TextInputStringNumber
                placeholder={'Titulo'}
                maxLength={25}
                keyboardType={'default'}
                isMultiline={false}
                width={'100%'}
            />
            <TextInputStringNumber
                placeholder={'Calle'}
                maxLength={25}
                keyboardType={'default'}
                isMultiline={false}
                width={'50%'}
            />
            <TextInputStringNumber
                placeholder={'altura'}
                maxLength={6}
                keyboardType={'number-pad'}
                isMultiline={false}
                width={'20%'}
            />
            <TextInputStringNumber
                placeholder={'Codigo Postal'}
                maxLength={6}
                keyboardType={'number-pad'}
                isMultiline={false}
                width={'20%'}
            />
            <TextInputStringNumber
                placeholder={'Descripcion'}
                maxLength={255}
                keyboardType={'default'}
                isMultiline={true}
                width={'100%'}
            /> */}
            {/* <CustomDateTimePicker/> */}
            <CreatePublicationForm/>
            {/* <TextInputStringNumber
                placeholder={'Calle'}
                maxLength={25}
                keyboardType={'default'}
                isMultiline={false}
                width={null}
                textState={textState}
                validateTextInput={validateTextInput}
            /> */}
            {/* <CheckBoxCustom
                title= 'Title del checkbox'
            /> */}
        </SafeAreaView>
    );
};

// Realm DB https://docs.mongodb.com/realm/sdk/react-native/
// o lo guardo en cache https://www.npmjs.com/package/react-native-cache
//o usar firebase real time database
//o Context API de React Native
//todo esto en dashboard para cuando obtenga todos los datos del usuario