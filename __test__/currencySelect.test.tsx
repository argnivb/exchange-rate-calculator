import { render, screen } from './utils';
import CurrencySelect from '@/components/currencySelect';
import selectEvent from 'react-select-event';

const defaultValue = { value: 'usd', label: 'USD' };

const MockCurrencySelect = () => (
  <form data-testid="form">
    <label htmlFor="currency">Currency</label>
    <CurrencySelect
      id="currency"
      inputId="currency"
      name="currency"
      defaultValue={defaultValue}
    />
  </form>
);

describe('CurrencySelect', () => {
  it('renders with default value', () => {
    render(<MockCurrencySelect />);

    expect(screen.getByTestId('form')).toHaveFormValues({ currency: 'usd' });
  });

  it('allows users to select a different currency', async () => {
    render(<MockCurrencySelect />);

    await selectEvent.select(screen.getByLabelText('Currency'), 'EUR');
    expect(screen.getByTestId('form')).toHaveFormValues({ currency: 'eur' });
  });

  it('displays the available currency options', async () => {
    render(<MockCurrencySelect />);

    expect(screen.queryByText('EUR')).toBeNull();
    selectEvent.openMenu(screen.getByLabelText('Currency'));
    expect(screen.getAllByText('USD')).toHaveLength(2);
    expect(screen.getByText('EUR')).toBeInTheDocument();
    expect(screen.getByText('CAD')).toBeInTheDocument();
  });
});
