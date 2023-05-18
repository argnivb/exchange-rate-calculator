'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 body {
   background: ${({ theme }) => theme.colors.background};
   color: ${({ theme }) => theme.colors.text};
   font-family: ${({ theme }) => theme.fonts.body};
   font-weight: ${({ theme }) => theme.fontWeights.body};
   line-height: ${({ theme }) => theme.lineHeights.body};
   min-width: 320px;
   padding: 0 1.5rem;
 }
`;

export default GlobalStyle;