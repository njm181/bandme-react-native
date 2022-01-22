/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { stylesWelcome } from '../../styles/WelcomeStyles';

export const TextTermsAndConditions = () => {
  return (

    <View style={stylesWelcome.containerTermsConditions}>
        <Text style={stylesWelcome.termsAndConditionTopPart}>
          By continue you agree to our
        </Text>
        <View style={stylesWelcome.termsAndConditionContainerBottomPart}>
          <TouchableOpacity onPress={() => console.log('Terms clicked')}><Text style={stylesWelcome.termsAndCondition}>Terms</Text></TouchableOpacity>
          <Text style={{color: '#9e9e9e'}}> and </Text> 
          <TouchableOpacity onPress={() => console.log('Privacy policy clicked')}><Text style={stylesWelcome.termsAndCondition}>Privacy Policy</Text></TouchableOpacity>
        </View>
      </View>

  );
};
