/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Publication } from '../../interfaces/Publication';
import { ButtonIconProfile } from '../atoms/ButtonIconProfile';
import { ButtonLikeDislike } from '../atoms/ButtonLikeDislike';
import { ButtonSharePost } from '../atoms/ButtonSharePost';
import { ButtonViewDetails } from '../atoms/ButtonViewDetails';
import { ImagePost } from '../atoms/ImagePost';
import { TextTitle } from '../atoms/TextTitle';

interface Props {
    publication: Publication
}

export const Post = ({ publication }: Props) => {
  return (
    <TouchableOpacity
        onPress={() => console.log('click en la card')}
        activeOpacity={0.8}
        style={{
            flex: 1,
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
            borderRadius: 20,
        }}
    >
        <View>

            <View style={{flexDirection: 'row'}} >
                <ButtonIconProfile
                    isProfileImage={true}
                    imageSource={null}
                />

                <View style={{flex: 1, marginLeft: 8}}>
                    <View style={{alignSelf: 'flex-start'}}>
                        <TextTitle
                                title={publication.owner}
                                size={25}
                                colour={'#000000'}
                        />
                    </View>

                    <View style={{alignSelf: 'flex-start'}}>
                        <TextTitle
                            title={publication.location}
                            size={15}
                            colour={'#78909c'}
                        />
                    </View>
                </View>
            </View>

            <ImagePost
                    imageSource={publication.image}
             />

            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center'}}
            >
                <View
                    style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginRight: 16}}
                >
                    <ButtonLikeDislike
                        isLike={ publication.like }
                    />

                    <ButtonViewDetails/>

                </View>

                <ButtonSharePost/>
            </View>

        </View>
    </TouchableOpacity>
  );
};
