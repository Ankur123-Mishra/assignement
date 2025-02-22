import React, { useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositories } from '../redux/slices/repoSlice';
import SearchBar from '../components/SearchBar';
import RepositoryItem from '../components/RepositoryItem';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.repositories);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) dispatch(searchRepositories(query));
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {status === 'loading' && <ActivityIndicator size="large" color="#007bff" />}
      {error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RepositoryItem repo={item} navigation={navigation} />}
        ListEmptyComponent={() =>
          status !== 'loading' && <Text style={{ textAlign: 'center', marginTop: 20 }}>No repositories found.</Text>
        }
      />
    </View>
  );
};

export default HomeScreen;
