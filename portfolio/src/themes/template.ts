import { ThemeSpec } from './types';

export const templateTheme: ThemeSpec = {
  id: 'template',
  displayName: 'Template',
  colors: {
    bgPrimary: '#f5f5f5',
    bgCard: 'rgba(255, 255, 255, 0.85)',
    bgBadge: 'rgba(230, 230, 230, 0.9)',
    bgNavMobile: 'rgba(245, 245, 245, 0.95)',
    selectionBg: '#6366f1',
    selectionText: 'white',
    scrollbarThumb: '#a5b4fc',
    scrollbarTrack: '#e5e7eb',
    textPrimary: '#1f2937',
    textSecondary: '#6b7280',
    textAccent: '#6366f1',
  },
};

export const templateDarkTheme: ThemeSpec = {
  id: 'template-dark',
  displayName: 'Template Dark',
  colors: {
    bgPrimary: '#1e1e2e',
    bgCard: 'rgba(30, 30, 46, 0.85)',
    bgBadge: 'rgba(40, 40, 60, 0.9)',
    bgNavMobile: 'rgba(30, 30, 46, 0.95)',
    selectionBg: '#a78bfa',
    selectionText: 'black',
    scrollbarThumb: '#818cf8',
    scrollbarTrack: '#1e1e2e',
    textPrimary: '#e5e7eb',
    textSecondary: '#9ca3af',
    textAccent: '#a78bfa',
  },
};
