import { Container } from '@/components';
import { dayOfWeekConstant, getColors } from '@/constants';
import { TDayOfWeek } from '@/constants/collors/default-theme-collors';
import { useDayChoseStore } from '@/store';
import { Text, View } from 'react-native';

export const DayOfWeekTitle = () => {
  const COLORS = getColors();
  const dayIndexChoise = useDayChoseStore((state) => state.dayIndexChoise);
  const day = (dayOfWeekConstant.find((day) => day.id === dayIndexChoise)?.fullDay ||
    1) as TDayOfWeek;

  return (
    <View style={{ backgroundColor: COLORS.dayPrimary[day] }}>
      <Container>
        <Text
          style={{ fontSize: 20, paddingVertical: 4, color: COLORS.dayTextColor, fontWeight: 500 }}>
          {day}
        </Text>
      </Container>
    </View>
  );
};
