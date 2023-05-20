import { Props } from 'react-select';
import { StyledSelect } from './styles';

const currencies = [
  { value: 'usd', label: 'USD' },
  { value: 'eur', label: 'EUR' },
  { value: 'cad', label: 'CAD' },
];

export const CurrencySelect = ({ id, theme, ...props }: Props) => {
  return (
    <StyledSelect
      instanceId={id}
      options={currencies}
      defaultValue={currencies[0]}
      {...props}
    />
  );
};

export default CurrencySelect;
