import { THrefLinks } from '@/@types';
import { getColors } from '@/constants';
import { Link } from 'expo-router';
import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';
import { stylePopupTextItem } from '../styles';

interface Props {
  href?: THrefLinks;
  text: string;
  onPress?: () => void;
  classname?: StyleProp<TextStyle>;
}
export const PopupTextItem: React.FC<Props> = ({ text, href, onPress, classname }) => {
  const COLORS = getColors();
  const style = stylePopupTextItem(COLORS);
  if (href) {
    return (
      <Link href={`${href}`} asChild>
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={style.mainContainer}>
          <Text style={[style.text, classname]}>{text}</Text>
        </TouchableOpacity>
      </Link>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={style.mainContainer}>
        <Text style={[style.text, classname]}>{text}</Text>
      </TouchableOpacity>
    );
  }
};
