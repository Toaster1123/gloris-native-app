import { TDayIndex } from '@/constants/day-of-weeks-constant';

export const getActualDay: (day: number) => TDayIndex = (day: number) => {
  let nextDay = day;
  if (day === 0) {
    nextDay = 1;
  }
  const now = new Date();
  const isAfter_16_20 = now.getHours() > 16 || (now.getHours() === 16 && now.getMinutes() >= 20);

  if (isAfter_16_20) nextDay++;

  if (nextDay > 6 || nextDay === 0) {
    return 1;
  }

  return nextDay as TDayIndex;
};
