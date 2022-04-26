/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CardInfoProfile = () => {
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
                                source={{uri:'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1440924046/wi1mlnkbn2jluko8pzkj.png'}}
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
                                numberOfLines={1}
                                style={{
                                    margin: 4,
                                }}
                            >
                                Titulo del posteo o Nombre del amigo
                            </Text>
                            <Text
                                numberOfLines={1}
                                style={{
                                    margin: 4,
                                }}
                            >
                                si es evento: fecha y hora/ si es amigo: tipo banda,music, lugar
                            </Text>
                        </View>
                    </View>
                </View>

        </TouchableOpacity>
    );
};
