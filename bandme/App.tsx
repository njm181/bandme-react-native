import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
};
export default App;

