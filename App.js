import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './components/headers';
import SearchBar from './components/searchBar';
import Categories from './components/categories';
import OngoingTasks from './components/ongoingTasks';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <Categories />
      <OngoingTasks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
  },
});