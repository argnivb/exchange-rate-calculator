'use client';

import Select, { StylesConfig } from 'react-select';
import { UseControllerProps, useController } from 'react-hook-form';
import { FormValues } from '@/components/exchangeRateCalculator';
import { useTheme } from 'styled-components';

const currencies = [
  { value: 'usd', label: 'USD' },
  { value: 'eur', label: 'EUR' },
  { value: 'cad', label: 'CAD' },
];

interface CurrencySelectProps extends UseControllerProps<FormValues> {}

export const CurrencySelect = (props: CurrencySelectProps) => {
  const styledTheme = useTheme();
  const { field } = useController({ rules: { required: true }, ...props });

  const styles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      padding: `${styledTheme.space[2]} ${styledTheme.space[3]}`,
      borderRadius: styledTheme.radius.rounded,
      border: 'none',
      width: '126px',
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    menu: (styles) => ({
      ...styles,
      overflow: 'hidden',
      borderRadius: styledTheme.radius.rounded,
      boxShadow: `0 1px 10px ${styledTheme.colors.primaryLight}`,
    }),
    menuList: (styles) => ({ ...styles, padding: 0 }),

    option: (styles) => ({
      ...styles,
      textAlign: 'center',
      width: '100%',
    }),
  };

  return (
    <Select
      inputId={field.name}
      instanceId={field.name}
      options={currencies}
      {...field}
      theme={(theme) => ({
        ...theme,
        borderRadius: parseInt(styledTheme.radius.rounded),
        colors: {
          ...theme.colors,
          primary: styledTheme.colors.primary,
        },
      })}
      styles={styles}
    />
  );
};

export default CurrencySelect;
