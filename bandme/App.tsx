import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
      {/* <DrawerNavigator /> */}
      {/* <BottomNavigator /> */}
    </NavigationContainer>
  );
};
export default App;

