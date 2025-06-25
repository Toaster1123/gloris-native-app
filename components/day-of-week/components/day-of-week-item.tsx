import { getColors } from '@/constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  isSelected: boolean;
  day: string;
}
export const DayOfWeekItem: React.FC<Props> = ({ isSelected = false, day }) => {
  const COLORS = getColors();

  const style = StyleSheet.create({
    container: {
      borderRadius: 6,
      borderColor: COLORS.dateBorder,
      borderWidth: 1,
      alignItems: 'center',
      backgroundColor: isSelected ? COLORS.dateBorder : 'transparent',
    },
    text: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      fontSize: 16,
      color: isSelected ? COLORS.dateSelectedText : COLORS.dateBorder,
    },
  });

  return (
    <View style={style.container}>
      <Text style={style.text}>{day}</Text>
    </View>
  );
};
