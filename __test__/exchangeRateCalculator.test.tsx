import ExchangeRateCalculator from '@/components/exchangeRateCalculator';
import { render, screen } from './utils';

describe('ExchangeRateCalculator', () => {
  it('renders input fields', () => {
    render(<ExchangeRateCalculator />);

    const amountInputElement = screen.getByPlaceholderText('Amount');
    const submitButtonElement = screen.getByRole('button', { name: 'Convert' });
    expect(amountInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });

  it('renders exchange rate result', () => {
    render(<ExchangeRateCalculator />);

    const exchangeRateResultElement = screen.getByText('18825.10');
    expect(exchangeRateResultElement).toBeInTheDocument();
  });
});
