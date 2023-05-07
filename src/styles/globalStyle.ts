'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    min-width: 320px;
    font-family: ${({ theme }) => theme.typography.fonts.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.medium};
    color: ${({ theme }) => theme.colors.text}
  }
`;

export default GlobalStyle;
