import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
});

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => alert('todo!')} style={styles.row}>
        <text style={styles.title}>Themes</text>
      </TouchableOpacity>

      <View style={styles.seperator} />

      <TouchableOpacity onPress={() => alert('todo!')} style={styles.row}>
        <Text style={styles.title}>Dominic React Native App</Text>
      </TouchableOpacity>

      <View style={styles.seperator} />

      <TouchableOpacity onPress={() => alert('todo!')} style={styles.row}>
        <Text style={styles.title}>Dominic React Native App</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};