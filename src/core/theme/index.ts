import type { DefaultTheme } from 'styled-components';

import { Colors } from './colors';
import { Spacing } from './spacing';
import { Radius } from './radius';

export const theme: DefaultTheme = {
  colors: Colors,
  spacing: Spacing,
  radius: Radius,
};

export type ThemeType = typeof theme;
