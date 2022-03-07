/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useValidateCheckbox } from '../../hooks/useValidateCheckbox';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { CheckboxCreatePost } from '../atoms/CheckboxCreatePost';
import { TextInputStringNumber } from '../atoms/TextInputStringNumber';
import { TextTitle } from '../atoms/TextTitle';
import { CustomDateTimePicker } from '../molecules/ CustomDateTimePicker';

export const CreatePublicationForm = () => {

const { setEnableCheckbox, checkboxSelected } = useValidateCheckbox();

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
                            placeholder={'Titulo'}
                            maxLength={25}
                            keyboardType={'default'}
                            isMultiline={false}
                            width={null}
                    />
                    <View style={{ marginTop: 16 }}>
                    <TextInputStringNumber
                        placeholder={'Calle'}
                        maxLength={25}
                        keyboardType={'default'}
                        isMultiline={false}
                        width={null}
                    />
                    </View>
                    <View style={{ marginTop: 16, flexDirection: 'row'}}>
                        <View style={{ flex: 1, paddingEnd: 4}}>
                            <TextInputStringNumber
                                placeholder={'altura'}
                                maxLength={6}
                                keyboardType={'number-pad'}
                                isMultiline={false}
                                width={null}
                            />
                        </View>
                        <View style={{ flex: 1, paddingStart: 4}}>
                            <TextInputStringNumber
                                placeholder={'Codigo Postal'}
                                maxLength={6}
                                keyboardType={'number-pad'}
                                isMultiline={false}
                                width={null}
                            />
                        </View>
                    </View>

                        <View style={{marginVertical: 16}}>
                            <TextInputStringNumber
                                placeholder={'Descripcion'}
                                maxLength={255}
                                keyboardType={'default'}
                                isMultiline={true}
                                width={'100%'}
                            />
                        </View>

                        <View style={{ marginVertical: 16 }}>
                            <CustomDateTimePicker/>
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

                        {/* <View style={{backgroundColor: 'red'}}>
                            <ButtonPrimary
                                title={'Create'}
                                clickAction={ () => console.log('Click button primary!') }
                                width={'100%'}
                            />
                        </View> */}

                        {/* <View style={{backgroundColor: 'green', height: 100 }}/> */}
                </View>

            </TouchableWithoutFeedback>

            <View style={{justifyContent: 'flex-end'}}>
                <ButtonPrimary
                    title={'Create'}
                    clickAction={ () => console.log('Click button primary!') }
                    width={'100%'}
                />
            </View>

        </ScrollView>

    </KeyboardAvoidingView>
  );
};
