/* eslint-disable no-undef */
/* eslint-disable no-undef-init */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useCreatePost } from '../../hooks/useCreatePost';
import { useValidateCheckbox } from '../../hooks/useValidateCheckbox';
import { useValidateCreatePostButton } from '../../hooks/useValidateCreatePostButton';
import { useValidateTextInput } from '../../hooks/useValidateTextInput';
import { RootStackParams } from '../../navigation/Navigator';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { CheckboxCreatePost } from '../atoms/CheckboxCreatePost';
import { TextInputStringNumber } from '../atoms/TextInputStringNumber';
import { TextTitle } from '../atoms/TextTitle';
import { CustomDateTimePicker } from '../molecules/ CustomDateTimePicker';

interface Props {
    onNavigateToBack: () => void;
    route: RouteProp<RootStackParams, 'CreateEditPublicationScreen'>;
}

export const CreatePublicationForm = ({onNavigateToBack, route}: Props) => {
    const edit = true;
    const publicationDetails = route.params;
    console.log('detalles: ' + JSON.stringify(publicationDetails));
    const { setEnableCheckbox, checkboxSelected, checkboxValidate } = useValidateCheckbox();
    const { validateTextInput, input } = useValidateTextInput();
    const { validateFieldsToEnableButton, isEnableButton } = useValidateCreatePostButton();
    const { validateFields, setDatePicker, getEventDate, setTimePicker, getEventTime } = useCreatePost();

    const validateCheckboxSelected = (type: string): boolean => {
        let result = false;
        if ( edit && publicationDetails != undefined ) {
            switch (type){
                case 'search':
                    result = checkboxSelected.search == false && checkboxSelected.advertising == false && publicationDetails.eventType == type ? true : checkboxSelected.search;
                break;

                case 'advertising':
                    result = checkboxSelected.search == false && checkboxSelected.advertising == false && publicationDetails.eventType == type ? true : checkboxSelected.advertising;
                break;
            }
        }
        return result;
    };

    const validateEnableButton = (): boolean => {
        if (edit){
            if (
                input.Title == '' &&  input.Description == '' && checkboxSelected.search == false && checkboxSelected.advertising == false
                ||
                publicationDetails?.title == '' && publicationDetails?.description == '' &&  publicationDetails?.eventType == ''
            ) {
                console.log('*****entro por el if que devuelve true***');
                return true;
            } else {
                console.log('*****entro por el if que devuelve false***');
                return false;
            }
        } else {
            return isEnableButton.Description && isEnableButton.Title && checkboxValidate() ? false : true;
        }
    };


    const finalizeEditPublication = () => {
        if (edit){
            if (input.Title != ''){
                console.log('como se edito el campo uso ese valor: ' + input.Title);
            } else {
                console.log('como no se edito este campo se usa details: ' + publicationDetails?.title);
            }
            if (input.Calle != ''){
                console.log('como se edito el campo uso ese valor: ' + input.Calle);
            } else {
                console.log('como no se edito este campo se usa details: ' + publicationDetails?.street);
            }
            if (input.Altura != ''){
                console.log('como se edito el campo uso ese valor: ' + input.Altura);
            } else {
                console.log('como no se edito este campo se usa details: ' + publicationDetails?.streetNumber);
            }
            if (input.CP != ''){
                console.log('como se edito el campo uso ese valor: ' + input.CP);
            } else {
                console.log('como no se edito este campo se usa details: ' + publicationDetails?.postalCode);
            }
            if (input.Description != ''){
                console.log('como se edito el campo uso ese valor: ' + input.Description);
            } else {
                console.log('como no se edito este campo se usa details: ' + publicationDetails?.description);
            }
            if (getEventDate != ''){
                console.log('como se edito el campo uso ese valor: ' + getEventDate);
            } else {
                console.log('como no se edito este campo se usa details: ' + publicationDetails?.eventDate);
            } if (getEventTime != ''){
                console.log('como se edito el campo uso ese valor: ' + getEventTime);
            } else {
                console.log('como no se edito este campo se usa details: ' + publicationDetails?.eventTime);
            } if (checkboxSelected.search || checkboxSelected.advertising){
                console.log('como se edito el campo uso ese valor: ' + JSON.stringify(checkboxSelected));
            } else {
                console.log('como no se edito este campo se usa details: ' + publicationDetails?.eventType);
            }
        }
    };

    //finalizeEditPublication();

  return (
    //FALTA CARGAR FOTO DE EVENTO DESDE LA GALERIA DEL CELULAR
    <KeyboardAvoidingView
        style={{ flex: 1, padding: 16}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        {/* <ButtonBack
                goToBack= { onNavigateToBack }
                paddingStart={0}
        /> */}

        <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column', paddingBottom: 16, marginTop: 16 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={{justifyContent: 'flex-start'}}>

                    <View style={{alignSelf: 'flex-start', marginBottom: 16}}>
                        <TextTitle
                            title={'Create Post'}
                            size={30}
                            colour={'#000000'}
                        />
                    </View>
                    <TextInputStringNumber
                            placeholder={'Title'}
                            maxLength={25}
                            keyboardType={'default'}
                            isMultiline={false}
                            width={null}
                            validateTextInput={validateTextInput}
                            value={ input.Title }
                            validateButtonState={ validateFieldsToEnableButton }
                            isRequired={true}
                            isPublicationEdit= { edit }
                            publicationDetail={publicationDetails?.title}
                    />
                    <View style={{ marginTop: 16 }}>
                    <TextInputStringNumber
                        placeholder={'Calle'}
                        maxLength={25}
                        keyboardType={'default'}
                        isMultiline={false}
                        width={null}
                        validateTextInput={validateTextInput}
                        value={ input.Calle }
                        validateButtonState={ validateFieldsToEnableButton }
                        isRequired={false}
                        isPublicationEdit= { edit }
                        publicationDetail={publicationDetails?.street}
                    />
                    </View>
                    <View style={{ marginTop: 16, flexDirection: 'row'}}>
                        <View style={{ flex: 1, paddingEnd: 4}}>
                            <TextInputStringNumber
                                placeholder={'Altura'}
                                maxLength={6}
                                keyboardType={'number-pad'}
                                isMultiline={false}
                                width={null}
                                validateTextInput={validateTextInput}
                                value={ input.Altura }
                                validateButtonState={ validateFieldsToEnableButton }
                                isRequired={false}
                                isPublicationEdit= { edit }
                                publicationDetail={publicationDetails?.streetNumber}
                            />
                        </View>
                        <View style={{ flex: 1, paddingStart: 4}}>
                            <TextInputStringNumber
                                placeholder={'CP'}
                                maxLength={6}
                                keyboardType={'number-pad'}
                                isMultiline={false}
                                width={null}
                                validateTextInput={validateTextInput}
                                value={input.CP}
                                validateButtonState={ validateFieldsToEnableButton }
                                isRequired={false}
                                isPublicationEdit= { edit }
                                publicationDetail={publicationDetails?.postalCode}
                                />
                        </View>
                    </View>

                        <View style={{marginVertical: 16}}>
                            <TextInputStringNumber
                                placeholder={'Description'}
                                maxLength={255}
                                keyboardType={'default'}
                                isMultiline={true}
                                width={'100%'}
                                validateTextInput={validateTextInput}
                                value={ input.Description }
                                validateButtonState={ validateFieldsToEnableButton }
                                isRequired={true}
                                isPublicationEdit= { edit }
                                publicationDetail={publicationDetails?.description}
                            />
                        </View>

                        <View style={{ marginVertical: 16 }}>
                            <CustomDateTimePicker
                                setDatePicker={ setDatePicker }
                                setTimePicker={ setTimePicker }
                                isPublicationEdit= { edit }
                                publicationDetail={[publicationDetails?.eventDate, publicationDetails?.eventTime]}
                            />
                        </View>

                        <View style={{marginVertical: 16}}>
                            <View style={{marginBottom: 16}}>
                                <Text
                                    style={{fontSize: 18, color: 'black'}}
                                >
                                    Event type: What are you looking for?
                                </Text>
                            </View>
                            <View>
                                <CheckboxCreatePost
                                    title="Artist / Band / Place"
                                    checkboxSelected = {validateCheckboxSelected('search')}
                                    setSelection = { setEnableCheckbox }
                                    checkboxType={'search'}
                                />
                            </View>
                            <View>
                                <CheckboxCreatePost
                                    title="Just advertising"
                                    checkboxSelected = {validateCheckboxSelected('advertising')}
                                    setSelection = { setEnableCheckbox }
                                    checkboxType={'advertising'}
                                />
                            </View>
                        </View>
                </View>

            </TouchableWithoutFeedback>

            <View style={{justifyContent: 'flex-end'}}>
                <ButtonPrimary
                    title={ edit ? 'Edit' : 'Create'}
                    clickAction={ () =>
                        {
                            !edit ? validateFields(
                                input.Title,
                                input.Calle,
                                input.Altura,
                                input.CP,
                                input.Description,
                                getEventDate,
                                getEventTime,
                                checkboxSelected,
                            ) :
                        finalizeEditPublication();
                        console.log('estas editando');
                    }
                    }
                    width={'100%'}
                    isDisabled= {
                        validateEnableButton()
                    }
                />
            </View>

        </ScrollView>

    </KeyboardAvoidingView>
  );
};
