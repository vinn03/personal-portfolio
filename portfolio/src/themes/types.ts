export interface ThemeColors {
  bgPrimary: string;
  bgCard: string;
  bgBadge: string;
  bgNavMobile: string;
  selectionBg: string;
  selectionText: string;
  scrollbarThumb: string;
  scrollbarTrack: string;
  textPrimary: string;
  textSecondary: string;
  textAccent: string;
}

export interface ThemeSpec {
  id: string;
  displayName: string;
  colors: ThemeColors;
}

export type ThemeVariant = 'light' | 'dark';
