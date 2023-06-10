import { formatExchangeResult } from '@/components/exchangeRateResult';

describe('formatExchangeResult', () => {
  it('should format a number with two decimal places', () => {
    const result = formatExchangeResult(123.456);
    expect(result.formattedResult).toBe('123.45');
  });

  it('should return the decimal part after the first two decimal', () => {
    const result = formatExchangeResult(123.456);
    expect(result.decimalPartRest).toBe('6');
  });

  it('should return only the whole part if the input number has no decimal part', () => {
    const result = formatExchangeResult(123);
    expect(result.formattedResult).toBe('123');
  });
});
