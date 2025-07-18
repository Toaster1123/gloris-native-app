import { create } from 'zustand';

interface TChoiseData {
  isConnected: boolean | null;
  setIsConnected: (connected: boolean | null) => void;
}

export const useInternetConnecter = create<TChoiseData>((set) => ({
  isConnected: null,
  setIsConnected: (isConnected: boolean | null) => {
    set({ isConnected });
  },
}));
