import localFont from 'next/font/local';

const MontserratVariable = localFont({
  src: '../../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
});

export const base = {
  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  fonts: {
    heading: MontserratVariable.style.fontFamily,
    body: MontserratVariable.style.fontFamily,
  },
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '20px',
    '24px',
    '36px',
    '48px',
    '60px',
    '80px',
    '96px',
  ],
  fontWeights: {
    heading: 700,
    mid: 600,
    body: 400,
  },
  lineHeights: {
    heading: 1.2,
    body: 1.4,
  },
  radius: {
    none: '0',
    normal: '4px',
    rounded: '30px',
  },
  shadow: '0px 1px 3px 0px',
  animation: {
    transition: '0.3s',
  },
};

// Light theme colours
export const light = {
  primary: '#1E90FF',
  primaryLight: '#D8EBFF',
  primaryDark: '#0066CC',
  background: '#ffffff',
  border: '#e5e5e5',
  text: '#202224',
  grey: '#aaaaaa',
  disabled: '#aaaaaa',
  error: '#ff3333',
  white: '#fff',
  black: '#000',
};
