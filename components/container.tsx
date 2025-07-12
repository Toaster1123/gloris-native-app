import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode;
  propStyles?: StyleProp<ViewStyle> | undefined;
};

export const Container: React.FC<Props> = ({ children, propStyles }) => {
  if (propStyles) {
    return <View style={[styles.container, propStyles]}>{children}</View>;
  } else {
    return <View style={[styles.container]}>{children}</View>;
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
