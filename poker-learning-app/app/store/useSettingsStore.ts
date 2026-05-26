import { create } from 'zustand';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { persist } from 'zustand/middleware';

import {
  SettingsState,
} from '../types/settings';

export const useSettingsStore =
  create<SettingsState>()(
    persist(
      (set) => ({
        theme: 'dark',

        language: 'en',

        profile: {
          username: 'Poker Player',
        },

        dataPath:
          'Local App Storage',

        setTheme: (theme) =>
          set({ theme }),

        setLanguage: (
          language
        ) =>
          set({ language }),

        setUsername: (
          username
        ) =>
          set({
            profile: {
              username,
            },
          }),
      }),

      {
        name: 'app-settings',

        storage: {
          getItem: async (name) => {
            const value =
              await AsyncStorage.getItem(
                name
              );

            return value
              ? JSON.parse(value)
              : null;
          },

          setItem: async (
            name,
            value
          ) => {
            await AsyncStorage.setItem(
              name,
              JSON.stringify(value)
            );
          },

          removeItem: async (
            name
          ) => {
            await AsyncStorage.removeItem(
              name
            );
          },
        },
      }
    )
  );
