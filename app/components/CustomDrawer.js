import {
  Image,
  ImageBackground,
  Share,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomDrawer(props) {
  const isDarkMode = useColorScheme() === 'dark';

  const containerHeader = isDarkMode ? 'black' : 'grey';
  const scrollContainer = isDarkMode ? '#D1D4C9' : 'lightgrey';

  const handleShareApp = async () => {
    const appLink = 'https://drive.google.com/drive/folders/1FJWY_zfo9FOe1T2ZMpFINIRKQRhaN0SK?usp=share_link';
    await Share.share({
      message: `Click the link to download the app ${appLink}`,
    });
  };

  return (
    <DrawerContentScrollView
      {...props}
      style={{backgroundColor: scrollContainer}}>
      <View
        style={[styles.containerHeader, {backgroundColor: containerHeader}]}>
        <Image
          source={require('../assets/hbg.png')}
          style={{height: 100, width: 100, borderRadius: 100}}
        />
        <Text style={{fontSize: 20}}>SpaceX</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        onPress={handleShareApp}
        label="Share"
        icon={props => <Icon name="share" {...props} />}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    height: 200,
    marginTop: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
