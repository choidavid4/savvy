import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet
} from 'react-native';
import MenuTabs from './src/router/MenuTabs';
import { MainContext } from './src/contexts/MainContext';

function App() {
  const [context, setContext] = useState({
    balance: 0,
  });

  return (
    <NavigationContainer>
      {/* <MainContext.Provider value={{context, setContext}}> */}
        <MenuTabs/>
      {/* </MainContext.Provider> */}
    </NavigationContainer> 
  ); 
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
