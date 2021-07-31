import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  TextInput, 
  View, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Alert 
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Emoji from 'react-native-emoji';

import { Button } from '../../components/Button';

import colors from '../../styles/colors';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  async function handleSubmit() {
    if(!name)
      return Alert.alert("Why don't you tell me your name? 😢");

    await AsyncStorage.setItem('@plantmanager:user', name);
    
    navigation.navigate('Confirmation');
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  <Emoji name="seedling" /> {'\n\n'}
                  { isFilled ? '😄' : '😃' }
                </Text>

                <Text style={styles.title}>
                  How can we {'\n'}
                  call you?
                </Text>
              </View>

              <TextInput 
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green }
                ]} 
                placeholder="Type your name" 
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View style={styles.footer}>
                <Button title="Confirm" onPress={handleSubmit} /> 
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
