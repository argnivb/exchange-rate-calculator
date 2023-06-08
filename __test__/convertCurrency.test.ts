import { convertCurrency } from '@/api';

describe('convertCurrency', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns the correct conversion result and rate when successful', async () => {
    const mockResponse = { result: 123.45, info: { rate: 1.23 } };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const { data } = await convertCurrency('USD', 'EUR', '100');

    expect(data).toEqual({
      result: mockResponse.result,
      rate: mockResponse.info.rate,
    });
  });

  it('returns null when conversion fails', async () => {
    const mockFetchPromise = Promise.reject(new Error('Failed to fetch'));
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const { data } = await convertCurrency('USD', 'EUR', '100');

    expect(data).toBeNull();
  });
});
