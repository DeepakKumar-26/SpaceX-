import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Contact() {

  const isDarkMode = useColorScheme() === 'dark';
  const container={
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
  const card = {backgroundColor: isDarkMode ? '#444444' : 'white'};
  const text = {color: isDarkMode ? 'white' : 'black'};

  
  const socialLinks = [
    {
      id: 1,
      iconimage:
        'https://cdn.pixabay.com/photo/2016/11/17/16/06/icons-1831927_960_720.png',
      link: 'tel:+919131884866',
    },
    {
      id: 2,
      iconimage:
        'https://cdn.wccftech.com/wp-content/uploads/2020/09/Gmail-740x416.png',
      link: 'mailto: deepak.dakshana17@gmail.com',
    },
    {
      id: 3,
      iconimage:
        'https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png',
      link: 'https://linkedin.com/in/deepak-kumar-655912204/',
    },
    {
      id: 4,
      iconimage:
        'https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_960_720.png',
      link: 'https://github.com/DeepakKumar-26',
    },
    {
      id: 5,
      iconimage:
        'https://sites.google.com/site/bollingertechlab/_/rsrc/1468756678701/home/drive.jpeg?height=200&width=200',
      link: 'https://drive.google.com/drive/folders/15KYz0mHaxby4yYbFr7nfJH20YsjgBhOn?usp=sharing',
    },
  ];

  const handlePress = async url => {
    await Linking.openURL(url);
  };

  return (
    <View style={[styles.container,container]}>
      <ImageBackground
        source={require('../assets/headerBg.png')}
        style={styles.imageBackground}>
        <Image
          source={require('../assets/deepak.jpg')}
          resizeMode="contain"
          style={styles.profileImage}
        />
      </ImageBackground>

      <View style={[styles.card,card]}>
        <Text style={[styles.text,text]}>Name : Deepak Kumar</Text>
        <Text style={[styles.text,text]}>Mobile : 9131884866</Text>
        <Text style={[styles.text,text]}>Email : deepak.dakshana17@gmail.com</Text>
        <View style={{flexDirection: 'row',marginVertical:10, justifyContent: 'space-evenly'}}>
          <FlatList
          numColumns={5}
            data={socialLinks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handlePress(item.link)}
                style={styles.containerSocialIcon}>
                <Image
                  source={{uri: item.iconimage}}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical:5,
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  container: {
    padding: 10,
    flex:1
  },
  containerSocialIcon: {
    backgroundColor: 'lightgrey',
    height: 60,
    aspectRatio: 1,
    padding: 5,
    borderRadius: 10,
    margin: 5,
    elevation:3
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    height: 140,
    aspectRatio: 1,
    borderRadius: 100,
    margin: 20,
    left: 50,
  },
  socialIcon: {
    borderRadius: 100,
    flex: 1,
    aspectRatio: 1,
  },text:{

  }
});
