import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useCounter} from '@demo/shared';

const Button = ({text = '', onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const {counter, increment, decrement} = useCounter();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.title}>
            React<Text style={styles.subtitle}>Monorepo</Text>
          </Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>{counter}</Text>
          </View>
          <Button onPress={increment} text={'increment'} />
          <Button onPress={decrement} text={'decrement'} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '400',
    color: '#fff',
  },
  subtitle: {
    fontWeight: '600',
    color: '#61dafb',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 64,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#444',
    padding: 12,
    margin: 6,
    minWidth: 200,
    borderRadius: 23,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
});

export default App;
