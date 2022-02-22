/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { ImagePost } from '../atoms/ImagePost';
import { PublicationDetailCard } from './PublicationDetailCard';

export const PublicationDetail = () => {
  return (
    <View style={{ backgroundColor: '#eeeeee', flex: 1}}>

        <View>
          <ImagePost
            imageSource={'https://billetto.es/blog/wp-content/uploads/2019/04/hanny-naibaho-388579-unsplash-e1554461063517.jpg'}
            heightSource={250}
            borderRadius={0}
          />
        </View>

        <View
            style={{
                  height: '100%',
                  position: 'absolute',
                  justifyContent:'center',
                  alignSelf:'center',
                  paddingBottom: 4,
                  top: 50,
                }}>

            <PublicationDetailCard />

        </View>

    </View>
  );
};
