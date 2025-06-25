import { create } from 'zustand';

interface HeaderStore {
  title: string | undefined;
  setTitle: (title: string | undefined) => void;
}

export const useHeaderTitleStore = create<HeaderStore>((set) => ({
  title: 'Расписание по группам',
  setTitle: (title) => set({ title }),
}));
