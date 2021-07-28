import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Emoji from 'react-native-emoji';

import styles from './styles';

export function UserIdentification(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>
            <Emoji name="seedling" style={{fontSize: 40}} />
            <Emoji name="smile" style={{fontSize: 40}} />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
