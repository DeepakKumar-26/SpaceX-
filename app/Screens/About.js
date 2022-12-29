import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';

export default function About() {
  const isDarkMode = useColorScheme() === 'dark';
  const container={
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
  const card = {backgroundColor: isDarkMode ? '#444444' : 'white'};
  const text = {color: isDarkMode ? 'white' : 'black'};


  return (
    <View style={[styles.container, container]}>
      {/* <View style={[styles.card,]}> */}
      <Image
        source={require('../assets/headerBg.png')}
        style={{width: '100%', height: 200, borderRadius: 10}}
      />
      {/* </View> */}
      <View style={[styles.card, card]}>
        <Text style={[styles.text, text]}>
          This app is created using React Native CLI, This app displays a list
          of SpaceX launches and some information about mission. This app makes
          a GraphQL query to the SpaceX API (found at
          https://api.spacex.land/graphql/) to fetch the list of launches and
          display them in a scrollable list. This app is also adaptive to device ColorScheme.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 2.5,
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  text: {},
});
