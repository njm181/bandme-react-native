/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { FlatList, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NotificationCard } from '../../components/molecules/NotificationCard';
import { RootStackParams } from '../../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'NotificationCenterScreen'> {}

export const NotificationCenterScreen = ({navigation}: Props) => {

  const DATA = [];
  const DATA2 = [
    {
      id: '1',
      title: 'Probando notificacion',
      date: '15 May',
      description: 'Description description Description description Description description Description description ',
    },
    {
      id: '2',
      title: 'Probando notificacion 2',
      date: '15 May',
      description: 'Description description Description description Description description Description description ',
    },
    {
      id: '3',
      title: 'Probando notificacion 3',
      date: '15 May',
      description: 'Description description Description description Description description Description description ',
    },
    {
      id: '4',
      title: 'Probando notificacion 4',
      date: '15 May',
      description: 'Description description Description description Description description Description description ',
    },
    {
      id: '5',
      title: 'Probando notificacion 5',
      date: '15 May',
      description: 'Description description Description description Description description Description description ',
    },
    {
      id: '6',
      title: 'Probando notificacion 6',
      date: '15 May',
      description: 'Description description Description description Description description Description description ',
    },
    {
      id: '7',
      title: 'Probando notificacion 7',
      date: '15 May',
      description: 'Description description Description description Description description Description description ',
    },
    {
      id: '8',
      title: 'Probando notificacion 8',
      date: '15 May',
      description: 'Description description Description description Description description Description description ',
    },
  ];

  return (

    <SafeAreaView style={{padding: 16}}>
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        }}
      >
        {
          DATA.length == 0 ?
            <View style={{alignItems: 'center'}}>
              <Image style={{width: 64, height: 64, alignItems: 'center'}} source={require('../../assets/empty_mailbox.png')}/>
              <Text>Notification mailbox is empty</Text>
            </View>
            :
             null
        }
      </View>
      <FlatList
          style={{height: '100%'}}
          data={DATA}
          renderItem={ ({item}: any) => <NotificationCard title={item.title} date={item.date} description={item.description}/> }
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator = {false}
          pagingEnabled={true}
          /* refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#ff8f00']}
            />
          } */
        />
    </SafeAreaView>

  );
};
