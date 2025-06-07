import { TGroupViewMode } from '@/@types';
import { TGroupName } from '@/constants';
import { GroupScheduleListAdvanced } from './group-schedule-list-advanced';
import { GroupScheduleListDefault } from './group-schedule-list-default';

interface Props {
  groupShortName: TGroupName;
  schedule: string[];
}
export const GroupScheduleListSelector: React.FC<Props> = ({ groupShortName, schedule }) => {
  const mode: TGroupViewMode = 'advanced';

  switch (mode) {
    case 'advanced':
      return <GroupScheduleListAdvanced groupShortName={groupShortName} schedule={schedule} />;

    default:
      return <GroupScheduleListDefault groupShortName={groupShortName} schedule={schedule} />;
  }
};
