/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { Modal, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { useUserSingUpEvent } from '../../hooks/useUserSingUpEvent';
import { ButtonPrimary } from '../atoms/ButtonPrimary';

export const EnrollButtonModal = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const { signupEvent, userSignUp } = useUserSingUpEvent();

    return (
        <View style={styles.centeredView}>
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
                style={{
                  fontSize: 16,
                }}
              >
                {
                  userSignUp ? 'Are you sure you want to decline this event?' : 'Do you want to enroll?'
                }
              </Text>
              <View
                  style={{flexDirection:  'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', marginTop: 12}}
                >
                <ButtonPrimary
                    title={'Yes'}
                    width={70}
                    height={40}
                    fontSize={14}
                    clickAction={() => {
                        console.log('cleeeeck yes');
                        if (userSignUp){
                          //pegarle al servicio para declinar invitacion
                          console.log('pegarle al servicio para declinar invitacion');
                        } else {
                          console.log('pegarle al servicio para anotarse al evento');
                        }
                        //pegarle al servicio para declinar la invitacion al evento
                        setModalVisible(!modalVisible);
                  }}
                />

                <ButtonPrimary
                    title={'No'}
                    width={70}
                    height={40}
                    fontSize={14}
                    clickAction={() => {
                        console.log(
                          'cleeeeck no'
                        );
                        setModalVisible(!modalVisible);
                  }}
                />
                </View>
              </View>
            </View>
          </Modal>

          <View
            style={{alignItems: 'center'}}
          >
            <View style = { styles.roundedButton }>
                <ButtonPrimary
                    title = { userSignUp ? 'Enrolled' : 'Enroll' }
                    color = { userSignUp ? '#66bb6a' : undefined  }
                    fontSize = {12}
                    height={40}
                    width={90}
                    clickAction={() => {
                      if (userSignUp) {
                        console.log('declinar el evento');
                        setModalVisible(!modalVisible);
                      } else {
                        console.log('Anotarse al evento');
                        setModalVisible(!modalVisible);
                      }
                        //console.log('usuario inscripto al evento?: ' + signupEvent('1', '1'));
                        //publicationDetail
                    }
                }
                />
            </View>

            </View>
        </View>
      );
    };

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#FAFAFA',
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
    roundedButton: {
        marginHorizontal: 4,
    },
});
