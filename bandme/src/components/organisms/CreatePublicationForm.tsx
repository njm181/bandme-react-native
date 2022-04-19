/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useCreatePost } from '../../hooks/useCreatePost';
import { useValidateCheckbox } from '../../hooks/useValidateCheckbox';
import { useValidateCreatePostButton } from '../../hooks/useValidateCreatePostButton';
import { useValidateTextInput } from '../../hooks/useValidateTextInput';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { CheckboxCreatePost } from '../atoms/CheckboxCreatePost';
import { TextInputStringNumber } from '../atoms/TextInputStringNumber';
import { TextTitle } from '../atoms/TextTitle';
import { CustomDateTimePicker } from '../molecules/ CustomDateTimePicker';

export const CreatePublicationForm = () => {

    const { setEnableCheckbox, checkboxSelected, checkboxValidate } = useValidateCheckbox();
    const { validateTextInput, input } = useValidateTextInput();
    const { validateFieldsToEnableButton, isEnableButton } = useValidateCreatePostButton();
    const { validateFields, setDatePicker, getEventDate, setTimePicker, getEventTime } = useCreatePost();

  return (

    <KeyboardAvoidingView
        style={{ flex: 1, padding: 16}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column', paddingBottom: 16 }}
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
                            />
                        </View>

                        <View style={{ marginVertical: 16 }}>
                            <CustomDateTimePicker
                                setDatePicker={ setDatePicker }
                                setTimePicker={ setTimePicker }
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
                                    checkboxSelected = { checkboxSelected.search }
                                    setSelection = { setEnableCheckbox }
                                    checkboxType={'search'}
                                />
                            </View>
                            <View>
                                <CheckboxCreatePost
                                    title="Just advertising"
                                    checkboxSelected = { checkboxSelected.advertising }
                                    setSelection = { setEnableCheckbox }
                                    checkboxType={'advertising'}
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
