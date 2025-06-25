import { Container } from '@/components/container';
import { getColors } from '@/constants';
import { useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { styleSelectorListItem } from '../styles';

interface Props {
  title: string;
  selectedOption: boolean;
  onPress: () => void;
}

const duration = 200;
export const SelectorListItem: React.FC<Props> = ({ title, selectedOption, onPress }) => {
  const COLORS = getColors();
  const style = styleSelectorListItem(COLORS);
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: selectedOption ? 0 : 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [selectedOption]);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <Container propStyles={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <Text style={style.title}>{title}</Text>
        <TouchableOpacity style={style.radioButton} activeOpacity={0.6} onPress={onPress}>
          {selectedOption && <View style={style.radioInner} />}
        </TouchableOpacity>
      </Container>
    </TouchableOpacity>
  );
};
