import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';

import wateringImg from '../../assets/watering.png';
import styles from './styles';

export function Welcome(){
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Manage {'\n'}
          your plants {'\n'}
          easily
        </Text>

        <Image 
          source={wateringImg} 
          style={styles.image}
          resizeMode='contain' 
        />

        <Text style={styles.subtitle}>
          Don't forget to water your plants anymore.
          We take care to remind you whenever you need it.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
