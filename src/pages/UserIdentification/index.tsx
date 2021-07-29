import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import Emoji from 'react-native-emoji';

import { Button } from '../../components/Button';

import colors from '../../styles/colors';
import styles from './styles';

export function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

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
      <KeyboardAvoidingView 
        style={styles.container}
      >
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
              <Button /> 
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
