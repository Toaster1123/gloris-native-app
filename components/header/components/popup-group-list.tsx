import { TListGroupName } from '@/@types';
import { getColors } from '@/constants';
import { Link, usePathname } from 'expo-router';
import React, { useEffect } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { styleGropList } from '../styles';
import { AnimatedIcon } from './animated-components';

export const PopupGroupList: React.FC<TListGroupName> = ({ year, groups }) => {
  const animateHeight = groups.length * 26;
  const duration = 100;
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const rotateAnim = React.useRef(new Animated.Value(0)).current;
  const heightAnim = React.useRef(new Animated.Value(0)).current;

  const pathname = usePathname();
  useEffect(() => {
    setIsPopupOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: isPopupOpen ? animateHeight : 0,
      duration,
      useNativeDriver: false,
    }).start();
  }, [isPopupOpen, animateHeight, duration, heightAnim]);
  const toglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  const COLORS = getColors();
  const style = styleGropList(COLORS);
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={toglePopup} style={style.titleContainer}>
        <Text style={style.title}>{year} курс</Text>
        <AnimatedIcon rotateAnim={rotateAnim} />
      </TouchableOpacity>
      <Animated.View style={{ overflow: 'hidden', height: heightAnim }}>
        <View style={[style.groupContainer]}>
          {groups.map((item, id) => (
            <Link style={style.groupText} href={`/group/${item.groupId}`} key={id}>
              <Text>{item.groupName}</Text>
            </Link>
          ))}
        </View>
      </Animated.View>
    </View>
  );
};
