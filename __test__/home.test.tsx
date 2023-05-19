import Home from '@/app/page';
import { render, screen } from './utils';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Exchange Rate Calculator/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders ExchangeRateCalculator', () => {
    render(<Home />);

    const exchangeRateCalculatorElement = screen.getByTestId(
      'exchange-rate-calculator'
    );
    expect(exchangeRateCalculatorElement).toBeInTheDocument();
  });

  it('renders Home page unchanged', async () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
