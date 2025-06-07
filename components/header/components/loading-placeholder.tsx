import { AntDesign as Icon } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { styleGropList } from '../styles';

export const LoadingPlaceholder = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1700,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim]);
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styleGropList.loadingPlaceholder}>
      <View>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Icon name="loading1" size={24} color="#fff" />
        </Animated.View>
      </View>
    </View>
  );
};
