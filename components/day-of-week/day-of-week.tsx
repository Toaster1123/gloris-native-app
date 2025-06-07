import { COLORS, dayOfWeekConstant } from '@/constants';
import { TDayIndex } from '@/constants/day-of-weeks-constant';
import { useDayChoseStore } from '@/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Container } from '../container';
import { DayOfWeekItem } from './components';

export const DayOfWeek: React.FC = () => {
  const { dayIndexChoise, setDayIndexChose } = useDayChoseStore((state) => state);

  const onChangeday = (id: TDayIndex) => {
    setDayIndexChose(id);
    AsyncStorage.setItem('week_day', id.toString());
  };
  return (
    <View style={style.mainBlock}>
      <Container propStyles={style.container}>
        {dayOfWeekConstant.map((day) => (
          <TouchableOpacity
            style={style.touchable}
            key={day.id}
            onPress={() => onChangeday(day.id)}>
            <DayOfWeekItem isSelected={day.id === dayIndexChoise} day={day.day} />
          </TouchableOpacity>
        ))}
      </Container>
    </View>
  );
};

const style = StyleSheet.create({
  mainBlock: {
    paddingVertical: 16,
    backgroundColor: COLORS.background,
  },
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  touchable: {
    flex: 1,
  },
});
