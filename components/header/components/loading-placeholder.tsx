import { getColors } from "@/constants";
import { AntDesign as Icon } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
interface Props {
  propStyles?: StyleProp<ViewStyle>;
}

export const LoadingPlaceholder: React.FC<Props> = ({ propStyles }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
    ).start();
  }, []);
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const style = StyleSheet.create({
    loadingPlaceholder: {
      height: 40,
      marginVertical: 4,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={[style.loadingPlaceholder, propStyles]}>
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Icon name="loading1" size={24} color="#fff" />
      </Animated.View>
    </View>
  );
};
