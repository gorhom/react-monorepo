/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {useTest} from '@demo/shared';

const App = () => {
  const {value, setValue} = useTest();

  useEffect(() => {
    setValue('Test')
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
        <Text>{value}</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
