import { apiUrl, apiKey } from './constants';

type CurrenciesResponse = {
  success: boolean;
  symbols: {
    [key: string]: string;
  };
};

const oneDayInSeconds = 60 * 60 * 24;

const headers = new Headers();
headers.append('apikey', apiKey!);

export const getCurrencies = async (): Promise<{ data: string[] }> => {
  try {
    const response = await fetch(`${apiUrl}/symbols`, {
      redirect: 'follow',
      headers,
      next: { revalidate: oneDayInSeconds },
    });
    const data: CurrenciesResponse = await response.json();

    return { data: Object.keys(data.symbols) };
  } catch {
    return { data: [] };
  }
};
