import { COLORS } from '@/constants';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface Props {
  text: string;
  classname?: StyleProp<TextStyle>;
}

export const PopupTextItem: React.FC<Props> = ({ text, classname }) => {
  return <Text style={[style.text, classname]}>{text}</Text>;
};

const style = StyleSheet.create({
  text: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: 400,
  },
});
