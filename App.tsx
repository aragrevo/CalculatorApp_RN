import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/screens/Calculator';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.backGround}>
      <StatusBar backgroundColor="black" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
