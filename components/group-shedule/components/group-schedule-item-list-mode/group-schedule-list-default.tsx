import { TGroupSchedule } from '@/@types';
import { getColors, SCHEDULEBORDER } from '@/constants';
import { TGroupName } from '@/constants/collors/default-theme-collors';
import { Text, View } from 'react-native';
import { styleGroupListDafault } from '../../styles';
interface Props {
  schedule: TGroupSchedule;
  groupShortName: TGroupName;
}
export const GroupScheduleListDefault: React.FC<Props> = ({ schedule, groupShortName }) => {
  const COLORS = getColors();
  const style = styleGroupListDafault(COLORS);

  return (
    <View>
      {schedule.map((item, id) => (
        <View
          style={[
            style.scheduleItemContainer,
            {
              borderColor: COLORS.groupBorder[groupShortName],
              borderBottomWidth: id < schedule.length - 1 ? SCHEDULEBORDER.les : 0,
            },
          ]}
          key={id}>
          <Text style={style.scheduleItemContainerText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};
