import { StyleSheet } from 'react-native';

import { ThemeColors } from './types';

export function useStyles(
  colors: ThemeColors
) {
  return StyleSheet.create({
    screen: {
      flex: 1,

      backgroundColor:
        colors.background,
    },

    content: {
      padding: 20,

      paddingBottom: 80,
    },

    title: {
      color: colors.text,

      fontSize: 34,

      fontWeight: 'bold',

      marginBottom: 24,
    },

    card: {
      backgroundColor:
        colors.card,

      borderRadius: 16,

      padding: 18,

      marginBottom: 18,

      borderWidth: 1,

      borderColor:
        colors.border,
    },

    cardTitle: {
      color: colors.text,

      fontSize: 20,

      fontWeight: '700',

      marginBottom: 16,
    },

    label: {
      color:
        colors.secondaryText,

      marginBottom: 8,
    },

    input: {
      height: 52,

      borderRadius: 12,

      paddingHorizontal: 14,

      backgroundColor:
        colors.input,

      color: colors.text,
    },

    row: {
      flexDirection: 'row',

      gap: 12,
    },

    wrapRow: {
      flexDirection: 'row',

      gap: 12,

      flexWrap: 'wrap',
    },

    themeButton: {
      flex: 1,

      height: 50,

      borderRadius: 12,

      justifyContent: 'center',

      alignItems: 'center',
    },

    languageButton: {
      paddingHorizontal: 16,

      height: 44,

      borderRadius: 10,

      justifyContent: 'center',
    },

    buttonText: {
      fontWeight: '600',
    },
  });
}
