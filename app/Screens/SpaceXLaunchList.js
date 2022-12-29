import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {gql, useQuery} from '@apollo/client';
import ActivityIndicator from '../components/ActivityIndicator';
import {GET_LISTS} from '../api/Apis';
import Error from '../components/Error';

export default function SpaceXLaunchList({navigation}) {
  const {loading, error, data} = useQuery(GET_LISTS);
  const isDarkMode = useColorScheme() === 'dark';

  const container = isDarkMode ? 'black' : 'white';
  const listItem = isDarkMode ? '#232323' : 'grey';
  const containerImage = isDarkMode ? '#8E8E8E' : 'white';

  const handlePressListItem = item => {
    navigation.navigate('LaunchDetails', {item});
  };

  if (loading) return <ActivityIndicator />;
  if (error) return <Error />;

  return (
    <View style={[styles.container, {backgroundColor: container}]}>
      <FlatList
        initialNumToRender={15}
        data={data.launches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => handlePressListItem(item)}
            style={[styles.listItem, {backgroundColor: listItem}]}>
            <View
              style={[
                styles.containerImage,
                {backgroundColor: containerImage},
              ]}>
              <Image
                source={{uri: item.links.mission_patch}}
                style={{height: 50, aspectRatio: 1}}
              />
            </View>

            <Text numberOfLines={1} style={styles.text}>
              {item.mission_name}
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={<View style={{height: 2}}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 5},
  containerImage: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 10,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#628E90',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
  },
});
