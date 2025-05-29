import { TDayIndex } from '@/constants/day-of-weeks-constant';
import { getActualDay } from '@/lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface TChoiseData {
  isInitialized: boolean;
  dayIndexChoise: TDayIndex;
  setDayIndexChose: (day: TDayIndex) => void;
  initializeDayIndex: () => Promise<void>;
}

const dayIndexChoise = getActualDay(new Date().getDay());

export const useDayChoseStore = create<TChoiseData>((set) => ({
  dayIndexChoise,
  isInitialized: false,
  setDayIndexChose: (day: TDayIndex) => {
    set({ dayIndexChoise: day });
  },
  initializeDayIndex: async () => {
    const storedValue = await AsyncStorage.getItem('week_day');
    const parsedValue = storedValue ? (parseInt(storedValue, 10) as TDayIndex) : null;

    if (parsedValue !== null) {
      set({ dayIndexChoise: parsedValue });
    } else {
      await AsyncStorage.setItem('week_day', dayIndexChoise.toString());
      set({ dayIndexChoise });
    }

    set({ isInitialized: true });
  },
}));
