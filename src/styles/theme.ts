import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const theme = {
  colors: {
    primary: '#1E90FF',
    secondary: '#FF6347',
    background: '#F5F5F5',
    text: '#333333',
    border: '#E5E5E5',
  },
  typography: {
    fonts: {
      body: inter.style,
      heading: montserrat.style,
    },
    fontSizes: {
      small: '12px',
      medium: '16px',
      large: '24px',
      xlarge: '36px',
      xxlarge: '48px',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
};
