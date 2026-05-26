import { en } from './en';
import { lt } from './lt';
import { useSettingsStore } from '../store/useSettingsStore';

export function useTranslation() {
  const language =
    useSettingsStore(
      (state) => state.language
    );

  switch (language) {
    case 'lt':
      return lt;

    default:
      return en;
  }
}