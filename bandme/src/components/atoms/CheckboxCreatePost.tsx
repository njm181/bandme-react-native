/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { CheckBox } from 'react-native-elements';

interface Props {
  title: string;
  setSelection: (isSelected: boolean, checkboxType: string) => void;
  checkboxSelected: boolean;
  checkboxType: string;
}

export const CheckboxCreatePost = ({ title, setSelection, checkboxSelected, checkboxType }: Props) => {

  return (
    <CheckBox
        containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
        title={title}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={checkboxSelected}
        uncheckedColor={'#616161'}
        checkedColor={'#ff8f00'}
        onPress={() => { setSelection(!checkboxSelected, checkboxType); }}
      />
  );
};
