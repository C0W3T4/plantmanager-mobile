import React from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Emoji from 'react-native-emoji';

import styles from './styles';

export function UserIdentification(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>
            <Emoji name="seedling" />
            <Emoji name="smile" />
          </Text>

          <Text style={styles.title}>
            How can we {'\n'}
            call you?
          </Text>

          <TextInput style={styles.input} />
        </View>
      </View>
    </SafeAreaView>
  );
}
