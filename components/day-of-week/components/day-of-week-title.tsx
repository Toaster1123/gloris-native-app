import { Container } from '@/components';
import { COLORS, dayOfWeekConstant } from '@/constants';
import { TDayOfWeek } from '@/constants/collors/default-theme-collors';
import { useDayChoseStore } from '@/store';
import { StyleSheet, Text, View } from 'react-native';

export const DayOfWeekTitle = () => {
  const dayIndexChoise = useDayChoseStore((state) => state.dayIndexChoise);
  const day = (dayOfWeekConstant.find((day) => day.id === dayIndexChoise)?.fullDay ||
    1) as TDayOfWeek;

  return (
    <View style={{ backgroundColor: COLORS.dayPrimary[day] }}>
      <Container>
        <Text style={style.text}>{day}</Text>
      </Container>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical: 4,
    color: COLORS.dayTextColor,
    fontWeight: 500,
  },
});
