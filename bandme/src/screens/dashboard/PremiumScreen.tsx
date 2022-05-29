/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonPrimary } from '../../components/atoms/ButtonPrimary';

export const PremiumScreen = () => {
  return (
    <SafeAreaView>
      <LinearGradient
                colors={['#ff8f00', '#eeeeee', '#eeeeee']}
                style={{height: '100%'}}
      >
        <View
          style={{flex: 1}}
        >
          <View style={{alignItems: 'center'}}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../assets/premium_128.png')}
            />
          </View>
          <Text
            style={{textAlign:'center', fontSize: 30, marginTop: 5}}
          >
            Bandme
          </Text>
          <Text
            style={{textAlign:'center', fontSize: 30}}
          >
            Premium
          </Text>

          <View style={{flex: 1, justifyContent: 'space-evenly'}}>
            <View>
              <Text
                style={{textAlign:'center', fontSize: 40}}
              >
                ARS $99.95
              </Text>
              <Text
                style={{textAlign:'center', fontSize: 12}}
              >
                Per month
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 8}}>
              <Image
                  style={{alignSelf: 'center', marginEnd: 8}}
                  source={require('../../assets/green_checked_32.png')}
                />
                <Text style={{fontSize: 16}}>Description about feature premium one</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 8}}>
              <Image
                  style={{alignSelf: 'center', marginEnd: 8}}
                  source={require('../../assets/green_checked_32.png')}
                />
                <Text style={{fontSize: 16}}>Description about feature premium one</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 8}}>
              <Image
                  style={{alignSelf: 'center', marginEnd: 8}}
                  source={require('../../assets/green_checked_32.png')}
                />
                <Text style={{fontSize: 16}}>Description about feature premium one</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 8}}>
              <Image
                  style={{alignSelf: 'center', marginEnd: 8}}
                  source={require('../../assets/green_checked_32.png')}
                />
                <Text style={{fontSize: 16}}>Description about feature premium one</Text>
              </View>
            </View>

            <View style={{alignItems: 'center', marginTop: 10}}>
              <ButtonPrimary
                title={'Order'}
                width={170}
                height={45}
                clickAction={() => console.log('click para ir al formulario y obtener el premium')}
              />
            </View>
          </View>

        </View>
        </LinearGradient>
    </SafeAreaView>
  );
};
