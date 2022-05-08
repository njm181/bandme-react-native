/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import {ImageLibraryOptions, launchImageLibrary} from 'react-native-image-picker';


interface Props {
  titleButton: string;
}

export const EditProfileModal = ({titleButton}: Props) => {

const [modalVisible, setModalVisible] = useState(false);//false

const [textSpotify, onChangeTextSpotify] = React.useState('');
const [textInstagram, onChangeTextInstagram] = React.useState('');
const [textYoutube, onChangeTextYoutube] = React.useState('');
const [textDescription, onChangeTextDescription] = React.useState('');
const [profileImage, setProfileImage] = React.useState<string | undefined>('');

let options: ImageLibraryOptions  = {
  maxWidth: 150,
  maxHeight: 250,
  mediaType: 'photo',
  includeBase64: true,
  selectionLimit: 1,
};

async function findPhoto() {
  const result = await launchImageLibrary(options);

  if (result.didCancel) {
    console.log('El usuario cancelo el proceso');
  }

  if (result.errorCode != undefined) {
    console.log('Codigo de error: ' + result.errorCode);
  }

  if (result.errorMessage != '') {
    console.log('Error message only debug purpose: ' + result.errorMessage);
  }

  if (result.assets != undefined){
    console.log('resultado: ' + result.assets[0].base64);
    setProfileImage(result.assets[0].base64);
  } else {
    console.log('result.asset fue undefined');
  }
}

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          onChangeTextSpotify('');
          onChangeTextInstagram('');
          onChangeTextYoutube('');
          onChangeTextDescription('');
        }}
        onDismiss={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={[
                styles.inputContainer,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                },
              ]}
            >
              {
                profileImage != undefined && profileImage != '' ? <Text>Photo uploaded</Text> : <Text>Upload a photo</Text>
              }
              <ButtonPrimary
                title={'upload'}
                height={25}
                width={50}
                fontSize={12}
                clickAction={() => findPhoto()}
              />
            </View>

            <View
              style={styles.inputContainer}
            >
              <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextSpotify}
                    value={textSpotify}
                    placeholder="Ingrese el link del perfil de su Spotify"
                />
            </View>

            <View
              style={styles.inputContainer}
            >
              <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextInstagram}
                    value={textInstagram}
                    placeholder="Ingrese el link del perfil de su Instagram"
                />
            </View>

            <View
              style={styles.inputContainer}
            >
              <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextYoutube}
                    value={textYoutube}
                    placeholder="Ingrese el link del perfil de su YouTube"
                />
            </View>

            <View
              style={styles.inputDescriptionContainer}
            >
              <TextInput
                    style={styles.inputDescription}
                    onChangeText={onChangeTextDescription}
                    value={textDescription}
                    multiline={true}
                    maxLength={200}
                    placeholder="Ingrese una descripcion acerca de usted"
                />
            </View>
            {/* <Text style={styles.modalText}>Ingrese el link de su perfil de la red social que seleccionó</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="https://www.instagram.com/officialphilcollins/"
            /> */}

            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable> */}
            <ButtonPrimary
                title={'Add'}
                width={120}
                height={40}
                fontSize={16}
                clickAction={() => {
                    //guardar datos para enviar al hook
                    console.log(
                      'Datos guardados: ' +
                      textSpotify + ' // ' + textInstagram
                      + ' // ' + textYoutube + ' // ' + textDescription
                    );
                    setModalVisible(!modalVisible);
                }}
            />

          </View>
        </View>
      </Modal>

      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
      <View
        style={{
            alignItems: 'center',
        }}
      >
                {/* {
                    showModalSocialMedia ? <SocialMediaModal/> : null
                } */}

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
            }}
            activeOpacity={0.80}
            onPress={ () => setModalVisible(!modalVisible)}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                }}
            >
                {
                  titleButton == 'Edit' ? 'Edit' :
                    titleButton == 'Follow' ? 'Follow' :
                      'Unfollow'
                }
            </Text>
        </TouchableOpacity>
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

