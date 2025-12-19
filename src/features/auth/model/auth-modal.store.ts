import { create } from "zustand";

type AuthModalMode = 'login' | 'register'

type AuthModalState = {
  isOpen: boolean
  mode: AuthModalMode
  open: (mode?: AuthModalMode) => void
  close: () => void
  toggleMode: () => void
}

export const useAuthModal = create<AuthModalState>((set) => ({
    isOpen: false,
    mode: 'login',

    open: (mode = 'login') => set({ isOpen: true, mode }),

    close: () =>
        set({ isOpen: false }),

    toggleMode: () =>
      set((state) => ({
        mode: state.mode === 'login' ? 'register' : 'login',
      })),
}));