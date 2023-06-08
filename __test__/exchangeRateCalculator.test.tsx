import ExchangeRateCalculator from '@/components/exchangeRateCalculator';
import { render, screen } from './utils';

const currencies = ['USD', 'EUR', 'CAD'];

describe('ExchangeRateCalculator', () => {
  it('renders CurrencySelect from and To', () => {
    render(<ExchangeRateCalculator currencies={currencies} />);

    const currencySelects = screen.getAllByRole('combobox');

    expect(currencySelects[0]).toBeInTheDocument();
    expect(currencySelects[1]).toBeInTheDocument();
  });

  it('renders input fields', () => {
    render(<ExchangeRateCalculator currencies={currencies} />);

    const amountInputElement = screen.getByPlaceholderText('Amount');
    const submitButtonElement = screen.getByRole('button', { name: 'Convert' });
    expect(amountInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });

  it('does not render exchange rate result initially', () => {
    render(<ExchangeRateCalculator currencies={currencies} />);

    const exchangeRateResultElement = screen.getByTestId(
      'exchange-rate-calculator'
    );
    expect(exchangeRateResultElement.childElementCount).toBe(1);
  });
});
