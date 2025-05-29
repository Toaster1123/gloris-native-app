import { COLORS, SCHEDULEBORDER } from '@/constants';
import { TGroupName } from '@/constants/collors/default-collors';
import { StyleSheet, Text, View } from 'react-native';
interface Props {
  schedule: string[];
  groupShortName: TGroupName;
}
export const GroupScheduleList: React.FC<Props> = ({ schedule, groupShortName }) => {
  return (
    <View>
      {schedule.map((item, id) => (
        <View
          style={[
            style.scheduleItemContainer,
            {
              borderColor: COLORS.groupPrimary[groupShortName],
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

  scheduleItemContainer: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  scheduleItemContainerText: {
    color: COLORS.groupText,
    fontSize: 16,
    alignItems: 'center',
    fontWeight: 400,
    paddingVertical: 4,
  },
});
