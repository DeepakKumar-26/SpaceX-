import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

export default function Error() {
const isDark = useColorScheme()==='dark'
const backgroundColor = isDark?'black':'white'
    return (
    <Lottie
      source={require('../assets/error.json')}
      autoPlay
      loop
      style={{backgroundColor: backgroundColor}}
    />
  );
}

const styles = StyleSheet.create({});
