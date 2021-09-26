export const parseFloatOrZero = (value: string): number => {
  if (value === '') {
    return 0;
  }
  return parseFloat(value);
};
