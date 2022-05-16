/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Text, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useCreatePost } from '../../hooks/useCreatePost';
import { useValidateCheckbox } from '../../hooks/useValidateCheckbox';
import { useValidateCreatePostButton } from '../../hooks/useValidateCreatePostButton';
import { useValidateTextInput } from '../../hooks/useValidateTextInput';
import { PublicationDetail } from '../../interfaces/PublicationDetail';
import { RootStackParams } from '../../navigation/Navigator';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { CheckboxCreatePost } from '../atoms/CheckboxCreatePost';
import { TextInputStringNumber } from '../atoms/TextInputStringNumber';
import { TextTitle } from '../atoms/TextTitle';
import { CustomDateTimePicker } from '../molecules/ CustomDateTimePicker';
import { ButtonBack } from '../molecules/ButtonBack';

interface Props {
    onNavigateToBack: () => void;
    route: RouteProp<RootStackParams, 'CreateEditPublicationScreen'>;
}

export const CreatePublicationForm = ({onNavigateToBack, route}: Props) => {
    const edit = true;
    const publicationDetails = route.params;
    const { setEnableCheckbox, checkboxSelected, checkboxValidate } = useValidateCheckbox();
    const { validateTextInput, input } = useValidateTextInput();
    const { validateFieldsToEnableButton, isEnableButton } = useValidateCreatePostButton();
    const { validateFields, setDatePicker, getEventDate, setTimePicker, getEventTime } = useCreatePost();

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
                                {/* ACA DEBERIA FILTRAR QUE OPCION ES ASI SE ACTIVA LA CORRECTA */}
                                <CheckboxCreatePost
                                    title="Artist / Band / Place"
                                    checkboxSelected = { publicationDetails?.eventType == 'search' ? true : checkboxSelected.search }
                                    setSelection = { setEnableCheckbox }
                                    checkboxType={'search'}
                                    isPublicationEdit={edit}
                                />
                            </View>
                            <View>
                                <CheckboxCreatePost
                                    title="Just advertising"
                                    checkboxSelected = { publicationDetails?.eventType == 'advertising' ? true : checkboxSelected.advertising }
                                    setSelection = { setEnableCheckbox }
                                    checkboxType={'advertising'}
                                    isPublicationEdit={edit}
                                />
                            </View>
                        </View>
                </View>

            </TouchableWithoutFeedback>

            <View style={{justifyContent: 'flex-end'}}>
                <ButtonPrimary
                    title={'Create'}
                    clickAction={ () =>
                        validateFields(
                            input.Title,
                            input.Calle,
                            input.Altura,
                            input.CP,
                            input.Description,
                            getEventDate,
                            getEventTime,
                            checkboxSelected,
                        )
                    }
                    width={'100%'}
                    isDisabled= {
                        isEnableButton.Description && isEnableButton.Title && checkboxValidate() ? false : true
                    }
                />
            </View>

        </ScrollView>

    </KeyboardAvoidingView>
  );
};
