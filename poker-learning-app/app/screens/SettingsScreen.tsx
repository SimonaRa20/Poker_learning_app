import { View, Text, Pressable, ScrollView, TextInput, } from 'react-native';
import { useSettingsStore } from '../store/useSettingsStore';
import { useTheme } from '../theme/useTheme';
import { useTranslation } from '../localization/useTranslation';
import { useStyles } from '../theme/useStyles';

export function SettingsScreen() {
  const {
    theme,
    language,
    profile,
    setTheme,
    setLanguage,
    setUsername,
  } = useSettingsStore();

  const colors = useTheme();

  const translation = useTranslation();

  const styles =
    useStyles(colors);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={
        styles.content
      }
    >
      <Text style={styles.title}>
        {translation.settings}
      </Text>

      <SettingsCard
        title={translation.theme}
        styles={styles}
      >
        <View style={styles.row}>
          <LanguageButton
            active={
              theme === 'dark'
            }
            label={
              translation.darkMode
            }
            onPress={() =>
              setTheme('dark')
            }
            colors={colors}
            styles={styles}
          />
        <LanguageButton
            active={
              theme === 'light'
            }
            label={translation.lightMode}
            onPress={() =>
              setTheme('light')
            }
            colors={colors}
            styles={styles}
          />
        </View>
      </SettingsCard>

      <SettingsCard
        title={
          translation.language
        }
        styles={styles}
      >
        <View style={styles.wrapRow}>
          <LanguageButton
            active={
              language === 'en'
            }
            label={translation.en}
            onPress={() =>
              setLanguage('en')
            }
            colors={colors}
            styles={styles}
          />

          <LanguageButton
            active={
              language === 'lt'
            }
            label={translation.lt}
            onPress={() =>
              setLanguage('lt')
            }
            colors={colors}
            styles={styles}
          />
        </View>
      </SettingsCard>

      <SettingsCard
        title={
          translation.profile
        }
        styles={styles}
      >
        <Text style={styles.label}>
          {translation.username}
        </Text>

        <TextInput
          value={profile.username}
          onChangeText={
            setUsername
          }
          placeholder={
            translation.username
          }
          placeholderTextColor={
            colors.secondaryText
          }
          style={styles.input}
        />
      </SettingsCard>
    </ScrollView>
  );
}

function SettingsCard({
  title,
  children,
  styles,
}: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {title}
      </Text>

      {children}
    </View>
  );
}

function LanguageButton({
  label,
  active,
  onPress,
  colors,
  styles,
}: any) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.languageButton,
        {
          backgroundColor: active
            ? colors.primary
            : colors.buttonInactive,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: active
              ? colors.primaryText
              : colors.text,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
