/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import { IndicatorViewPager, PagerDotIndicator, PagerTabIndicator, PagerTitleIndicator } from '@shankarmorwal/rn-viewpager';
import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { CardInfoProfile } from '../../components/molecules/CardInfoProfile';
import LinearGradient from 'react-native-linear-gradient';



export const ProfileScreen = () => {

    const [getButtonSelected, setButtonSelected] = useState({
        activity: true,
        friends: false,
    });

    const [showActivities, setShowActivities] = useState(true);

    const dataScrollableActivities = [
        {
            id: 1,
            title: 'Titulo',
            subtitle: 'Subtitle Subtitle Subtitle Subtitle Subtitle',
            image: 'https://i.pinimg.com/originals/bd/11/21/bd1121d056ec8e2d3f333372cfef5e51.jpg',
        },
        {
            id: 2,
            title: 'Titulo',
            subtitle: 'Subtitle Subtitle Subtitle Subtitle Subtitle',
            image: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1440924046/wi1mlnkbn2jluko8pzkj.png',
        },
        {
            id: 3,
            title: 'Titulo',
            subtitle: 'Subtitle Subtitle Subtitle Subtitle Subtitle',
            image: 'https://64.media.tumblr.com/21d593a7781c3273386723c615c9e1bb/94f36ac9ecfb6135-16/s1280x1920/6fa6faa9f4dc74932662148059388be012186d77.jpg',
        },
        {
            id: 4,
            title: 'Titulo',
            subtitle: 'Subtitle Subtitle Subtitle Subtitle Subtitle',
            image: 'https://i.pinimg.com/originals/b9/6d/f5/b96df58723286be88e69c94570bbce06.png',
        },
    ];

    const dataScrollableFriends = [
        {
            id: 1,
            title: 'Amigo 1',
            subtitle: 'Artista',
            image: 'https://i.pinimg.com/originals/b9/6d/f5/b96df58723286be88e69c94570bbce06.png',
        },
        {
            id: 2,
            title: 'Amigo 2',
            subtitle: 'Banda',
            image: 'https://64.media.tumblr.com/21d593a7781c3273386723c615c9e1bb/94f36ac9ecfb6135-16/s1280x1920/6fa6faa9f4dc74932662148059388be012186d77.jpg',
        },
        {
            id: 3,
            title: 'Amigo 3',
            subtitle: 'Establecimiento',
            image: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1440924046/wi1mlnkbn2jluko8pzkj.png',
        },
        {
            id: 4,
            title: 'Amigo 4',
            subtitle: 'Artista',
            image: 'https://i.pinimg.com/originals/bd/11/21/bd1121d056ec8e2d3f333372cfef5e51.jpg',
        },
    ];



  return (
    <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: '#eeeeee',
        }}
    >
        <LinearGradient
                colors={['#ff8f00', '#eeeeee', '#eeeeee']}
                style={{
                    alignItems: 'center',
                    height: '50%',
                    marginBottom: 16,
                }}
        >
            <View
                style={{alignItems: 'center',}}
            >
                <View
                    style={{
                        width: '100%',
                        height: '90%',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Image
                        style={{
                            width: 80,
                            height: 80,
                        }}
                        source={{uri:'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1440924046/wi1mlnkbn2jluko8pzkj.png'}}
                    />

                    <Text
                        style={{
                            fontSize: 24,
                            marginTop: 8,
                        }}
                    >
                        Nombre Apellido
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            marginTop: 4,
                        }}
                    >
                        City, Country ARG/UK/ETC
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 16,
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.60}
                            onPress={ () => console.log('click en boton spotify') }
                        >
                            <Image
                            source={require('../../assets/spotify.png')}
                            style={{width: 50, height: 50, marginHorizontal: 8}}
                        />
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.60}
                            onPress={ () => console.log('click en boton instagram') }
                        >
                            <Image
                            source={require('../../assets/instagram.png')}
                            style={{width: 50, height: 50, marginHorizontal: 8}}
                        />
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.60}
                            onPress={ () => console.log('click en boton youtube') }
                        >
                            <Image
                            source={require('../../assets/youtube.png')}
                            style={{width: 50, height: 50, marginHorizontal: 8}}
                        />
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={{
                        width: '90%',
                        height: 100,
                        position: 'absolute',
                        alignSelf: 'center',
                        bottom: 0,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: '#e0e0e0',
                        padding: 6,
                }}
            >
                    <Text
                        style={{
                            fontSize: 14,
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}
                    >
                        Breve descripcion de la persona/lugar/banda
                    </Text>
                </View>

                <TouchableOpacity
                    style={{
                        height: 40,
                        width: 130,
                        flexDirection: 'row',
                        backgroundColor: '#ff8f00',
                        borderRadius: 30,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        justifyContent: 'center',
                        marginTop: 16,
                    }}
                    activeOpacity={0.80}
                    onPress={ () => console.log('click en boton follow/unfollow/edit') }
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}
                    >
                        {
                        //if is my profile = true button = edit, is not my profile, if i am watching a person's profile that i am do not following button = follow
                        //, if i am following the person button = unfollow
                           false ? 'Edit' :
                            false ? 'Unfollow'
                                :
                                    'Follow'

                        }
                    </Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
        {/* prender y apagar el style del boton segun estado seleccionado y en base al estado seleccionado mostrar un contenido u otro */}
        <View
            style={{
                flex: 1,
                marginTop: 16,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <TouchableOpacity
                    style={ getButtonSelected.activity ? style.buttonPagerOn : style.buttonPagerOff }
                    activeOpacity={0.80}
                    onPress={() => {
                            setButtonSelected({['activity']: true, ['friends']: false });
                            setShowActivities(true);
                        }
                    }
                >
                    <Text
                        style={{
                            color: '#f57c00',
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}
                    >
                        Activity
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ getButtonSelected.friends ? style.buttonPagerOn : style.buttonPagerOff }
                    activeOpacity={0.80}
                    onPress={() => {
                            setButtonSelected({['activity']: false, ['friends']: true });
                            setShowActivities(false);
                        }
                    }
                >
                    <Text
                        style={{
                            color: '#f57c00',
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}
                    >
                        Friends
                    </Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flex: 1,
                    paddingTop: 4,
                    paddingHorizontal: 8,
                }}
            >
                {/* depende el estado si esta en Activity o Friends muestro un contenido dentro del view u otro */}
                <View>
                    {
                        //lista de la data rellena los componentes
                        //lista de posteos, armar componente card para los mini posteos
                        showActivities ? <View
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        >
                                            <FlatList 
                                                data={dataScrollableActivities}
                                                renderItem={(item) => CardInfoProfile(item.item)}
                                                keyExtractor={(item) => item.id.toString()}
                                            />
                                        </View> :
                                //lista de amigos, armar card o reutilizar la de posteos para esta vista de profile
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <FlatList 
                                        data={dataScrollableFriends}
                                        renderItem={(item) => CardInfoProfile(item.item)}
                                        keyExtractor={(item) => item.id.toString()}
                                    />
                                </View>
                    }
                </View>
            </View>

        </View>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    buttonPagerOff: {
        height: 40,
        width: 130,
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        marginTop: 16,
    },
    buttonPagerOn: {
        height: 40,
        width: 130,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderWidth: 2,
        borderColor: '#ff8f00',
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        marginTop: 16,
    },
});

