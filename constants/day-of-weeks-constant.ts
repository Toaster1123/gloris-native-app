export const dayOfWeekConstant = [
  { id: 1, day: 'Пн', fullDay: 'Понедельник' },
  { id: 2, day: 'Вт', fullDay: 'Вторник' },
  { id: 3, day: 'Ср', fullDay: 'Среда' },
  { id: 4, day: 'Чт', fullDay: 'Четверг' },
  { id: 5, day: 'Пт', fullDay: 'Пятница' },
  { id: 6, day: 'Сб', fullDay: 'Суббота' },
] as const;

export type TDayIndex = (typeof dayOfWeekConstant)[number]['id'];
