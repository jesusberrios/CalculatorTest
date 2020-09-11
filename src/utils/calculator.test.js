import { calculateFn } from './calculator';

describe('CalculatorTest', () => {
  it('should clean string for use eval', () => {
    const values = '043x2+x/';
    const result = calculateFn(values);
    expect(result).toBe(86);
  });
  it('should remove unnecessary cero', () => {
    const values2 = '000.43x2';
    const result = calculateFn(values2);
    expect(result).toBe(0.86);
  });
  it('should subtract correctly', () => {
    const values3 = '0-2';
    const result = calculateFn(values3);
    expect(result).toBe(-2);
  });
  it('should add correctly and remove unnecessary cero', () => {
    const values4 = '0002+2';
    const result = calculateFn(values4);
    expect(result).toBe(4);
  });
  it('should divided correctly and remove unnecessary cero', () => {
    const values5 = '0002%2';
    const result = calculateFn(values5);
    expect(result).toBe(1);
  });
  it('should return syntax error if input is incorrect', () => {
    const values5 = '0002%*2';
    const result = calculateFn(values5);
    expect(result).toBe('Syntax error');
  });
  it('should return cero if input is cero', () => {
    const values5 = '0';
    const result = calculateFn(values5);
    expect(result).toBe(0);
  });
});
