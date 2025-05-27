import { COLORS } from '@/constants';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { PopupTextItem } from './popup-text-item';

interface Props {
  slideAnim: Animated.Value;
}
const { width } = Dimensions.get('window');
const animateWidth = width / 2;
export const PopupTextContainer: React.FC<Props> = ({ slideAnim }) => {
  return (
    <Animated.View
      style={[
        style.container,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}>
      <View>
        <PopupTextItem text="Все группы" />
        <View style={style.yearBlock}>
          <PopupTextItem text="1 курс" />
          <PopupTextItem text="2 курс" />
          <PopupTextItem text="3 курс" />
          <PopupTextItem text="4 курс" />
        </View>
        <View>
          <PopupTextItem text="Твое расписание" />
          <PopupTextItem text="Совмещенные пары" />
          <PopupTextItem text="Веб - версия" />
        </View>
      </View>
      <PopupTextItem text="Настройки" />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    zIndex: 11,
    width: animateWidth,
    padding: 16,
    position: 'absolute',
    backgroundColor: COLORS.background,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  yearBlock: {
    marginVertical: 16,
  },
});
