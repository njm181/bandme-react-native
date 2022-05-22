/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import { CommonActions, StackActions, useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { BackHandler, Button, Modal, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonPrimary } from '../../components/atoms/ButtonPrimary';
import { QuestionModal } from '../../components/molecules/QuestionModal';
import { CreatePublicationForm } from '../../components/organisms/CreatePublicationForm';
import { RootStackParams } from '../../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'CreateEditPublicationScreen'> {}

export const CreateEditPublicationScreen = ({navigation, route}: Props) => {

    const edit = false;
    const [modalVisible, setModalVisible] = useState(false);

    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          // Do Whatever you want to do on back button click
          // Return true to stop default back navigaton
          // Return false to keep default back navigaton
          console.log('ir para atras return true');
          let result = false;
          if (edit) {
            setModalVisible(true);
          } else {
            result = false;
          }
          return result;
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
    <View style={{flex: 1}}>
      <CreatePublicationForm
      onNavigateToBack={ navigation.goBack }
      route={ route }
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
                    Are you sure you want to cancel editing the post?
                </Text>

                <View
                  style={{flexDirection:  'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', marginTop: 8}}
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
                        navigation.goBack();
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
});
