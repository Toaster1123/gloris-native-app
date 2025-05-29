import { COLORS } from '@/constants';
import { TGroupName } from '@/constants/collors/default-collors';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  groupName: string;
  isGroupPage: boolean;
  groupId: string;
  groupShortName: TGroupName;
}

export const GroupNameContainer: React.FC<Props> = ({
  groupName,
  isGroupPage,
  groupId,
  groupShortName,
}) => {
  return (
    <>
      {isGroupPage ? (
        <View
          style={[style.groupContainer, { backgroundColor: COLORS.groupPrimary[groupShortName] }]}>
          <Text style={style.groupText}>{groupName}</Text>
        </View>
      ) : (
        <Link href={`/group/${groupId}`} asChild>
          <TouchableOpacity
            onPress={() => {
              console.log(groupId);
            }}>
            <View
              style={[
                style.groupContainer,
                { backgroundColor: COLORS.groupPrimary[groupShortName] },
              ]}>
              <Text style={style.groupText}>{groupName}</Text>
            </View>
          </TouchableOpacity>
        </Link>
      )}
    </>
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
});
