import { getColors } from '@/constants';
import { useHeaderTitleStore } from '@/store';
import { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import { styleLoadingTitle } from '../../styles';

const duration = 1100;
export const LoadingTitle = () => {
  const loadingOpacity = useRef(new Animated.Value(0.9)).current;
  const { title } = useHeaderTitleStore((state) => state);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(loadingOpacity, {
          toValue: 0.4,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(loadingOpacity, {
          toValue: 0.9,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  const COLORS = getColors();
  const style = styleLoadingTitle(COLORS);
  return (
    <View style={style.titleContsainer}>
      {title ? (
        <Text style={style.title}>{title}</Text>
      ) : (
        <Animated.View
          style={[
            style.loadingTitle,
            {
              opacity: loadingOpacity,
            },
          ]}
        />
      )}
    </View>
  );
};
