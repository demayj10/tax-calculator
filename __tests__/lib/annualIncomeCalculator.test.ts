import { HourlyIncomeState } from '../../src/components/inputForm/inputFormSlice';
import { calculateGrossAnnualIncome } from '../../src/lib/annualIncomeCalculator';

describe('test calculateGrossAnnualIncome', () => {
  test('calculate annual income with no overtime', () => {
    const {
      hourlyRate,
      averageHoursWorked,
      overtimeRate,
      averageOvertimeHoursWorked,
    }: HourlyIncomeState = {
      hourlyRate: '10',
      averageHoursWorked: '40',
      overtimeRate: '',
      averageOvertimeHoursWorked: '',
    };
    const expectedResult = 20800;

    const actualResult: number = calculateGrossAnnualIncome(
      {
        hourlyRate, averageHoursWorked, overtimeRate, averageOvertimeHoursWorked,
      },
    );

    expect(actualResult).toBe(expectedResult);
  });

  test('calculate annual income with overtime', () => {
    const {
      hourlyRate,
      averageHoursWorked,
      overtimeRate,
      averageOvertimeHoursWorked,
    }: HourlyIncomeState = {
      hourlyRate: '10',
      averageHoursWorked: '40',
      overtimeRate: '15',
      averageOvertimeHoursWorked: '10',
    };
    const expectedResult = 28600;

    const actualResult: number = calculateGrossAnnualIncome(
      {
        hourlyRate, averageHoursWorked, overtimeRate, averageOvertimeHoursWorked,
      },
    );

    expect(actualResult).toBe(expectedResult);
  });
});
