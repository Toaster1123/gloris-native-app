import { TGroupSchedule } from '@/@types';
import { TGroupName } from '@/constants';
import { useSettingsStore } from '@/store';
import { GroupScheduleListAdvanced } from './group-schedule-list-advanced';
import { GroupScheduleListDefault } from './group-schedule-list-default';

interface Props {
  groupShortName: TGroupName;
  schedule: TGroupSchedule;
}
export const GroupScheduleListSelector: React.FC<Props> = ({ groupShortName, schedule }) => {
  const selectedMode = useSettingsStore.getState().settings.group_mode.value;

  switch (selectedMode) {
    case 'advanced':
      return <GroupScheduleListAdvanced groupShortName={groupShortName} schedule={schedule} />;

    default:
      return <GroupScheduleListDefault groupShortName={groupShortName} schedule={schedule} />;
  }
};
