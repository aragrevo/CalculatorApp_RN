/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../components/Button';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {options, beforeNumber, currentNumber} = useCalculator();
  return (
    <View style={styles.container}>
      <Text style={styles.beforeText}>{beforeNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {currentNumber}
      </Text>
      {options.map(({buttons}, i) => (
        <View style={styles.row} key={i}>
          {buttons.map(({text, color, weight, action}) => (
            <Button
              text={text}
              action={action}
              color={color}
              weight={weight}
              key={text}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
