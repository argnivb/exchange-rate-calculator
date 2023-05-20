import CurrencySelect from '../currencySelect';
import * as S from './styles';

// Need Static Id Because Of Rehidratation Failure Warring
const currencySelectFromId = 'currencySelectFrom';
const currencySelectToId = 'currencySelectTo';

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
            <CurrencySelect id={currencySelectFromId} name="currencyFrom" />
            <span>to</span>
            <CurrencySelect id={currencySelectToId} name="currencyTo" />
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
