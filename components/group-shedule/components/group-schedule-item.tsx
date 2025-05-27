import { Container } from '@/components';
import { COLORS } from '@/constants';
import { TGroupName } from '@/constants/collors/default-collors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  groupName: string;
  schedule: string[];
}

export const GroupScheduleItem: React.FC<Props> = ({ groupName, schedule }) => {
  const groupNameShort = groupName.split(' ')[0] as TGroupName;
  return (
    <Container>
      <View style={{ borderColor: COLORS.groupPrimary[groupNameShort], borderWidth: 0.8 }}>
        <View
          style={[style.groupContainer, { backgroundColor: COLORS.groupPrimary[groupNameShort] }]}>
          <Text style={style.groupText}>{groupName}</Text>
        </View>
        <View style={style.scheduleContainer}>
          {schedule.map((item, id) => (
            <View style={style.scheduleItemContainer} key={id}>
              <Text style={style.scheduleItemContainerText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
};

const style = StyleSheet.create({
  groupContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  groupText: {
    color: COLORS.textSecondary,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 600,
  },
  scheduleContainer: {
    margin: 8,
  },
  scheduleItemContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 4,
    alignItems: 'center',
  },
  scheduleItemContainerText: {
    color: COLORS.groupText,
    fontSize: 16,
    alignItems: 'center',
    fontWeight: 400,
  },
});
