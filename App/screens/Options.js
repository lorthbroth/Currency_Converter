import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert } from 'react-native';
import { Entypo } from @expo/vector-icons;
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';


const openLink = (url) =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong', 'Please try again later.')
  );

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
        title="My linkedIn profile"
            onPress={() => openLink(
          'https://www.linkedin.com/in/dominic-kgoete-0211318a/'
        )}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        title="My Github page"
            onPress={() => openLink(
              'https://github.com/lorthbroth'
            )
            }
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />
      </ScrollView>
    </SafeAreaView>
  );
};