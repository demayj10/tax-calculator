import { HourlyIncomeState } from '../components/inputForm/inputFormSlice';
import { parseFloatOrZero } from './helpers';

export const calculateGrossAnnualIncome = ({
  hourlyRate, averageHoursWorked, overtimeRate, averageOvertimeHoursWorked,
}: HourlyIncomeState): number => {
  const overtimeAmount: number = (
    parseFloatOrZero(overtimeRate) * parseFloatOrZero(averageOvertimeHoursWorked)
  );
  const hourlyAmount: number = parseFloatOrZero(hourlyRate) * parseFloatOrZero(averageHoursWorked);

  return (overtimeAmount + hourlyAmount) * 52;
};
