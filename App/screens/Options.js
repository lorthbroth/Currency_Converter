import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import { Entypo } from @expo/vector-icons;

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
  title: {
    color: colors.text,
    fontSize: 16,
  },
  seperator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => alert('todo!')} style={styles.row}>
        <text style={styles.title}>Themes</text>
        <Entypo name="chevron-right" size={20} color={colors.blue} />
      </TouchableOpacity>

      <View style={styles.seperator} />

      <TouchableOpacity onPress={() => alert('todo!')} style={styles.row}>
        <Text style={styles.title}>Dominic React Native App</Text>
        <Entypo name="expor" size={20} color={colors.blue} />
      </TouchableOpacity>

      <View style={styles.seperator} />

      <TouchableOpacity onPress={() => alert('todo!')} style={styles.row}>
        <Text style={styles.title}>Dominic React Native App</Text>
        <Entypo name="expor" size={20} color={colors.blue} />
      </TouchableOpacity>

    </SafeAreaView>
  );
};