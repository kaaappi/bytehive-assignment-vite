import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  isAuth: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuth: false,
      login: (token: string) => set({ token, isAuth: true }),
      logout: () => set({ isAuth: false }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
