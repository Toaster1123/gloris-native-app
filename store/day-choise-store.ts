import { TDayIndex } from '@/constants/day-of-weeks-constant';
import { getActualDay } from '@/lib';
import { create } from 'zustand';

interface TChoiseData {
  dayIndexChoise: TDayIndex;
  setDayIndexChose: (day: TDayIndex) => void;
}

const dayIndexChoise = getActualDay(new Date().getDay());

export const useDayChoseStore = create<TChoiseData>((set) => ({
  dayIndexChoise,
  setDayIndexChose: (day: TDayIndex) => {
    set({ dayIndexChoise: day });
  },
}));
