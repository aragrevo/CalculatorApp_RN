/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {option} from '../helpers/options';

// interface Props {
//   text: string;
//   color?: string | undefined;
//   weight?: boolean | undefined;
//   action: (textNumber: string) => void;
// }

export const Button = ({
  text,
  color = '#2D2D2D',
  weight = false,
  action,
}: option) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.btn,
          backgroundColor: color,
          width: weight ? 150 : 65,
        }}>
        <Text
          style={{
            ...styles.btnText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 65,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '200',
  },
});
