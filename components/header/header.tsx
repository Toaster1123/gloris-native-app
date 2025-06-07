import { COLORS } from '@/constants';
import { Feather as Icon } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../container';
import { PopupMenu } from './components';
import { styleHeader } from './styles';

interface Props {
  title?: string;
}

export const Header: React.FC<Props> = ({ title = 'Расписание по группам' }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <View style={styleHeader.mainContainer}>
        <Container propStyles={styleHeader.container}>
          <TouchableOpacity
            style={styleHeader.menuButton}
            onPress={() => setIsMenuOpen((prev) => !prev)}>
            <Icon name="menu" size={36} color={COLORS.textSecondary} />
          </TouchableOpacity>
          <View style={styleHeader.titleContsainer}>
            <Text style={styleHeader.title}>{title}</Text>
          </View>
        </Container>
      </View>
      <PopupMenu isOpenMenu={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
