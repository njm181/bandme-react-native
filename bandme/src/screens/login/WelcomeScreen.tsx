import React from 'react';
import {Text, View} from 'react-native';
import {stylesWelcome} from '../../styles/WelcomeStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonLogin} from '../../components/atoms/ButtonLogin';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigator';
import {useGoogleSignIn} from '../../hooks/useGoogleSignIn';
import {useFacebookSignIn} from '../../hooks/useFacebookSignIn';
import {useEmailSignIn} from '../../hooks/useEmailSignIn';
import { TextTermsAndConditions } from '../../components/molecules/TextTermsAndConditions';


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
      <TextTermsAndConditions/>
    </SafeAreaView>
  );
};
