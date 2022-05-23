/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import { useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { BackHandler, Modal, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonPrimary } from '../../components/atoms/ButtonPrimary';
import { ListPost } from '../../components/organisms/ListPost';
import { useDashboardNavigationOptions } from '../../hooks/useDashboardNavigationOptions';
import { RootStackParams } from '../../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'DashboardScreen'> {}

export const DashboardScreen = ({navigation}: Props) => {

    //use effect para cargar los posteos la primera vez
    const wait = (timeout: number) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);

    const [modalVisible, setModalVisible] = useState(false);
//  PROHIBIR HACER BACK, SI HACE BACK QUE MANDE AL WELCOME Y CIERRE LA SESION O QUE PREGUNTE SI DESEA SALIR DE LA APP
    const { onDashboardNavigationOptions } = useDashboardNavigationOptions(navigation);
    {/* cuando ya tenga todos los datos del usuario
            ahi voy a poder guardalos en un context, o sea usar redux
            de forma global para abastecer el resto de los flujos
            en login no amerita usarlo ya que no hay persistencia de datos en ese flujo
            mas que pasaje de parametros de una vista a la otra de forma directa */}

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
            // Do Whatever you want to do on back button click
            // Return true to stop default back navigaton
            // Return false to keep default back navigaton
            console.log('ir para atras return true');
            //let result = false;
            //if (edit) {
            setModalVisible(true);
            //} else {
            //    result = false;
            //}
            return true;
            };

            BackHandler.addEventListener(
            'hardwareBackPress', onBackPress
            );

            return () =>
            BackHandler.removeEventListener(
                'hardwareBackPress', onBackPress
            );
        }, [])
        );


    return (
        <SafeAreaView
            style={{flex: 1, paddingHorizontal: 16}}
        >
            {/* <Header
                onNavigate={ onDashboardNavigationOptions }
            /> */}
           {/*  <ScrollView
                style={{backgroundColor: 'red'}}
            >
                <View>
                    <ScrollView 
                        style={{backgroundColor: 'blue'}}
                        horizontal={true}
                        contentContainerStyle={{width: '100%'}}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={['#ff8f00']}
                            />
                }
                    >
                        <View
                            style={{width: '100%'}}
                        >
                            <ListPost
                                onNavigate={ onDashboardNavigationOptions }
                            />
                        </View>
                    </ScrollView>
                </View>
            </ScrollView> */}
            <ListPost
                onNavigate={ onDashboardNavigationOptions }
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                onDismiss={() => setModalVisible(!modalVisible)}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Text
                        style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}
                        >
                            {/* Content of the modal */}
                            Are you sure you want to close the app?
                        </Text>

                        <View
                        style={{flexDirection:  'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', marginTop: 18}}
                        >
                        <ButtonPrimary
                            title={'Yes'}
                            width={70}
                            height={40}
                            fontSize={14}
                            clickAction={() => {
                                console.log(
                                'cleeeeck'
                                );
                                setModalVisible(!modalVisible);
                                //navigation.goBack();
                                BackHandler.exitApp();
                        }}
                        />

                        <ButtonPrimary
                            title={'No'}
                            width={70}
                            height={40}
                            fontSize={14}
                            clickAction={() => {
                                console.log(
                                'cleeeeck'
                                );
                                setModalVisible(!modalVisible);
                        }}
                        />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 16,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });



// Realm DB https://docs.mongodb.com/realm/sdk/react-native/
// o lo guardo en cache https://www.npmjs.com/package/react-native-cache
//o usar firebase real time database
//o Context API de React Native
//todo esto en dashboard para cuando obtenga todos los datos del usuario
