/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { ImagePost } from '../atoms/ImagePost';
import { ButtonBack } from '../molecules/ButtonBack';
import { PublicationDetailCard } from './PublicationDetailCard';

interface Props {
  onNavigate: { goToProfile: () => void; goToBack: () => void; };
}

export const PublicationDetail = ({onNavigate}: Props) => {
  return (
    <View style={{ backgroundColor: '#eeeeee', flex: 1}}>
        <ButtonBack
          goToBack= { onNavigate.goToBack }
        />
        <View>
          <ImagePost
            imageSource={'https://billetto.es/blog/wp-content/uploads/2019/04/hanny-naibaho-388579-unsplash-e1554461063517.jpg'}
            heightSource={250}
            borderRadius={10}
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

            <PublicationDetailCard
              onNavigateGoToProfile={onNavigate.goToProfile}
            />

        </View>

    </View>
  );
};
