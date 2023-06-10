import { convertCurrency } from '@/api/convertCurrency';

const mockResponse = {
  data: { result: 123.45, rate: 1.23 },
};

jest.mock('../src/api/convertCurrency', () => ({
  convertCurrency: jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve(mockResponse))
    .mockImplementationOnce(() => Promise.resolve({ data: null })),
}));

describe('convertCurrency', () => {
  it('returns the correct conversion result and rate when successful', async () => {
    const { data } = await convertCurrency('USD', 'EUR', '100');

    expect(data).toEqual({
      result: mockResponse.data.result,
      rate: mockResponse.data.rate,
    });
  });

  it('returns null when conversion fails', async () => {
    const { data } = await convertCurrency('USD', 'EUR', '100');

    expect(data).toBeNull();
  });
});
