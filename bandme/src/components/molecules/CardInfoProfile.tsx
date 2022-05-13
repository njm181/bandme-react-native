/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string;
    subtitle: string;
    image: string;
}

export const CardInfoProfile = ({ title, subtitle, image }: Props,  edit : string) => {

  return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 1,
                marginVertical: 4,
                borderRadius: 10,
            }}
        >
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={ () => {
                    console.log('click en carddddddd: ' + edit);
                }}
                /* onPress={() => console.log('click en card')} */
                style={{
                    width: '90%',
                    height: 70,
                    borderRadius: 10,
                    flexDirection: 'row',
            }}
            >
                <View
                    style={{
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
            <View
                style={{
                    flexDirection: 'row',
                    width: 100,
                    height: '90%',
                    alignItems: 'center',
                    marginEnd: 8,
                }}
            >
                <TouchableOpacity
                    onPress={() => console.log('Edit posteo')}
                    style={{
                    }}
                >
                    <Icon
                        name="create"
                        size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => console.log('Delete posteo')}
                    style={{
                    }}
                >
                    <Icon
                        name="trash"
                        size={25}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
