import { Props } from 'react-select';
import { StyledSelect } from './styles';

const currencies = [
  { value: 'usd', label: 'USD' },
  { value: 'eur', label: 'EUR' },
  { value: 'cad', label: 'CAD' },
];

interface CurrencySelectProps extends Props {}

export const CurrencySelect = ({ id, name, theme, ...props }: Props) => {
  return (
    <StyledSelect
      instanceId={id}
      options={currencies}
      defaultValue={currencies[0]}
      {...props}
    />
  );
};

CurrencySelect.displayName = 'CurrencySelect';

export default CurrencySelect;
