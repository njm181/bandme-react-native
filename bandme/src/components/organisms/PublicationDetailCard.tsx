/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Publication } from '../../interfaces/Publication';
import { ButtonIconProfile } from '../atoms/ButtonIconProfile';
import { TextTitle } from '../atoms/TextTitle';
import { DetailsButtons } from './DetailsButtons';

interface Props{
    onNavigateGoToProfile: () => void;
    publication: Publication;
}

export const PublicationDetailCard = ({onNavigateGoToProfile, publication}: Props) => {
  return (
          
    <View style={ styles.mainContainer }>

        <ScrollView>
            
                <View style={{backgroundColor: 'pink', alignSelf: 'flex-start', marginVertical: 16}}>
                    <TextTitle
                        title={'Titulo de la publicacion'}
                        size={25}
                        colour={'black'}/>
                </View>              

                <View style={{backgroundColor: 'yellow', alignSelf: 'flex-start'}}>

                    <View style={ styles.dateContainer }>
                        <Icon
                            style={{ marginEnd: 4 }}
                            name="time-outline"
                            size={15}
                        />
                        <TextTitle
                            title={'12 January 2022 | 12:00am'}
                            size={15}
                            colour={'#e0e0e0'}/>
                    </View>

                    <View style={ styles.dateContainer }>
                        <Icon
                            name="location-outline"
                            style={{ marginEnd: 4 }}
                            size={15}
                        />
                        <TextTitle
                            title={'Beiro 3033, Villa Devoto, CABA'}
                            size={15}
                            colour={'#e0e0e0'}/>
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#e0e0e0',
                            borderBottomWidth: 1,
                            marginVertical: 16,
                        }}
                    />

                    <View style={{ alignSelf: 'flex-start', marginVertical: 8 }}>
                        <TextTitle
                            title={'Description'}
                            size={20}
                            colour={'black'}
                        />
                    </View>
                    
                    <TextTitle
                        title={'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description '}
                        size={14}
                        colour={'black'}
                    />
                </View>

                <View style={{ alignSelf: 'flex-start', marginTop: 16 }}>
                        <TextTitle
                            title={'Owners'}
                            size={18}
                            colour={'black'}
                        />
                    </View>

                <View style={{ borderColor: 'green', flexDirection: 'row', marginTop: 4}}>
                    {/* aca habria una flat list para mostrar a los integrantes autores del evento */}
                    <ButtonIconProfile
                        isProfileImage={true}
                        imageSource={'https://reactnative.dev/img/tiny_logo.png'} // aca recibe imagen del usuario y si no vacio
                        onPressAction={ () =>  onNavigateGoToProfile()} //onNavigate.goToCreatePost()
                    />
                    <ButtonIconProfile
                        isProfileImage={true}
                        imageSource={'https://reactnative.dev/img/tiny_logo.png'} // aca recibe imagen del usuario y si no vacio
                        onPressAction={ () =>  onNavigateGoToProfile()} //onNavigate.goToCreatePost()
                    />
                    <ButtonIconProfile
                        isProfileImage={true}
                        imageSource={'https://reactnative.dev/img/tiny_logo.png'} // aca recibe imagen del usuario y si no vacio
                        onPressAction={ () =>  onNavigateGoToProfile()} //onNavigate.goToCreatePost()
                    />
                </View>

                

        </ScrollView>
        <View style={{
            marginTop: 32,
        }}>
            <DetailsButtons
                publicationUrl="www.bandme.com/posteo123" //publication.url
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fafafa',
        margin: 16,
        height: '70%',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    dateContainer: {
        flexDirection: 'row',
        marginVertical: 4,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
});

