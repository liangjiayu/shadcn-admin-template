import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ThemeMode } from '@/constants';

async function getCurrentUser() {
  return {
    name: 'Saber',
    avatar: '',
    userid: 'admin',
    email: 'admin@example.com',
    signature: '欢迎使用 Shadcn Admin',
    title: '管理员',
    group: '管理部门',
    notifyCount: 0,
    unreadCount: 0,
    country: '中国',
    address: '上海市',
    phone: '13800000000',
  };
}

type GlobalState = {
  currentUser: Awaited<ReturnType<typeof getCurrentUser>> | null;
  themeMode: ThemeMode;
};

type GlobalActions = {
  fetchUserInfo: () => Promise<void>;
  fetchInitData: () => Promise<void>;
  setThemeMode: (themeMode: ThemeMode) => void;
};

export const useGlobalStore = create<GlobalState & GlobalActions>()(
  persist(
    (set, get) => ({
      currentUser: null,
      themeMode: ThemeMode.System,

      fetchUserInfo: async () => {
        const currentUser = await getCurrentUser();
        set({ currentUser });
      },

      fetchInitData: async () => {
        try {
          await get().fetchUserInfo();
        } catch {
          console.error('获取用户信息失败!');
        }
      },

      setThemeMode: (themeMode) => {
        set({ themeMode });
      },
    }),
    {
      name: 'global-store',
      partialize: (state) => ({ themeMode: state.themeMode }),
    },
  ),
);
