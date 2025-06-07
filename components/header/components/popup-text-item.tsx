import { COLORS } from '@/constants';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

interface Props {
  text: string;
  classname?: StyleProp<TextStyle>;
}

export const PopupTextItem: React.FC<Props> = ({ text, classname }) => {
  return (
    <View style={style.mainContainer}>
      <Text style={[style.text, classname]}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  text: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    color: COLORS.dateSelectedText,
    fontSize: 16,
    fontWeight: 400,
  },
});
