import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import RepositoryItem from '../components/RepositoryItem';

const FavoritesScreen = ({ navigation }) => {
  const favoriteRepos = useSelector((state) => state.favorites.items);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {favoriteRepos.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>No favorite repositories added.</Text>
      ) : (
        <FlatList
          data={favoriteRepos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RepositoryItem repo={item} navigation={navigation} />}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
