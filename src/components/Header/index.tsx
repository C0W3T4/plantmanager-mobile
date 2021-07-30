import React from 'react';
import { Text, Image, View } from 'react-native';

import styles from './styles';

export function Header(){
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.userName}>Cometa</Text>
      </View>

      <Image 
        style={styles.image} 
        source={{ uri: "https://avatars.githubusercontent.com/u/69590972?s=200&v=4" }}
      />
    </View>
  );
}
