import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';

import LaunchDetailsScreen from './app/Screens/LaunchDetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './app/Navigators/DrawerNavigator';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();
export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const headerBackground = isDarkMode ? 'black' : '#DBD8E3';
  const headerTintColor = isDarkMode ? 'lightgrey' : 'grey';
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: headerTintColor,
            headerStyle: {backgroundColor: headerBackground},
          }}>
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="LaunchDetails" component={LaunchDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({});
