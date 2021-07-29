import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Button } from '../../components/Button';

import styles from './styles';

export function Confirmation(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😄
        </Text>

        <Text style={styles.title}>
          All set!
        </Text>

        <Text style={styles.subtitle}>
          Now let's start taking care of your little plants with a lot of love
        </Text>

        <View style={styles.footer}>
          <Button title="Get started" /> 
        </View>
      </View>
    </SafeAreaView>
  );
}