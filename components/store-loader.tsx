import { useDayChoseStore } from '@/store';
import { useEffect } from 'react';

export const StoreLoader = () => {
  const initializeDayIndex = useDayChoseStore((state) => state.initializeDayIndex);

  useEffect(() => {
    initializeDayIndex();
  }, []);
  return null;
};
