/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import { Post } from '../molecules/Post';

export const ListPost = () => {

  const DATA = [
          {
            id: '1',
            owner: 'Nicolas Javier',
            location: 'Buenos Aires, Argentina',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            like: false,
          },
          {
            id: '2',
            owner: 'Mariano Ezequiel',
            location: 'Buenos Aires, Argentina',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            like: true,
          },
          {
            id: '3',
            owner: 'Pablo Martin',
            location: 'Buenos Aires, Argentina',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            like: false,
          },
          {
            id: '4',
            owner: 'Matias Fernando',
            location: 'Buenos Aires, Argentina',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            like: true,
          },
          {
            id: '5',
            owner: 'Julian Jonatan',
            location: 'Buenos Aires, Argentina',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            like: false,
          },
          {
            id: '6',
            owner: 'Nestor Osvaldo',
            location: 'Buenos Aires, Argentina',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            like: true,
          },
      ];


  return (
    <View style={{flex: 1}}>
        <FlatList
        data={DATA}
        renderItem={ ({item}: any) => <Post publication= {item}/> }
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator = {false}
        pagingEnabled={true}
    />
    </View>
  );
};

/* const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  }); */
