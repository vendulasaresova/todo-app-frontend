import 'styled-components';

import { Colors } from './colors';
import { Spacing } from './spacing';
import { Radius } from './radius';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Colors;
    spacing: typeof Spacing;
    radius: typeof Radius;
  }
}
