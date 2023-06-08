import SkeletonLoader from '../skeletonLoader';
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
  if (loading) {
    return (
      <S.LoaderContainer data-testid="loader">
        <SkeletonLoader w={18} h={4} />
        <SkeletonLoader w={14} h={2} />
      </S.LoaderContainer>
    );
  }

  if (!exchangeResult) {
    return null;
  }

  const { result, rate } = exchangeResult;
  const { formattedResult, decimalPartRest } = formatExchangeResult(result);

  return (
    <div data-testid="exchangeResult">
      <S.ExchangeResult>
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
