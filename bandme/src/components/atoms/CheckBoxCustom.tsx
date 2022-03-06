/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface Props {
  title: string;
  setSelection: (isSelected: boolean, checkboxType: number) => void;
  checkboxSelected: {search: boolean; advertising: boolean;}
  checkboxType: number;
  valor: boolean;
}

export const CheckBoxCustom = ({ title, setSelection, checkboxSelected, checkboxType, valor }: Props) => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [enable, setEnable] = useState(false);

  function filterCheckboxValue(checkboxType: number): boolean{
    let value: boolean = false;

    switch (checkboxType) {
      case 1: {
        //if (value == checkboxSelected.search){ value = !value;}
        console.log('SEARCH VALUE PRIMERO: ' + JSON.stringify(checkboxSelected.search));
        value = checkboxSelected.search;
        console.log('SEARCH VALUE SEGUNDO: ' + JSON.stringify(value));
        break;
      }
      case 2: {
        console.log('PUBLICIDAD VALUE PRIMERO: ' + JSON.stringify(checkboxSelected.advertising));
        value = checkboxSelected.advertising;
        console.log('PUBLICIDAD VALUE SEGUNDO: ' + JSON.stringify(value));
        break;
      }
      default:
        break;
    }
    console.log('is slected: ' + JSON.stringify(value));

    return value;
  }

  return (
    <View style={styles.container}>
    <View style={styles.checkboxContainer}>
      <CheckBox
        style={{width: 20, height: 20}}
        disabled={false}
        value={true}
        onValueChange={(newValue) => {
          console.log('on value change: ' + newValue);
          //setEnable(true)
          //if(newValue){setEnable(!newValue)} else {newValue};
          //setToggleCheckBox(newValue);
        }}
       /*  disabled={ false }//filterCheckboxValue(checkboxType)
        value={ false } //filterCheckboxValue(checkboxType)
        onValueChange={(isSelected) => false}///* (isSelected) => setSelection(isSelected, checkboxType) */ 
      />
      <Text style={styles.label}> {title} </Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      margin: 8,
      fontSize: 14,
    },
  });
