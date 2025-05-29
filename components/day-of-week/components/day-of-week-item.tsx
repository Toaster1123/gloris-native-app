import { COLORS } from '@/constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  isSelected: boolean;
  day: string;
}

export const DayOfWeekItem: React.FC<Props> = ({ isSelected = false, day }) => {
  return (
    <View style={[style.container, isSelected && { backgroundColor: COLORS.dateBorder }]}>
      <Text
        style={[style.text, { color: isSelected ? COLORS.dateSelectedText : COLORS.dateBorder }]}>
        {day}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderColor: COLORS.dateBorder,
    borderWidth: 1,
    alignItems: 'center',
  },
  text: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});
