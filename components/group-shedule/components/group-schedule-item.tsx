import { Container, GroupNameContainer, GroupScheduleList } from '@/components';
import { COLORS, SCHEDULEBORDER } from '@/constants';
import { splitGroupName } from '@/lib';
import React from 'react';
import { View } from 'react-native';

interface Props {
  isGroupPage?: boolean;
  groupName: string;
  schedule: string[];
  groupId: string;
}

export const GroupScheduleItem: React.FC<Props> = ({
  isGroupPage = false,
  groupName,
  schedule,
  groupId,
}) => {
  const groupShortName = splitGroupName(groupName).groupShortName;
  return (
    <Container propStyles={{ flex: 1 }}>
      <View
        style={[
          {
            borderColor: COLORS.groupPrimary[groupShortName],
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
        <GroupScheduleList groupShortName={groupShortName} schedule={schedule} />
      </View>
    </Container>
  );
};
