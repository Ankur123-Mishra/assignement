import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Linking } from 'react-native';

const RepoDetail = ({ route }) => {
  const { repo } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ownerSection}>
        <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
        <Text style={styles.ownerName}>{repo.owner.login}</Text>
      </View>

    
      <Text style={styles.repoName}>{repo.name}</Text>
      {repo.description && <Text style={styles.description}>{repo.description}</Text>}

      <View style={styles.stats}>
        <Text style={styles.stat}>⭐ Stars: {repo.stargazers_count}</Text>
        <Text style={styles.stat}>🍴 Forks: {repo.forks_count}</Text>
        <Text style={styles.stat}>💻 Language: {repo.language || 'Unknown'}</Text>
      </View>

     
      <Text style={styles.link} onPress={() => Linking.openURL(repo.html_url)}>
        🔗 Open in GitHub
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  ownerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  ownerName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  repoName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  stats: {
    marginBottom: 15,
  },
  stat: {
    fontSize: 14,
    color: '#444',
  },
  link: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RepoDetail;
