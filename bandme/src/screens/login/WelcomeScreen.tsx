/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {stylesWelcome} from '../../styles/WelcomeStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonLogin} from '../../components/atoms/ButtonLogin';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigator';
import {useGoogleSignIn} from '../../hooks/useGoogleSignIn';
import {useFacebookSignIn} from '../../hooks/useFacebookSignIn';
import {useEmailSignIn} from '../../hooks/useEmailSignIn';


interface Props extends StackScreenProps<RootStackParams, 'WelcomeScreen'> {}
//key de debug keystore: bandme

export const WelcomeScreen = ({navigation}: Props) => {
  const {handleGoogleLogin} = useGoogleSignIn(navigation);
  const {handleFacebookLogin} = useFacebookSignIn(navigation);
  const {handleEmailLogin} = useEmailSignIn(navigation);

  return (
    <SafeAreaView style={stylesWelcome.container}>
      <Text style={stylesWelcome.title}>Welcome to BandMe</Text>

      <View style={stylesWelcome.imageContainer}>
        <Icon name="play-circle-outline" size={256} color={'black'} />
      </View>

      <View style={stylesWelcome.containerButtons}>

        <ButtonLogin
          title={'Login with Facebook'}
          clickAction={handleFacebookLogin}
          iconName="logo-facebook"
        />

        <ButtonLogin
          title={'Login with Google'}
          clickAction={handleGoogleLogin}
          iconName="logo-google"
        />

        <ButtonLogin
          title={'Login with Email'}
          clickAction= {handleEmailLogin}
          iconName= "mail"
        />
      </View>

    {/* //crear component de tyc */}
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
    </SafeAreaView>
  );
};