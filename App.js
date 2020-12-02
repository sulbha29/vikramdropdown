
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {AppTabNavigator} from './components/apptabnavigator'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import Loginscreen from './Screens/Login'
export default function App() {
  return (
    <View style={styles.container}>
      <Appcontainer/>
      
      </View>
  );
}
const switchnavigator = createSwitchNavigator({loginscreen:{screen:Loginscreen},BottomTab:{screen:AppTabNavigator}})
const Appcontainer = createAppContainer(switchnavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
