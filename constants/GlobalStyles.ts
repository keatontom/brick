import { StyleSheet, TextStyle } from 'react-native';

// Color palette
const colors = {
  primary: '#FF5722', // Brick orange/red
  secondary: '#455A64', // Blue-grey
  accent: '#FFC107', // Amber
  background: '#FAFAFA', // Light grey
  text: '#212121', // Dark grey
  textLight: '#FFFFFF', // White
  error: '#D32F2F', // Red
  success: '#388E3C', // Green
  warning: '#FFA000', // Amber dark
  info: '#1976D2', // Blue
  divider: '#BDBDBD', // Grey
};

// Typography
const typography = {
  titleLarge: {
    fontSize: 32,
    fontWeight: 'bold' as TextStyle['fontWeight'],
    letterSpacing: 0.25,
  },
  titleMedium: {
    fontSize: 24,
    fontWeight: 'bold' as TextStyle['fontWeight'],
  },
  titleSmall: {
    fontSize: 20,
    fontWeight: 'bold' as TextStyle['fontWeight'],
  },
  bodyLarge: {
    fontSize: 18,
  },
  bodyMedium: {
    fontSize: 16,
  },
  bodySmall: {
    fontSize: 14,
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold' as TextStyle['fontWeight'],
    textTransform: 'uppercase' as TextStyle['textTransform'],
  },
};

// Spacing
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Border radius
const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  round: 999,
};

// Shadows
const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

// Common styles
const common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  centeredContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.textLight,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.medium,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.small,
  },
  buttonText: {
    color: colors.textLight,
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    textTransform: typography.button.textTransform,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.small,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButtonText: {
    color: colors.primary,
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    textTransform: typography.button.textTransform,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.divider,
    marginVertical: spacing.md,
  },
  input: {
    backgroundColor: colors.textLight,
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    width: '100%',
    marginBottom: spacing.md,
  },
});

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  common,
}; 