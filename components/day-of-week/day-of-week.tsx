import { dayOfWeekConstant } from '@/constants';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Container } from '../container';
import { DayOfWeekItem } from './components';

export const DayOfWeek: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  return (
    <View style={style.mainBlock}>
      <Container propStyles={style.container}>
        {dayOfWeekConstant.map((day) => (
          <TouchableOpacity key={day.id} onPress={() => setSelectedDay(day.id)}>
            <DayOfWeekItem isSelected={day.id === selectedDay} day={day.day} />
          </TouchableOpacity>
        ))}
      </Container>
    </View>
  );
};

const style = StyleSheet.create({
  mainBlock: {
    marginVertical: 12,
  },
  container: {
    flexDirection: 'row',
    gap: 4,
  },
});
