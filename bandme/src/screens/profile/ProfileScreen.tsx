/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import { IndicatorViewPager, PagerDotIndicator, PagerTabIndicator, PagerTitleIndicator } from '@shankarmorwal/rn-viewpager';
import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { CardInfoProfile } from '../../components/molecules/CardInfoProfile';


export const ProfileScreen = () => {

    /* const renderTitlteIndicator = () => {
        return <PagerTitleIndicator
            style={styles.indicatorContainer}
            itemTextStyle={styles.indicatorText}
            selectedItemTextStyle={styles.indicatorSelectedText}
            titles={['Activity', 'Friends']}
         />;
    }; */

  return (
    <SafeAreaView
        style={{flex: 1}}
    >
        <View
            style={{
                backgroundColor: 'yellow',
                alignItems: 'center',
                height: '50%',
                marginBottom: 16,
            }}
        >
            <View
                style={{
                    width: '100%',
                    height: '90%',
                    alignItems: 'center',
                    backgroundColor:'orange',
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
                        activeOpacity={0.80}
                    >
                        <Image
                        source={require('../../assets/spotify.png')}
                        style={{width: 50, height: 50, marginHorizontal: 8}}
                    />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.80}
                    >
                        <Image
                        source={require('../../assets/instagram.png')}
                        style={{width: 50, height: 50, marginHorizontal: 8}}
                    />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.80}
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
                    backgroundColor: 'blue',
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: 0,
            }}
        >
                <Text
                    style={{
                        fontSize: 20,
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
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}
                >
                    Follow
                </Text>
            </TouchableOpacity>

        </View>

        {/* prender y apagar el style del boton segun estado seleccionado y en base al estado seleccionado mostrar un contenido u otro */}
        <View
            style={{
                flex: 1,
                backgroundColor: '#e0e0e0',
            }}
        >
            <View
                style={{
                    backgroundColor: 'green',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <TouchableOpacity
                    style={ true ? style.buttonPagerOn : style.buttonPagerOff }
                    activeOpacity={0.80}
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
                    style={ false ? style.buttonPagerOn : style.buttonPagerOff }
                    activeOpacity={0.80}
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
                        true ? <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <FlatList 
                                        data={undefined}
                                        renderItem={undefined}
                                        keyExtractor={ item => item.id }
                                    />

                                    <ScrollView>
                                        <CardInfoProfile/>
                                        <CardInfoProfile/>
                                        <CardInfoProfile/>
                                        <CardInfoProfile/>
                                        <CardInfoProfile/>
                                    </ScrollView>
                                </View> :
                                //lista de amigos, armar card o reutilizar la de posteos para esta vista de profile
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'blue',
                                    }}
                                />
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
        backgroundColor: '#ffe0b2',
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

{/* <IndicatorViewPager
                indicator={renderTitlteIndicator()}
                style={{flex: 1}}
                pagerStyle={{marginTop: 50}}
            >
                <View
                    style={{
                        backgroundColor:'gray',
                        }}>
                    <Text>Content page one</Text>
                </View>

                <View
                    style={{
                        backgroundColor:'cornflowerblue'
                        }}>
                    <Text>Content page two</Text>
                </View>
            </IndicatorViewPager> */}

/* const styles = StyleSheet.create({
    indicatorContainer: {
        height: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    indicatorText: {color: 'black'},
    indicatorSelectedText: {
        color: 'orange',
    },
}); */
