import { getColors } from '@/constants';
import { View } from 'react-native';
import { Container } from '../container';
export const LoadingGroupInfo = () => {
  const COLORS = getColors();

  return (
    <Container propStyles={{ gap: 8, marginVertical: 16 }}>
      {Array(3)
        .fill(null)
        .map((_, id) => (
          <View
            key={id}
            style={{
              height: 22,
              width: '75%',
              backgroundColor: COLORS.loadingGroupInfo,
              borderRadius: 10,
            }}
          />
        ))}
    </Container>
  );
};
