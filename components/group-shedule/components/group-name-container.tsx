import { getColors } from '@/constants';
import { TGroupName } from '@/constants/collors/default-theme-collors';
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
  const COLORS = getColors();
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
  return (
    <>
      {isGroupPage ? (
        <View
          style={[style.groupContainer, { backgroundColor: COLORS.groupTitle[groupShortName] }]}>
          <Text style={style.groupText}>{groupName}</Text>
        </View>
      ) : (
        <Link href={`/group/${groupId}`} asChild>
          <TouchableOpacity>
            <View
              style={[
                style.groupContainer,
                { backgroundColor: COLORS.groupTitle[groupShortName] },
              ]}>
              <Text style={style.groupText}>{groupName}</Text>
            </View>
          </TouchableOpacity>
        </Link>
      )}
    </>
  );
};
