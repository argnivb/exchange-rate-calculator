import ExchangeRateResult from '@/components/exchangeRateResult';
import { render, screen } from './utils';

const mockExchangeResult = {
  result: 100,
  rate: 1.5,
};

describe('ExchangeRateResult', () => {
  it('renders the exchange result and rate', () => {
    render(
      <ExchangeRateResult
        loading={false}
        exchangeResult={mockExchangeResult}
        currencyFrom="USD"
        currencyTo="EUR"
        amount="50"
      />
    );

    const result = screen.getByTestId('exchangeResult');
    const rate = screen.getByText('50 USD * 1.5 EUR');

    expect(result.textContent).toContain('100 EUR');
    expect(rate).toBeInTheDocument();
  });

  it('does not render anything if exchangeResult is null', () => {
    const { container } = render(
      <ExchangeRateResult
        loading={false}
        exchangeResult={null}
        currencyFrom="USD"
        currencyTo="EUR"
        amount="50"
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it('does not render anything if loading is true', () => {
    const { container } = render(
      <ExchangeRateResult
        loading={true}
        exchangeResult={mockExchangeResult}
        currencyFrom="USD"
        currencyTo="EUR"
        amount="50"
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
