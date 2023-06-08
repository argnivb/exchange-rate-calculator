import { getCurrencies } from '@/api/getCurrencies';

describe('getCurrencies', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of currencies when the API call is successful', async () => {
    const mockSuccessResponse = {
      success: true,
      symbols: {
        USD: 'United States Dollar',
        EUR: 'Euro',
        GBP: 'British Pound Sterling',
      },
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const result = await getCurrencies();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ data: ['USD', 'EUR', 'GBP'] });
  });

  it('should return an empty list of currencies when an error occurs during the API call', async () => {
    const mockFetchPromise = Promise.reject(new Error('Failed to fetch'));
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const result = await getCurrencies();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ data: [] });
  });
});
