import { COLORS } from '@/constants';
import { AntDesign as Icon } from '@expo/vector-icons';
import { Animated, StyleSheet } from 'react-native';

interface Props {
  rotateAnim: Animated.Value;
}

export const AnimatedIcon: React.FC<Props> = ({ rotateAnim }) => {
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  return (
    <Animated.View
      style={{
        transform: [{ rotate }],
      }}>
      <Icon style={style.title} name="caretup" />
    </Animated.View>
  );
};
const style = StyleSheet.create({
  title: {
    color: COLORS.dateSelectedText,
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontSize: 16,
  },
});
