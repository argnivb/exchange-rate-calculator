import Home from '@/app/page';
import { render, screen } from './utils';

jest.mock('../src/api/convertCurrency', () => ({
  convertCurrency: jest.fn().mockResolvedValueOnce({}),
}));

describe('Home', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a heading', async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve({ symbols: {} }),
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    render(await Home());

    const heading = screen.getByRole('heading', {
      name: /Exchange Rate Calculator/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders ExchangeRateCalculator', async () => {
    render(await Home());

    const exchangeRateCalculatorElement = screen.getByTestId(
      'exchange-rate-calculator'
    );
    expect(exchangeRateCalculatorElement).toBeInTheDocument();
  });

  it('renders Home page unchanged', async () => {
    const { container } = render(await Home());
    expect(container).toMatchSnapshot();
  });
});
