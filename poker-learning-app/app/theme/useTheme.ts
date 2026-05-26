import { darkTheme } from './dark';
import { lightTheme } from './light';
import { ThemeColors } from './types';
import { useSettingsStore } from '../store/useSettingsStore';

export function useTheme(): ThemeColors {
  const theme =
    useSettingsStore(
      (state) => state.theme
    );

  return theme === 'dark'
    ? darkTheme
    : lightTheme;
}