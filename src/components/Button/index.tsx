import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

export function Button(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      </View>
    </SafeAreaView>
  );
}
