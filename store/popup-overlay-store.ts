import { create } from 'zustand';

interface TPopupOverlayStore {
  isActiveOverlay: boolean;
  openOverlay: () => void;
  closeOverlay: () => void;
}

export const popupOverlayStore = create<TPopupOverlayStore>((set) => ({
  isActiveOverlay: false,
  openOverlay: () => set({ isActiveOverlay: true }),
  closeOverlay: () => set({ isActiveOverlay: false }),
}));
