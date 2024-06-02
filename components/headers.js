import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.greeting}>
        <Text style={styles.greetingTitle}>Hello, Devs</Text>
        <Text style={styles.greetingSubtitle}>14 tasks today</Text>
      </View>
      <Image source={require('../assets/profile.png')} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    flexDirection: 'column',
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  greetingSubtitle: {
    color: 'gray',
  },
});

export default Header;