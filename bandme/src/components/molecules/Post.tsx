/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native';
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
    <View style={{flex: 1, padding: 16, marginVertical: 15 }} >

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
  );
};
