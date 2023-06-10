import { render, screen } from './utils';
import CurrencySelect from '@/components/currencySelect';
import { FormValues } from '@/components/exchangeRateCalculator';
import { useForm } from 'react-hook-form';
import selectEvent from 'react-select-event';

const MockCurrencySelect = () => {
  const { control } = useForm<FormValues>({
    defaultValues: {
      currencyFrom: { label: 'USD', value: 'USD' },
    },
  });

  const currencies = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'CAD', label: 'CAD' },
  ];

  return (
    <form data-testid="form">
      <label htmlFor="currencyFrom">Currency</label>
      <CurrencySelect
        name="currencyFrom"
        control={control}
        options={currencies}
      />
    </form>
  );
};

describe('CurrencySelect', () => {
  it('renders with default value', () => {
    render(<MockCurrencySelect />);

    expect(screen.getByTestId('form')).toHaveFormValues({
      currencyFrom: 'USD',
    });
  });

  it('allows users to select a different currency', async () => {
    render(<MockCurrencySelect />);

    await selectEvent.select(screen.getByLabelText('Currency'), 'EUR');
    expect(screen.getByTestId('form')).toHaveFormValues({
      currencyFrom: 'EUR',
    });
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
