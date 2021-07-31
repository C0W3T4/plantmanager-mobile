import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native';

import styles from './styles';

export function Header(){
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');

      setUserName(user || '');
    }

    loadStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image 
        style={styles.image} 
        source={{ uri: "https://avatars.githubusercontent.com/u/69590972?s=200&v=4" }}
      />
    </View>
  );
}
