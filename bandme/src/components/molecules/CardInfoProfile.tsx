/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    title: string;
    subtitle: string;
    image: string;
}

export const CardInfoProfile = ({ title, subtitle, image }: Props) => {
  return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('click en card')}
            style={{
                width: '100%',
                height: 70,
                flexDirection: 'row',
                backgroundColor: '#fafafa',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                paddingHorizontal:6,
                marginVertical: 4,
        }}
        >
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        flexDirection: 'row',
                        borderRadius: 10,
                }}
                >
                    <View
                        style={{
                            alignSelf: 'baseline',
                            height: '100%',
                            justifyContent: 'center',
                            borderRadius: 10,
                        }}
                    >
                        <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 50,
                                }}
                                source={{uri: image}}
                        />
                    </View>
                    <View
                        style={{
                            padding: 8,
                            borderRadius: 10,
                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                alignSelf: 'flex-start',
                                width: '85%',
                                alignContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    marginTop: 4,
                                    marginHorizontal: 4,
                                    fontSize: 16,
                                }}
                            >
                                {title}
                            </Text>
                            <Text
                                style={{
                                    marginHorizontal: 4,
                                }}
                            >
                                {subtitle}
                            </Text>
                        </View>
                    </View>
                </View>

        </TouchableOpacity>
    );
};
