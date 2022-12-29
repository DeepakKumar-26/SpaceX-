import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SpaceXLaunchList from '../Screens/SpaceXLaunchList';
import Contact from '../Screens/Contact';
import About from '../Screens/About';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  const isDarkMode = useColorScheme() === 'dark';
  const headerBackground = isDarkMode ? 'black' : '#DBD8E3';
  const headerTintColor = isDarkMode ? 'lightgrey' : 'grey';

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: headerTintColor,
        headerStyle: {backgroundColor: headerBackground},
      }}>
      <Drawer.Screen
        name="SpaceXLaunchList"
        component={SpaceXLaunchList}
        options={{
          title: 'SpaceX Launches',
          drawerIcon: (props) => (
            <Icon name="rocket-launch" {...props}/>
          ),
        }}
      />
      <Drawer.Screen name="About" component={About}  options={{
          drawerIcon: (props) => (
            <Icon name="information" {...props}/>
          ),
        }} />
      <Drawer.Screen name="Contact" component={Contact}  options={{
          drawerIcon: (props) => (
            <Icon name="account" {...props}/>
          ),
        }} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
