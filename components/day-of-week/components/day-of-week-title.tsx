import { Container } from '@/components';
import { COLORS } from '@/constants';
import { TDayOfWeek } from '@/constants/collors/default-collors';
import { StyleSheet, Text, View } from 'react-native';

export const DayOfWeekTitle = () => {
  const day: TDayOfWeek = 'Понедельник';
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
