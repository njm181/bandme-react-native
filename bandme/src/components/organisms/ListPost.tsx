/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { Post } from '../molecules/Post';

interface Props {
  onNavigate: { goToProfile: () => void; goToCreatePost: () => void; goToNotificationCenter: () => void; goToPublicationDetail: () => void; };
}

export const ListPost = ({ onNavigate }: Props) => {

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

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
        <FlatList
          style={{
            height: '100%',
          }}
          data={DATA}
          renderItem={ ({item}: any) => <Post publication={item} onNavigate={onNavigate}/> }
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator = {false}
          pagingEnabled={true}
          refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#ff8f00']}
            />
          }
        />
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

