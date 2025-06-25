import { TGroupSchedule } from '@/@types';
import { getColors, SCHEDULEBORDER, scheduleTime } from '@/constants';
import { TGroupName } from '@/constants/collors/default-theme-collors';
import { parseSubject } from '@/lib';
import { Text, View } from 'react-native';
import { styleGroupListAdvanced } from '../../styles';
interface Props {
  schedule: TGroupSchedule;
  groupShortName: TGroupName;
}
type ScheduleItem = {
  name: string;
  time: string;
  cabinet: string;
};

const formatTime = (start: string, end: string) => `${start} - ${end}`;
export const GroupScheduleListAdvanced: React.FC<Props> = ({ schedule, groupShortName }) => {
  const COLORS = getColors();
  const style = styleGroupListAdvanced(COLORS);
  const advancedSchedule = schedule.reduce<ScheduleItem[]>((acc, item, index) => {
    const { cabinet, name } = parseSubject(item);
    if (name && name === '-') return acc;
    const prev = acc[acc.length - 1];
    if (
      prev &&
      index > 0 &&
      prev.name === name &&
      scheduleTime[index - 1].lesson === scheduleTime[index].lesson
    ) {
      prev.time = formatTime(scheduleTime[index - 1].begin, scheduleTime[index].over);
      return acc;
    }
    acc.push({
      name,
      time: formatTime(scheduleTime[index].begin, scheduleTime[index].over),
      cabinet,
    });
    return acc;
  }, []);
  return (
    <View>
      {advancedSchedule.map((item, id) => {
        const isLast = id >= advancedSchedule.length - 1;
        return (
          <View
            style={[
              style.scheduleItemContainer,
              {
                borderColor: COLORS.groupBorder[groupShortName],
                borderBottomWidth: isLast ? 0 : SCHEDULEBORDER.les,
              },
            ]}
            key={id}>
            <View style={style.cabContainter}>
              <Text style={style.scheduleItemContainerText}>{item.name}</Text>
              {item.name !== 'ОБЕД' && (
                <Text style={style.scheduleItemContainerText}>Кабинет: {item.cabinet}</Text>
              )}
            </View>
            <Text style={style.scheduleItemContainerText}>{item.time}</Text>
          </View>
        );
      })}
    </View>
  );
};
