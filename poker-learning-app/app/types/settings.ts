export type AppTheme = 'dark' | 'light';

export type AppLanguage =
  | 'en'
  | 'lt';

export interface UserProfile {
  username: string;
}

export interface SettingsState {
  theme: AppTheme;
  language: AppLanguage;
  profile: UserProfile;
  dataPath: string;

  setTheme: (
    theme: AppTheme
  ) => void;

  setLanguage: (
    language: AppLanguage
  ) => void;

  setUsername: (
    username: string
  ) => void;
}
