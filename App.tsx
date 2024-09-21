/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ToastModule from './ToastModule';

function App(): React.JSX.Element {
  const onHandlePress = useCallback(() => {
    ToastModule.show('Hello, Toast!', ToastModule.SHORT);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onHandlePress} style={styles.btn}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  btn: {
    width: '100%',
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'cyan',
    padding: 15,
    borderRadius: 12,
  },
});

export default App;
