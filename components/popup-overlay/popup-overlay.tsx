import { getColors } from '@/constants';
import { popupOverlayStore } from '@/store';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
const duration = 200;
export const PopupOverlay: React.FC = () => {
  const COLORS = getColors();
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const { isActiveOverlay, closeOverlay } = popupOverlayStore((state) => state);
  useEffect(() => {
    Animated.timing(overlayOpacity, {
      toValue: isActiveOverlay ? 0.5 : 0,
      duration,
      useNativeDriver: true,
    }).start();
  }, [isActiveOverlay]);

  const style = StyleSheet.create({
    blackOutOverlay: {
      ...StyleSheet.absoluteFillObject,
      height: 'auto',
      position: 'absolute',
      width: '100%',
      zIndex: 10,
      backgroundColor: COLORS.blackOutOverlay,
    },
  });

  return (
    <Animated.View
      style={[
        style.blackOutOverlay,
        {
          opacity: overlayOpacity,
          pointerEvents: isActiveOverlay ? 'auto' : 'none',
        },
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={closeOverlay}
        style={StyleSheet.absoluteFillObject}
      />
    </Animated.View>
  );
};
