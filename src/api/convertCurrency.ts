'use server';

import { apiKey, apiUrl } from './constants';

interface ConvertResponse {
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

const tenMinutesInSeconds = 60 * 10;

const headers = new Headers();
headers.append('apikey', apiKey!);

export const convertCurrency = async (
  currencyFrom: string,
  currencyTo: string,
  amount: string
): Promise<{ data: { result: number; rate: number } | null }> => {
  try {
    const response = await fetch(
      `${apiUrl}/convert?&to=${currencyTo}&from=${currencyFrom}&amount=${amount}`,
      {
        redirect: 'follow',
        headers,
        next: { revalidate: tenMinutesInSeconds },
      }
    );
    const data: ConvertResponse = await response.json();

    return { data: { result: data.result, rate: data.info.rate } };
  } catch {
    return { data: null };
  }
};

export default convertCurrency;
