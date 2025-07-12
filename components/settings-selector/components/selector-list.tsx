import { TParams } from '@/@types';
import { Container, SelectorListRenderItems } from '@/components';
import { getColors } from '@/constants';
import { useSettingsStore } from '@/store';
import { EvilIcons as Icon } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styleSelectorList } from '../styles';

interface Props {
  selectedOptions: TParams | null;
  onClose: () => void;
  isOpen: boolean;
}
const duration = 200;
export const SelectorList: React.FC<Props> = ({ selectedOptions, onClose, isOpen }) => {
  const [selectedValue, setSelectedValue] = useState<{ name: string; value: string | null } | null>(
    null,
  );
  const screenHeight = Dimensions.get('window').height;
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;
  const insets = useSafeAreaInsets();
  const { getSetting, saveSetting } = useSettingsStore();

  useEffect(() => {
    const init = async function () {
      if (!selectedOptions) return;
      setSelectedValue((await getSetting(selectedOptions.storeKey)) || null);
    };
    init();
  }, [selectedOptions]);

  const handleSelect = (id: number) => {
    if (selectedOptions) {
      saveSetting(selectedOptions.storeKey, selectedOptions?.options[id]);
      setSelectedValue(selectedOptions?.options[id]);
      onClose();
    }
  };
  const COLORS = getColors();
  const style = styleSelectorList(COLORS);
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 0 : screenHeight,
      duration,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [selectedOptions, isOpen]);
  return (
    <Animated.View
      style={[
        style.container,
        {
          transform: [{ translateY: slideAnim }],
          marginBottom: insets.bottom,
          maxHeight: screenHeight / 1.5,
        },
      ]}>
      <Container propStyles={style.header}>
        <Text style={style.title}>{selectedOptions?.title}</Text>
        <TouchableOpacity onPress={onClose} style={{ width: 23 }}>
          <Icon name="close" size={28} color={COLORS.settingsSelected} />
        </TouchableOpacity>
      </Container>
      <SelectorListRenderItems
        scrollCollor={COLORS.settingsSelected}
        handleSelect={handleSelect}
        isOpen={isOpen}
        selectedValue={selectedValue}
        options={selectedOptions ? selectedOptions.options : null}
      />
    </Animated.View>
  );
};
