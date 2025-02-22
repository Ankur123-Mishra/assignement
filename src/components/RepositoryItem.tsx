import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slices/favoritesSlice';

const RepositoryItem = ({ repo, navigation }:{repo:any,navigation:any}) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorites.items.some((item) => item.id === repo.id));

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(repo));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('RepoDetails', { repo })}>
      <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
      <View style={styles.details}>
        <Text style={styles.name}>{repo.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {repo.description || 'No description available'}
        </Text>
        <View style={styles.stats}>
          <Text style={styles.stat}>⭐ {repo.stargazers_count}</Text>
          <Text style={styles.stat}>🍴 {repo.forks_count}</Text>
          <Text style={styles.stat}>💻 {repo.language || 'Unknown'}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleToggleFavorite} style={styles.favoriteButton}>
        <Text style={{ fontSize: 20 }}>{isFavorite ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  stats: {
    flexDirection: 'row',
    marginTop: 5,
  },
  stat: {
    marginRight: 10,
    fontSize: 14,
    color: '#444',
  },
  favoriteButton: {
    padding: 10,
  },
});

export default RepositoryItem;
