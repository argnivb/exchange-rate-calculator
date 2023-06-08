'use client';

import { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CurrencySelect from '../currencySelect';
import ConvertButton from '../convertButton';
import ExchangeRateResult from '../exchangeRateResult';
import * as S from './styles';

const currencyPattern = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/;

const defaultValues = {
  currencyFrom: { label: 'USD', value: 'USD' },
  currencyTo: { label: 'EUR', value: 'EUR' },
  amount: '',
};

export type FormValues = typeof defaultValues;

const currenciesToOptions = (currencies: string[]) =>
  currencies.map((currency) => ({ label: currency, value: currency }));

export const ExchangeRateCalculator = ({
  currencies,
}: {
  currencies: string[];
}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting, isDirty },
    control,
    getValues,
  } = useForm({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    (data) => console.log(data),
    []
  );

  const currencyOptions = currenciesToOptions(currencies);

  return (
    <S.Container data-testid="exchange-rate-calculator">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <S.Card>
          <S.CurrenciesWrapper>
            <CurrencySelect
              name="currencyFrom"
              control={control}
              options={currencyOptions}
            />
            <span>to</span>
            <CurrencySelect
              name="currencyTo"
              control={control}
              options={currencyOptions}
            />
          </S.CurrenciesWrapper>
          <S.AmountInput
            type="number"
            placeholder="Amount"
            step="0.01"
            {...register('amount', {
              required: true,
              pattern: currencyPattern,
            })}
          />
          <ConvertButton
            loading={isSubmitting}
            disabled={!isValid || !isDirty || isSubmitting}
          />
        </S.Card>
      </form>

      <ExchangeRateResult
        loading={isSubmitting}
        currencyFrom={getValues('currencyFrom').label}
        currencyTo={getValues('currencyTo').label}
        amount={getValues('amount')}
        exchangeResult={{ rate: 1.5, result: 18825.12 }}
      />
    </S.Container>
  );
};

export default ExchangeRateCalculator;
