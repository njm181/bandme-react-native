/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { CheckBox } from 'react-native-elements';
//import { useValidateDateTimePicker } from '../../hooks/useValidateDateTimePicker';

interface Props {
  title: string;
  setSelection: (isSelected: boolean, checkboxType: string) => void;
  checkboxSelected: boolean;
  checkboxType: string;
}

export const CheckboxCreatePost = ({ title, setSelection, checkboxSelected, checkboxType }: Props) => {

  //const { setDatetimePicked } = useValidateDateTimePicker();
  function ver () {
    console.log('valor para el checkbox: ' + checkboxSelected);
  }
  ver();
  return (
    <CheckBox
        containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
        title={title}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={checkboxSelected}
        uncheckedColor={'#616161'}
        checkedColor={'#ff8f00'}
        onPress={() => {
          /* isEdit ?
            console.log('valor para editar: type : ' + checkboxType + ' / valor: ' + checkboxSelected + '/ nuevo valor: ' + !checkboxSelected)
            : */

            console.log('type : ' + checkboxType + ' / valor: ' + !checkboxSelected);
            setSelection(!checkboxSelected, checkboxType);
        }
      }
      />
  );
};
