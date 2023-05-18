import 'styled-components';
import { theme } from '@/providers/ThemeProvider';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
