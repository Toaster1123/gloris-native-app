import { getColors } from '@/constants';
import { AntDesign as Icon } from '@expo/vector-icons';
import { Animated } from 'react-native';

interface Props {
  rotateAnim: Animated.Value;
}
export const AnimatedIcon: React.FC<Props> = ({ rotateAnim }) => {
  const COLORS = getColors();
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  return (
    <Animated.View
      style={{
        transform: [{ rotate }],
      }}>
      <Icon
        style={{
          color: COLORS.dateSelectedText,
          paddingVertical: 6,
          paddingHorizontal: 8,
          fontSize: 16,
        }}
        name="caretup"
      />
    </Animated.View>
  );
};
