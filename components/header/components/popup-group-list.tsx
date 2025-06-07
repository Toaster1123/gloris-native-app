import { TListGroupName } from '@/@types';
import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { styleGropList } from '../styles';
import { AnimatedIcon } from './animated-icon';
import { LoadingPlaceholder } from './loading-placeholder';

interface Props extends TListGroupName {
  isLoading: boolean;
}

export const PopupGroupList: React.FC<Props> = ({ year, isLoading, groups }) => {
  const animateHeight = groups.length * 24 + 4;
  const duration = 100;
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const rotateAnim = React.useRef(new Animated.Value(0)).current;
  const heightAnim = React.useRef(new Animated.Value(0)).current;

  const toglePopup = () => {
    Animated.parallel([
      Animated.timing(rotateAnim, {
        toValue: isPopupOpen ? 0 : 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(heightAnim, {
        toValue: !isPopupOpen ? animateHeight : 0,
        duration,
        useNativeDriver: false,
      }),
    ]).start();
    setIsPopupOpen((prev) => !prev);
  };
  if (true) {
    return <LoadingPlaceholder />;
  }
  return (
    <View style={styleGropList.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toglePopup}
        style={styleGropList.titleContainer}>
        <Text style={styleGropList.title}>{year} курс</Text>
        <AnimatedIcon rotateAnim={rotateAnim} />
      </TouchableOpacity>
      <Animated.View style={{ overflow: 'hidden', height: heightAnim }}>
        <View style={[styleGropList.groupContainer]}>
          {groups.map((item, id) => (
            <Text style={styleGropList.groupText} key={id}>
              {item.groupName}
            </Text>
          ))}
        </View>
      </Animated.View>
    </View>
  );
};
