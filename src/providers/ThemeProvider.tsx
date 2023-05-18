import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { base, light } from '@/styles/theme';

export const theme = { ...base, colors: light };

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
