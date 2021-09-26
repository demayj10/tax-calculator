import { parseFloatOrZero } from '../../src/lib/helpers';

describe('test parseFloatOrZero', () => {
  test('receives empty value and returns 0', () => {
    const value = '';
    const expectedResult = 0;

    const actualResult = parseFloatOrZero(value);

    expect(actualResult).toBe(expectedResult);
  });

  test('receives non empty value and returns float value', () => {
    const value = '1000.70';
    const expectedResult = 1000.70;

    const actualResult = parseFloatOrZero(value);

    expect(actualResult).toBe(expectedResult);
  });
});
