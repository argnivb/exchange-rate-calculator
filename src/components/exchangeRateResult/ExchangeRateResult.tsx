import * as S from './styles';

interface ExchangeRateResultProps {
  loading: boolean;
  exchangeResult: {
    result: number;
    rate: number;
  } | null;
  currencyFrom: string;
  currencyTo: string;
  amount: string;
}

export const formatExchangeResult = (result: number) => {
  const [wholePart, decimalPart] = result.toString().split('.');

  if (decimalPart) {
    const decimalPartFirstTwo = decimalPart.slice(0, 2);
    const decimalPartRest = decimalPart.slice(2);

    return {
      formattedResult: `${wholePart}.${decimalPartFirstTwo}`,
      decimalPartRest: decimalPartRest,
    };
  }

  return { formattedResult: wholePart };
};

export const ExchangeRateResult = ({
  loading,
  exchangeResult,
  currencyFrom,
  currencyTo,
  amount,
}: ExchangeRateResultProps) => {
  if (!exchangeResult || loading) {
    return null;
  }

  const { result, rate } = exchangeResult;
  const { formattedResult, decimalPartRest } = formatExchangeResult(result);

  return (
    <div>
      <S.ExchangeResult data-testid="exchangeResult">
        <p>{formattedResult}</p>
        {decimalPartRest && <span>{decimalPartRest}</span>}
        <span> {currencyTo}</span>
      </S.ExchangeResult>
      <S.ExchangeRate>
        {amount} {currencyFrom} * {rate} {currencyTo}
      </S.ExchangeRate>
    </div>
  );
};

export default ExchangeRateResult;
