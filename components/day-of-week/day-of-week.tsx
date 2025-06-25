import { dayOfWeekConstant, getColors } from '@/constants';
import { TDayIndex } from '@/constants/day-of-weeks-constant';
import { useDayChoseStore } from '@/store';
import { TouchableOpacity, View } from 'react-native';
import { Container } from '../container';
import { DayOfWeekItem } from './components';
import { styleDayOfWeek } from './styles';

export const DayOfWeek: React.FC = () => {
  const STYLES = getColors();
  const style = styleDayOfWeek(STYLES);
  const { dayIndexChoise, setDayIndexChose } = useDayChoseStore((state) => state);
  const onChangeday = (id: TDayIndex) => {
    setDayIndexChose(id);
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
