import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (credentials) => set({ user: credentials, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));