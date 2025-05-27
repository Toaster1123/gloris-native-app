import { COLORS } from '@/constants';
import React from 'react';
import { Animated, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { PopupTextContainer } from './popup-text-container';

interface Props {
  isOpenMenu: boolean;
  onClose: () => void;
}
const { width } = Dimensions.get('window');
const animateWidth = width / 2;
const duration = 200;

export const PopupMenu: React.FC<Props> = ({ isOpenMenu, onClose }) => {
  const slideAnim = React.useRef(new Animated.Value(-animateWidth)).current;
  const overlayOpacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpenMenu ? 0 : -animateWidth - 1,
      duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(overlayOpacity, {
      toValue: isOpenMenu ? 0.5 : 0,
      duration,
      useNativeDriver: true,
    }).start();
  }, [isOpenMenu]);

  return (
    <>
      <Animated.View
        style={[
          style.blackOutOverlay,
          {
            opacity: overlayOpacity,
            pointerEvents: isOpenMenu ? 'auto' : 'none',
          },
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          style={StyleSheet.absoluteFillObject}
        />
      </Animated.View>
      <PopupTextContainer slideAnim={slideAnim} />
    </>
  );
};

const style = StyleSheet.create({
  blackOutOverlay: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 10,
    backgroundColor: COLORS.blackOutOverlay,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
