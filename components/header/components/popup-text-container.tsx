import { AlertUserGroup } from '@/components/alert-user-group';
import { getColors } from '@/constants';
import React from 'react';
import { Animated, BackHandler, Dimensions, ScrollView } from 'react-native';
import { stylePopupTextContainer } from '../styles';
import { RenderBlocks } from './render-blocks';
import { SettingsButton } from './settings-button';

interface Props {
  isOpenPopup: boolean;
}

const duration = 200;
const { width } = Dimensions.get('window');
const animateWidth = width / 2;
export const PopupTextContainer: React.FC<Props> = ({ isOpenPopup }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(-animateWidth)).current;
  const COLORS = getColors();
  const style = stylePopupTextContainer(COLORS);
  const closeAlert = () => {
    setShowAlert(false);
    return true;
  };

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpenPopup ? 0 : -animateWidth,
      duration,
      useNativeDriver: true,
    }).start();
  }, [isOpenPopup, slideAnim]);

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', closeAlert);
    return () => {
      BackHandler.addEventListener('hardwareBackPress', closeAlert);
    };
  }, []);

  return (
    <>
      <Animated.View
        style={[
          style.container,
          {
            transform: [{ translateX: slideAnim }],
            width: animateWidth,
          },
        ]}>
        <ScrollView
          contentContainerStyle={style.scrollContentContainer}
          showsVerticalScrollIndicator={false}>
          <RenderBlocks showAlert={() => setShowAlert(true)} />
          <SettingsButton />
        </ScrollView>
      </Animated.View>
      {showAlert && <AlertUserGroup onClose={() => setShowAlert(false)} />}
    </>
  );
};
