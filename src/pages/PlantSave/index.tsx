import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';

import waterDrop from '../../assets/waterdrop.png';

import styles from './styles';

interface Params {
  plant: {
    id: number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    }
  }
}

export function PlantSave(){
  const route = useRoute();

  const { plant } = route.params as Params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri 
          uri={plant.photo}
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          {plant.name}
        </Text>

        <Text style={styles.plantAbout}>
          {plant.about}
        </Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image 
            source={waterDrop} 
            style={styles.tipImage} 
          />

          <Text style={styles.tipText}>
            {plant.water_tips}
          </Text>
        </View>
        <Text style={styles.alertLabel}>
          Choose the best time to be remembered!
        </Text>

        <Button 
          title="Register plant"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}
