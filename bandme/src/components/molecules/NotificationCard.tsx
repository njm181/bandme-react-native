/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string;
    date: string;
    description: string;
}

export const NotificationCard = ({title = 'Title', date = '15 Jun', description = 'Description'}: Props) => {

  return (
    <TouchableOpacity
          style={{
            height: 100,
            shadowColor: '#000',
            marginVertical: 15,
            marginHorizontal: 6,
            padding: 16,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
          }}
          activeOpacity={1}
        >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Icon name="play-circle-outline" size={45} color={'black'} style={{alignSelf: 'center', marginEnd: 8}}/>
            <View style={{flex: 1, alignSelf: 'center'}}>
              <Text>{title} - {date}</Text>
              {/* 120 characters */}
              <Text numberOfLines={3}>{description}</Text>
            </View>
            {/* <View style={{width: 40, height: 40, alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() => console.log('Delete notitication')}
                    >
                        <Icon
                            name="trash"
                            size={25}
                        />
                </TouchableOpacity>
            </View> */}
          </View>

        </TouchableOpacity>
  );
};
