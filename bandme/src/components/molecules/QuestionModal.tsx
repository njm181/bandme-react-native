/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { Button, Modal, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props{
  isVisible: boolean;
  goBack: () => void;
}

export const QuestionModal = ( {isVisible = false, goBack}: Props ) => {

    const [modalVisible, setModalVisible] = useState(isVisible);//false

    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            /* onChangeTextSpotify('');
            onChangeTextInstagram('');
            onChangeTextYoutube('');
            onChangeTextDescription(''); */
          }}
          onDismiss={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

                <Text>
                    {/* Content of the modal */}
                    Holaaaa
                </Text>

                <Button
                  title="Holis"
                  onPress={() => {
                    console.log('clickkkkkkk');
                    setModalVisible(!modalVisible);
                    goBack();
                  }}
                />

            </View>
          </View>
        </Modal>
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: 100,
      backgroundColor: '#ff8f00',
    },
    buttonOpen: {
      backgroundColor: '#000',
      height: 50,
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        padding: 10,
      },
      inputContainer: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal: 5,
      },
      inputDescription: {
        width: '100%',
        height: 100,
        padding: 10,
        textAlignVertical: 'top',
      },
      inputDescriptionContainer: {
        width: '100%',
        height: 100,
        margin: 12,
        borderWidth: 1,
      }
  });

