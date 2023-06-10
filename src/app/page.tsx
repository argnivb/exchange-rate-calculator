import { getCurrencies } from '@/api';
import ExchangeRateCalculator from '@/components/exchangeRateCalculator';
import * as S from './styles';

export default async function Home() {
  const { data } = await getCurrencies();

  return (
    <S.Container>
      <S.Heading>Exchange Rate Calculator</S.Heading>
      <ExchangeRateCalculator currencies={data} />
    </S.Container>
  );
}
