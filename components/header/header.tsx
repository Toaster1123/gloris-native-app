import { getColors } from '@/constants';
import { popupOverlayStore } from '@/store';
import { Feather as Icon } from '@expo/vector-icons';
import { usePathname } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container } from '../container';
import { LoadingTitle, PopupTextContainer } from './components';
import { createHeaderStyles } from './styles';
export const Header: React.FC = () => {
  const COLORS = getColors();
  const styleHeader = createHeaderStyles(COLORS);
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const { closeOverlay, openOverlay, isActiveOverlay } = popupOverlayStore((state) => state);
  const pathname = usePathname();
  const handleClose = () => {
    closeOverlay();
    setIsOpenPopup(false);
  };
  const handleOpen = () => {
    openOverlay();
    setIsOpenPopup(true);
  };
  React.useEffect(() => {
    if (!isActiveOverlay) {
      setIsOpenPopup(false);
    }
  }, [isActiveOverlay]);

  React.useEffect(handleClose, [pathname]);

  return (
    <>
      <View style={styleHeader.mainContainer}>
        <Container propStyles={styleHeader.container}>
          <TouchableOpacity style={styleHeader.menuButton} onPress={handleOpen}>
            <Icon name="menu" size={36} color={COLORS.textSecondary} />
          </TouchableOpacity>
          <LoadingTitle />
        </Container>
      </View>
      <PopupTextContainer isOpenPopup={isOpenPopup} />
    </>
  );
};
