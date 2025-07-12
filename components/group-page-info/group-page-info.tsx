import { getColors } from '@/constants';
import { StyleSheet, Text } from 'react-native';
import { Container } from '../container';

interface Props {
  course: number;
  curator: string;
  speciality: string;
}

export const GroupPageInfo: React.FC<Props> = ({ course, curator, speciality }) => {
  const COLORS = getColors();

  const style = StyleSheet.create({
    container: { marginVertical: 16, gap: 8 },
    text: {
      fontSize: 15,
      color: COLORS.textPrimary,
    },
  });
  return (
    <Container propStyles={style.container}>
      <Text style={style.text}>{course} курс</Text>
      <Text style={style.text}>{curator}</Text>
      <Text style={style.text}>{speciality}</Text>
    </Container>
  );
};
