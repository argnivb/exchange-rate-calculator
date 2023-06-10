import StyledComponentsRegistry from '@/styles/styledComponentsRegistry';
import GlobalStyle from '@/styles/globalStyle';
import Providers from '@/providers';

export const metadata = {
  title: 'Exchange Rate Calculator',
  description: 'Easily convert currency values with our Exchange Rate Calculator. Get up-to-date exchange rates for all major currencies, including USD, EUR, GBP, JPY, and more. Our simple and intuitive interface makes it easy to quickly convert between currencies and stay informed about the latest exchange rates.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyle />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
