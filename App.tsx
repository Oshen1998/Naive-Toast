/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import showCustomBottomSheet from './CustomBottomSheet';
import ToastModule from './ToastModule';

function App(): React.JSX.Element {
  const onHandleBottomSheet = useCallback(() => {
    showCustomBottomSheet();
  }, []);

  const onHandleToast = useCallback(() => {
    ToastModule.show('Hello, Toast!', ToastModule.SHORT);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={onHandleBottomSheet}
        style={[styles.btn, {backgroundColor: 'cyan'}]}>
        <Text>BottomSheet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onHandleToast}
        style={[styles.btn, {backgroundColor: 'lightgreen'}]}>
        <Text>Toast</Text>
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
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
  },
});

export default App;
