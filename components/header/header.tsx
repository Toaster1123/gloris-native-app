import { COLORS } from '@/constants';
import { Feather as Icon } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../container';
import { PopupMenu } from './components';

interface Props {
  title?: string;
}

export const Header: React.FC<Props> = ({ title = 'Расписание по группам' }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <View style={style.mainContainer}>
        <Container propStyles={style.container}>
          <TouchableOpacity style={style.menuButton} onPress={() => setIsMenuOpen((prev) => !prev)}>
            <Icon name="menu" size={36} color={COLORS.textSecondary} />
          </TouchableOpacity>
          <View style={style.titleContsainer}>
            <Text style={style.title}>{title}</Text>
          </View>
        </Container>
      </View>
      <PopupMenu isOpenMenu={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  titleContsainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  title: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    fontSize: 18,
  },
  menuButton: {
    zIndex: 2,
  },
});
