import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={20} color="gray" style={styles.icon} />
      <TextInput style={styles.input} placeholder="Search" />
      <Feather name="filter" size={20} color="gray" style={styles.icon} />
    </View>
  );
}; 

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 20,
    backgroundColor: '#fff',
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;