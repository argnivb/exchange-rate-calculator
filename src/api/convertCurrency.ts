import { apiKey, apiUrl } from './constants';

interface convertResponse {
  date: string;
  info: {
    rate: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
  success: boolean;
}

export const convertCurrency = async (
  currencyFrom: string,
  currencyTo: string,
  amount: string
): Promise<{ data: { result: number; rate: number } | null }> => {
  try {
    const response = await fetch(
      `${apiUrl}/convert?apikey=${apiKey}&to=${currencyTo}&from=${currencyFrom}&amount=${amount}`
    );
    const data: convertResponse = await response.json();

    return { data: { result: data.result, rate: data.info.rate } };
  } catch {
    return { data: null };
  }
};
