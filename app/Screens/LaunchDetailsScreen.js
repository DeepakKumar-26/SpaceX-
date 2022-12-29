import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  ScrollView,
  useColorScheme,
} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

export default function LaunchDetailsScreen({navigation, route}) {
  const {item} = route.params;

  const isDarkMode = useColorScheme() === 'dark';

  const container = isDarkMode ? 'black' : '#d3d3d3';
  const card = isDarkMode ? '#353941' : 'white';
  const text = isDarkMode ? 'white' : 'black';

  return (
    <View style={[styles.container, {backgroundColor: container}]}>
      <ScrollView contentContainerStyle={{}}>
        {/* Images */}
        {item.links.flickr_images.length > 0 ? (
          <FlatList
            horizontal
            contentContainerStyle={styles.flatlistContainer}
            data={item.links.flickr_images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View
                source={require('../assets/as.png')}
                style={{
                  width: width - 20,
                  padding: 5,
                }}>
                <Image
                  resizeMode="contain"
                  source={{uri: item}}
                  style={{flex: 1, width: '100%', borderRadius: 10}}
                />
              </View>
            )}
          />
        ) : null}

        {/* Mission name and year */}
        <View style={{padding: 10}}>
          <View style={[styles.card, {backgroundColor: card}]}>
            <Text style={[styles.text, {color: text}]}>
              Mission name : {item.mission_name}
            </Text>
            <Text style={[styles.text, {color: text}]}>
              Launch year : {item.launch_year}
            </Text>
            <Text style={[styles.text, {color: text}]}>
              Rocket name : {item.rocket.rocket_name}
            </Text>
            <Text style={[styles.text, {color: text}]}>
              Rocket type : {item.rocket.rocket_type}
            </Text>
          </View>

          {/* Mission details */}
          {item.details ? (
            <View style={[styles.card, {backgroundColor: card}]}>
              <Text style={[styles.text, {color: text}]}>Details :</Text>
              <Text style={[styles.text, {color: text}]}>{item.details}</Text>
            </View>
          ) : null}

          {/* Rocket details */}
          {item.rocket.rocket.description ? (
            <View style={[styles.card, {backgroundColor: card}]}>
              <Text style={[styles.text, {color: text}]}>
                Rocket description :
              </Text>
              <Text style={[styles.text, {color: text}]}>
                {item.rocket.rocket.description}
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 2.5,
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  flatlistContainer: {
    height: 250,
    flexDirection: 'row',
    padding: 5,
    paddingBottom: 0,
  },
  text: {
    textAlign: 'justify',
  },
});
