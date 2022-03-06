/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { useValidateCheckbox } from '../../hooks/useValidateCheckbox';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { CheckboxCreatePost } from '../atoms/CheckboxCreatePost';
import { CheckBoxCustom } from '../atoms/CheckBoxCustom';
import { TextInputStringNumber } from '../atoms/TextInputStringNumber';
import { TextTitle } from '../atoms/TextTitle';
import { CustomDateTimePicker } from '../molecules/ CustomDateTimePicker';

export const CreatePublicationForm = () => {

const { setEnableCheckbox, checkboxSelected } = useValidateCheckbox();

  return (
    <View style={{ flex: 1}}>

        <View style={{backgroundColor: 'green', alignSelf: 'flex-start', marginBottom: 16}}>
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
        <View style={{backgroundColor: 'yellow', marginTop: 16}}>
        <TextInputStringNumber
            placeholder={'Calle'}
            maxLength={25}
            keyboardType={'default'}
            isMultiline={false}
            width={null}
        />
        </View>
        <View style={{backgroundColor: 'orange', marginTop: 16, flexDirection: 'row'}}>
            <View style={{backgroundColor: 'green', flex: 1, paddingEnd: 4}}>
                <TextInputStringNumber
                    placeholder={'altura'}
                    maxLength={6}
                    keyboardType={'number-pad'}
                    isMultiline={false}
                    width={null}
                />
            </View>
            <View style={{backgroundColor: 'purple', flex: 1, paddingStart: 4}}>
                <TextInputStringNumber
                    placeholder={'Codigo Postal'}
                    maxLength={6}
                    keyboardType={'number-pad'}
                    isMultiline={false}
                    width={null}
                />
            </View>
        </View>

            <View style={{marginTop: 16}}>
                <TextInputStringNumber
                    placeholder={'Descripcion'}
                    maxLength={255}
                    keyboardType={'default'}
                    isMultiline={true}
                    width={'100%'}
                />
            </View>

            <CustomDateTimePicker/>

            <View style={{marginVertical: 16}}>
                <View style={{marginBottom: 16}}>
                    <Text
                        style={{fontSize: 18}}
                    >
                        Event type: What are you looking for?
                    </Text>
                </View>
                <View style={{marginBottom: 8}}>
                    <CheckboxCreatePost/>
                    {/* <CheckBoxCustom
                        title = "Artist / Band / Place"
                        setSelection = { setEnableCheckbox }
                        checkboxSelected = { checkboxSelected }
                        checkboxType={1}
                        valor={true}
                    /> */}
                </View>
                <View>
                    <CheckboxCreatePost/>
                    {/* <CheckBoxCustom
                        title = "Just advertising"
                        setSelection = { setEnableCheckbox }
                        checkboxSelected = { checkboxSelected }
                        checkboxType={2}
                        valor={false}
                    /> */}
                </View>
            </View>

            <ButtonPrimary/>
    </View>
  );
};
