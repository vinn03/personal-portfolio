import { ThemeSpec, ThemeVariant } from './types';
import { lightTheme } from './light';
import { darkTheme } from './dark';
import { templateTheme, templateDarkTheme } from './template';

export const themes: ThemeSpec[] = [
  lightTheme,
  darkTheme,
  templateTheme,
  templateDarkTheme,
];

export const getThemeId = (theme: ThemeSpec, variant: ThemeVariant): string => {
  if (theme.id === 'light' && variant === 'light') return 'light';
  if (theme.id === 'dark' && variant === 'dark') return 'dark';
  if (variant === 'dark') return `${theme.id}-dark`;
  return theme.id;
};

export const getThemeById = (id: string): ThemeSpec | undefined => {
  return themes.find(t => t.id === id || t.id === id.replace('-dark', ''));
};

export const getVariantFromId = (id: string): ThemeVariant => {
  return id.endsWith('-dark') ? 'dark' : 'light';
};

export { lightTheme, darkTheme, templateTheme, templateDarkTheme };
export type { ThemeSpec, ThemeVariant, ThemeColors } from './types';
