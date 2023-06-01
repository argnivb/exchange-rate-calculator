'use client';

import { useCallback } from 'react';
import CurrencySelect from '../currencySelect';
import * as S from './styles';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

// Need Static Id Because Of Rehidratation Failure Warring
const currencySelectFromId = 'currencySelectFrom';
const currencySelectToId = 'currencySelectTo';

const currencyPattern = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/;

const defaultValues = {
  currencyFrom: { label: 'USD', value: 'usd' },
  currencyTo: { label: 'USD', value: 'usd' },
  amount: '',
};

type FormValues = typeof defaultValues;

export const ExchangeRateCalculator = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    (data) => console.log(data),
    []
  );

  return (
    <S.Container data-testid="exchange-rate-calculator">
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Card>
          <S.CurrenciesWrapper>
            <Controller
              control={control}
              name="currencyFrom"
              rules={{ required: true }}
              render={({ field: { ref, ...fieldProps } }) => (
                <CurrencySelect id={currencySelectFromId} {...fieldProps} />
              )}
            />
            <span>to</span>
            <Controller
              control={control}
              name="currencyTo"
              rules={{ required: true }}
              render={({ field: { ref, ...fieldProps } }) => (
                <CurrencySelect id={currencySelectToId} {...fieldProps} />
              )}
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

          {/* has to be like this becouse of server and client miss match */}
          {isValid && <S.Button type="submit">Convert</S.Button>}
          {!isValid && (
            <S.Button type="submit" disabled>
              Convert
            </S.Button>
          )}
        </S.Card>
      </form>
      <S.ExchangeRateResult>18825.10</S.ExchangeRateResult>
    </S.Container>
  );
};

export default ExchangeRateCalculator;
