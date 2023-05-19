import * as S from './styles';

export const ExchangeRateCalculator = () => {
  return (
    <S.Container data-testid="exchange-rate-calculator">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return null;
        }}
      >
        <S.Card>
          <S.CurrenciesWrapper>
            <p>USD</p>
            <span>to</span>
            <p>EUR</p>
          </S.CurrenciesWrapper>
          <S.AmountInput type="text" name="quantity" placeholder="Amount" />
          <S.Button type="submit">Convert</S.Button>
        </S.Card>
      </form>
      <S.ExchangeRateResult>18825.10</S.ExchangeRateResult>
    </S.Container>
  );
};

export default ExchangeRateCalculator;
