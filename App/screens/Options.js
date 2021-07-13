import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Entypo } from @expo/vector-icons;
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
         <RowItem
         title="themes"
            onPress={() => alert('todo!')} 
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
        /> 

      <RowSeparator />

      <RowItem
        title="Dominic app"
        onPress={() => alert('todo!')}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        title="Dominic app example"
        onPress={() => alert('todo!')}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />
      </ScrollView>
    </SafeAreaView>
  );
};