import { TGroupSchedule } from '@/@types';
import { Container, GroupNameContainer, GroupScheduleListSelector } from '@/components';
import { getColors, SCHEDULEBORDER } from '@/constants';
import { splitGroupName } from '@/lib';
import React from 'react';
import { View } from 'react-native';

interface Props {
  isGroupPage?: boolean;
  groupName: string;
  schedule: TGroupSchedule;
  groupId: string;
}
export const GroupScheduleItem: React.FC<Props> = ({
  isGroupPage = false,
  groupName,
  schedule,
  groupId,
}) => {
  const groupShortName = splitGroupName(groupName).groupShortName;
  const COLORS = getColors();
  return (
    <Container propStyles={!isGroupPage && { flex: 1 }}>
      <View
        style={[
          {
            borderColor: COLORS.groupBorder[groupShortName],
            borderWidth: SCHEDULEBORDER.main,
            marginTop: isGroupPage ? 12 : 0,
          },
        ]}>
        <GroupNameContainer
          groupName={groupName}
          isGroupPage={isGroupPage}
          groupId={groupId}
          groupShortName={groupShortName}
        />
        <GroupScheduleListSelector groupShortName={groupShortName} schedule={schedule} />
      </View>
    </Container>
  );
};
