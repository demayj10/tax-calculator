import { SupportedStates } from '../../src/lib/data/supportedStates';
import {
  StateTaxBreakdown, StateTaxInformation, TaxBracket, TaxPayload,
} from '../../src/types';
import {
  ohioIncomeTaxBracketsArray,
  ohioIncomeTaxBracketsObject,
  OHIO_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/OH-IncomeTax';
import {
  calculateStateIncomeTax,
  calculateStateTaxes,
  findStateIncomeTaxBracket,
  findStateTaxBracketList,
} from '../../src/lib/stateIncomeTaxCalculator';
import { ONE_HUNDRED_THOUSAND } from '../../src/lib/taxBrackets/constants';
import {
  pennsylvaniaTaxBracketsArray,
  pennsylvaniaTaxBracketsObject,
  PENNSYLVANIA_MARRIED_STANDARD_DEDUCTION,
  PENNSYLVANIA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/PA-IncomeTax';
import {
  indianaIncomeTaxBracketsArray,
  indianaIncomeTaxBracketsObject,
  INDIANA_MARRIED_STANDARD_DEDUCTION,
  INDIANA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/IN-IncomeTax';
import {
  illinoisIncomeTaxBracketsArray,
  illinoisIncomeTaxBracketsObject,
  ILLINOIS_MARRIED_STANDARD_DEDUCTION,
  ILLINOIS_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/IL-IncomeTax';
import {
  iowaIncomeTaxBracketsArray,
  iowaIncomeTaxBracketsObject,
  IOWA_MARRIED_STANDARD_DEDUCTION,
  IOWA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/IA-IncomeTax';
import {
  michiganIncomeTaxBracketsArray,
  michiganIncomeTaxBracketsObject,
  MICHIGAN_MARRIED_STANDARD_DEDUCTION,
  MICHIGAN_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/MI-IncomeTax';
import { MaritalStatus } from '../../src/lib/data/maritalStatus';
import {
  kansasMarriedIncomeTaxBracketsArray,
  kansasMarriedIncomeTaxBracketsObject,
  kansasSingleIncomeTaxBracketsArray,
  kansasSingleIncomeTaxBracketsObject,
  KANSAS_MARRIED_STANDARD_DEDUCTION,
  KANSAS_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/KS-IncomeTax';
import {
  minnesotaMarriedIncomeTaxBracketsArray,
  minnesotaMarriedIncomeTaxBracketsObject,
  minnesotaSingleIncomeTaxBracketsArray,
  minnesotaSingleIncomeTaxBracketsObject,
  MINNESOTA_MARRIED_STANDARD_DEDUCTION,
  MINNESOTA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/MN-IncomeTax';
import {
  nebraskaMarriedIncomeTaxBracketsArray,
  nebraskaMarriedIncomeTaxBracketsObject,
  nebraskaSingleIncomeTaxBracketsArray,
  nebraskaSingleIncomeTaxBracketsObject,
  NEBRASKA_MARRIED_STANDARD_DEDUCTION,
  NEBRASKA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/NE-IncomeTax';
import {
  northDakotaMarriedIncomeTaxBracketsArray,
  northDakotaMarriedIncomeTaxBracketsObject,
  northDakotaSingleIncomeTaxBracketsArray,
  northDakotaSingleIncomeTaxBracketsObject,
  NORTH_DAKOTA_MARRIED_STANDARD_DEDUCTION,
  NORTH_DAKOTA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/ND-IncomeTax';
import {
  wisconsinMarriedIncomeTaxBracketsArray,
  wisconsinMarriedIncomeTaxBracketsObject,
  wisconsinSingleIncomeTaxBracketsArray,
  wisconsinSingleIncomeTaxBracketsObject,
  WISCONSIN_MARRIED_STANDARD_DEDUCTION,
  WISCONSIN_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/WI-IncomeTax';
import {
  arizonaMarriedIncomeTaxBracketsArray,
  arizonaMarriedIncomeTaxBracketsObject,
  arizonaSingleIncomeTaxBracketsArray,
  arizonaSingleIncomeTaxBracketsObject,
  ARIZONA_MARRIED_STANDARD_DEDUCTION,
  ARIZONA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/AZ-IncomeTax';
import {
  newMexicoMarriedFilingSeparatelyIncomeTaxBracketsArray, newMexicoMarriedFilingSeparatelyIncomeTaxBracketsObject,
  newMexicoMarriedIncomeTaxBracketsArray,
  newMexicoMarriedIncomeTaxBracketsObject,
  newMexicoSingleIncomeTaxBracketsArray,
  newMexicoSingleIncomeTaxBracketsObject,
  NEW_MEXICO_MARRIED_STANDARD_DEDUCTION,
  NEW_MEXICO_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/NM-IncomeTax';
import {
  oklahomaMarriedIncomeTaxBracketsArray,
  oklahomaMarriedIncomeTaxBracketsObject,
  oklahomaSingleIncomeTaxBracketsArray,
  oklahomaSingleIncomeTaxBracketsObject,
  OKLAHOMA_MARRIED_STANDARD_DEDUCTION,
  OKLAHOMA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/OK-IncomeTax';
import {
  northCarolinaIncomeTaxBracketsArray,
  northCarolinaIncomeTaxBracketsObject,
  NORTH_CAROLINA_MARRIED_STANDARD_DEDUCTION,
  NORTH_CAROLINA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/NC-IncomeTax';
import {
  arkansasIncomeTaxBracketsArray,
  arkansasIncomeTaxBracketsObject,
  ARKANSAS_MARRIED_STANDARD_DEDUCTION,
  ARKANSAS_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/AR-IncomeTax';
import {
  alabamaMarriedIncomeTaxBracketsArray,
  alabamaMarriedIncomeTaxBracketsObject,
  alabamaSingleIncomeTaxBracketsArray,
  alabamaSingleIncomeTaxBracketsObject,
  ALABAMA_MARRIED_STANDARD_DEDUCTION,
  ALABAMA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/AL-IncomeTax';
import {
  georgiaMarriedIncomeTaxBracketsArray,
  georgiaMarriedIncomeTaxBracketsObject,
  georgiaSingleIncomeTaxBracketsArray,
  georgiaSingleIncomeTaxBracketsObject,
  GEORGIA_MARRIED_STANDARD_DEDUCTION,
  GEORGIA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/GA-IncomeTax';
import {
  louisianaMarriedIncomeTaxBracketsArray,
  louisianaMarriedIncomeTaxBracketsObject,
  louisianaSingleIncomeTaxBracketsArray,
  louisianaSingleIncomeTaxBracketsObject,
  LOUISIANA_MARRIED_STANDARD_DEDUCTION,
  LOUISIANA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/LA-IncomeTax';
import {
  mississippiIncomeTaxBracketsArray,
  mississippiIncomeTaxBracketsObject,
  MISSISSIPPI_MARRIED_STANDARD_DEDUCTION,
  MISSISSIPPI_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/MS-IncomeTax';
import {
  southCarolinaIncomeTaxBracketsArray,
  southCarolinaIncomeTaxBracketsObject,
  SOUTH_CAROLINA_MARRIED_STANDARD_DEDUCTION,
  SOUTH_CAROLINA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/SC-IncomeTax';
import {
  coloradoIncomeTaxBracketsArray,
  coloradoIncomeTaxBracketsObject,
  COLORADO_MARRIED_STANDARD_DEDUCTION,
  COLORADO_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/CO-IncomeTax';
import {
  utahIncomeTaxBracketsArray,
  utahIncomeTaxBracketsObject,
  UTAH_MARRIED_STANDARD_DEDUCTION,
  UTAH_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/UT-IncomeTax';
import {
  oregonMarriedIncomeTaxBracketsArray,
  oregonMarriedIncomeTaxBracketsObject,
  oregonSingleIncomeTaxBracketsArray,
  oregonSingleIncomeTaxBracketsObject,
  OREGON_MARRIED_STANDARD_DEDUCTION,
  OREGON_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/OR-IncomeTax';
import {
  montanaIncomeTaxBracketsArray,
  montanaIncomeTaxBracketsObject,
  MONTANA_MARRIED_STANDARD_DEDUCTION,
  MONTANA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/MT-IncomeTax';
import {
  idahoMarriedIncomeTaxBracketsArray,
  idahoMarriedIncomeTaxBracketsObject,
  idahoSingleIncomeTaxBracketObject,
  idahoSingleIncomeTaxBracketsArray,
  IDAHO_MARRIED_STANDARD_DEDUCTION,
  IDAHO_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/ID-IncomeTax';
import {
  hawaiiMarriedIncomeTaxBracketsArray,
  hawaiiMarriedIncomeTaxBracketsObject,
  hawaiiSingleIncomeTaxBracketsArray,
  hawaiiSingleIncomeTaxBracketsObject,
  HAWAII_MARRIED_STANDARD_DEDUCTION,
  HAWAII_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/HI-IncomeTax';
import {
  californiaMarriedIncomeTaxBracketsArray,
  californiaMarriedIncomeTaxBracketsObject,
  californiaSingleIncomeTaxBracketsArray,
  californiaSingleIncomeTaxBracketsObject,
  CALIFORNIA_MARRIED_STANDARD_DEDUCTION,
  CALIFORNIA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/CA-IncomeTax';
import {
  connecticutSingleIncomeTaxBracketsArray,
  connecticutSingleIncomeTaxBracketsObject,
  connecticutMarriedIncomeTaxBracketsArray,
  connecticutMarriedIncomeTaxBracketsObject,
  CONNECTICUT_SINGLE_STANDARD_DEDUCTION,
  CONNECTICUT_MARRIED_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/CT-IncomeTax';
import {
  massachusettsIncomeTaxBracketsArray,
  massachusettsIncomeTaxBracketsObject,
  MASSACHUSETTS_MARRIED_STANDARD_DEDUCTION,
  MASSACHUSETTS_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/MA-IncomeTax';
import {
  virginiaIncomeTaxBracketsArray,
  virginiaIncomeTaxBracketsObject,
  VIRGINIA_MARRIED_STANDARD_DEDUCTION,
  VIRGINIA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/VA-IncomeTax';
import {
  washingtonDCIncomeTaxBracketsArray,
  washingtonDCIncomeTaxBracketsObject,
  WASHINGTON_DC_MARRIED_STANDARD_DEDUCTION,
  WASHINGTON_DC_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/DC-IncomeTax';
import {
  westVirginiaIncomeTaxBracketsArray,
  westVirginiaIncomeTaxBracketsObject,
  WEST_VIRGINIA_MARRIED_STANDARD_DEDUCTION,
  WEST_VIRGINIA_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/WV-IncomeTax';
import {
  maineMarriedIncomeTaxBracketsArray,
  maineMarriedIncomeTaxBracketsObject,
  maineSingleIncomeTaxBracketsArray,
  maineSingleIncomeTaxBracketsObject,
  MAINE_MARRIED_STANDARD_DEDUCTION,
  MAINE_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/ME-IncomeTax';
import {
  vermontMarriedIncomeTaxBracketsArray,
  vermontMarriedIncomeTaxBracketsObject,
  vermontSingleIncomeTaxBracketsArray,
  vermontSingleIncomeTaxBracketsObject,
  VERMONT_MARRIED_STANDARD_DEDUCTION,
  VERMONT_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/VT-IncomeTax';
import {
  newYorkIncomeTaxBracketsArray,
  newYorkIncomeTaxBracketsObject,
  NEW_YORK_MARRIED_STANDARD_DEDUCTION,
  NEW_YORK_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/NY-IncomeTax';
import {
  marylandMarriedIncomeTaxBracketsArray,
  marylandMarriedIncomeTaxBracketsObject,
  marylandSingleIncomeTaxBracketsArray,
  marylandSingleIncomeTaxBracketsObject,
  MARYLAND_MARRIED_STANDARD_DEDUCTION,
  MARYLAND_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/MD-IncomeTax';
import {
  delawareIncomeTaxBracketsArray,
  delawareIncomeTaxBracketsObject,
  DELAWARE_MARRIED_STANDARD_DEDUCTION,
  DELAWARE_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/DE-IncomeTax';
import {
  newJerseyMarriedIncomeTaxBracketsArray,
  newJerseyMarriedIncomeTaxBracketsObject,
  newJerseySingleIncomeTaxBracketsArray,
  newJerseySingleIncomeTaxBracketsObject,
  NEW_JERSEY_MARRIED_STANDARD_DEDUCTION,
  NEW_JERSEY_SINGLE_STANDARD_DEDUCTION,
} from '../../src/lib/taxBrackets/stateTaxes/NJ-IncomeTax';
import { kentuckyIncomeTaxBracketsArray, kentuckyIncomeTaxBracketsObject, KENTUCKY_MARRIED_STANDARD_DEDUCTION, KENTUCKY_SINGLE_STANDARD_DEDUCTION } from '../../src/lib/taxBrackets/stateTaxes/KY-IncomeTax';

describe('test findStateTaxBracketList', () => {
  test('should return the tax brackets for Ohio', () => {
    const state: string = SupportedStates.Ohio;
    const maritalStatus: string = MaritalStatus.Single;

    const expectedTaxBracketList: TaxBracket[] = ohioIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = OHIO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);
  });

  test('should return the empty array for default case', () => {
    const state = '';
    const maritalStatus: string = MaritalStatus.Single;

    const expectedTaxBracketList: TaxBracket[] = [];
    const expectedStandardDeduction: number = OHIO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);
  });
});

describe('test findStateIncomeTaxBracket', () => {
  test('should return the tax bracket for Ohio and income of $0', () => {
    const annualIncome = 0;
    const stateIncomeBrackets: TaxBracket[] = ohioIncomeTaxBracketsArray;

    const expectedTaxBracket: TaxBracket = ohioIncomeTaxBracketsObject.ohioFirstBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, stateIncomeBrackets);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
  });

  test('should return the tax bracket for Ohio and income of $100,000', () => {
    const annualIncome: number = ONE_HUNDRED_THOUSAND;
    const stateIncomeBrackets: TaxBracket[] = ohioIncomeTaxBracketsArray;

    const expectedTaxBracket: TaxBracket = ohioIncomeTaxBracketsObject.ohioSeventhBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, stateIncomeBrackets);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
  });
});

describe('test calculateStateIncomeTax', () => {
  test('should return state tax amount for Ohio and income of $0', () => {
    const annualIncome = 0;
    const taxBracket: TaxBracket = ohioIncomeTaxBracketsObject.ohioFirstBracket;
    const { taxRate } = taxBracket;

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, taxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Ohio and income of $100,000', () => {
    const annualIncome: number = ONE_HUNDRED_THOUSAND;
    const taxBracket: TaxBracket = ohioIncomeTaxBracketsObject.ohioSeventhBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = taxBracket;

    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, taxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test calculateStateTaxes', () => {
  test('should return state tax amount from calculateStateTaxes and income of $0, single status', () => {
    const state: string = SupportedStates.Alabama;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedStateTaxBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0.02,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: true,
    };
    const actualStateTaxBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualStateTaxBreakdown).toEqual(expectedStateTaxBreakdown);
  });
});

describe('test Alabama state income tax', () => {
  test('should return state tax amount for Alabama and income of $0, single status', () => {
    const state: string = SupportedStates.Alabama;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = alabamaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ALABAMA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = alabamaSingleIncomeTaxBracketsObject.alabamaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const adjustedIncome = (actualStandardDeduction > annualIncome ? 0 : annualIncome - actualStandardDeduction);
    const actualTaxBracket = findStateIncomeTaxBracket(adjustedIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Alabama and income of $100,000, single status', () => {
    const state: string = SupportedStates.Alabama;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = alabamaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ALABAMA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = alabamaSingleIncomeTaxBracketsObject.alabamaSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Alabama and income of $100,000, married status', () => {
    const state: string = SupportedStates.Alabama;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = alabamaMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ALABAMA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = alabamaMarriedIncomeTaxBracketsObject.alabamaMarriedThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Alaska state income tax', () => {
  test('should return state tax amount of nothing for Alaska and income of $100,000', () => {
    const state: string = SupportedStates.Alaska;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Arizona state income tax', () => {
  test('should return state tax amount for Arizona and income of $0, single status', () => {
    const state: string = SupportedStates.Arizona;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = arizonaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ARIZONA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = arizonaSingleIncomeTaxBracketsObject.arizonaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Arizona and income of $100,000, single status', () => {
    const state: string = SupportedStates.Arizona;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = arizonaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ARIZONA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = arizonaSingleIncomeTaxBracketsObject.arizonaSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Arizona and income of $100,000, married status', () => {
    const state: string = SupportedStates.Arizona;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = arizonaMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ARIZONA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = arizonaMarriedIncomeTaxBracketsObject.arizonaMarriedSecondBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Arkansas state income tax', () => {
  test('should return state tax amount for Arkansas and income of $0, single status', () => {
    const state: string = SupportedStates.Arkansas;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = arkansasIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ARKANSAS_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = arkansasIncomeTaxBracketsObject.arkansasFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Arkansas and income of $100,000, single status', () => {
    const state: string = SupportedStates.Arkansas;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = arkansasIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ARKANSAS_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = arkansasIncomeTaxBracketsObject.arkansasSixthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Arkansas and income of $100,000, married status', () => {
    const state: string = SupportedStates.Arkansas;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = arkansasIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ARKANSAS_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = arkansasIncomeTaxBracketsObject.arkansasSixthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test California state income tax', () => {
  test('should return state tax amount for California and income of $0, single status', () => {
    const state: string = SupportedStates.California;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = californiaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = CALIFORNIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = californiaSingleIncomeTaxBracketsObject.californiaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for California and income of $100,000, single status', () => {
    const state: string = SupportedStates.California;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = californiaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = CALIFORNIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = californiaSingleIncomeTaxBracketsObject.californiaSingleSixthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for California and income of $100,000, married status', () => {
    const state: string = SupportedStates.California;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = californiaMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = CALIFORNIA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = californiaMarriedIncomeTaxBracketsObject.californiaMarriedFifthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Colorado state income tax', () => {
  test('should return state tax amount for Colorado and income of $0, single status', () => {
    const state: string = SupportedStates.Colorado;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = coloradoIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = COLORADO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = coloradoIncomeTaxBracketsObject.coloradoFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Colorado and income of $100,000, single status', () => {
    const state: string = SupportedStates.Colorado;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = coloradoIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = COLORADO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = coloradoIncomeTaxBracketsObject.coloradoFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Colorado and income of $100,000, married status', () => {
    const state: string = SupportedStates.Colorado;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = coloradoIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = COLORADO_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = coloradoIncomeTaxBracketsObject.coloradoFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Connecticut state income tax', () => {
  test('should return state tax amount for Connecticut and income of $0, single status', () => {
    const state: string = SupportedStates.Connecticut;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = connecticutSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = CONNECTICUT_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = connecticutSingleIncomeTaxBracketsObject.connecticutFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Connecticut and income of $100,000, single status', () => {
    const state: string = SupportedStates.Connecticut;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = connecticutSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = CONNECTICUT_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = connecticutSingleIncomeTaxBracketsObject.connecticutSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Connecticut and income of $100,000, married status', () => {
    const state: string = SupportedStates.Connecticut;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = connecticutMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = CONNECTICUT_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = connecticutMarriedIncomeTaxBracketsObject.connecticutMarriedSecondBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Delaware state income tax', () => {
  test('should return state tax amount for Delaware and income of $0 and single', () => {
    const state: string = SupportedStates.Delaware;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = delawareIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = DELAWARE_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = delawareIncomeTaxBracketsObject.delawareFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Delaware and income of $100,000 and single', () => {
    const state: string = SupportedStates.Delaware;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = delawareIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = DELAWARE_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = delawareIncomeTaxBracketsObject.delawareSeventhBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Delaware and income of $100,000 and married', () => {
    const state: string = SupportedStates.Delaware;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = delawareIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = DELAWARE_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = delawareIncomeTaxBracketsObject.delawareSeventhBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Florida state income tax', () => {
  test('should return state tax amount of nothing for Florida and income of $100,000', () => {
    const state: string = SupportedStates.Florida;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Georgia state income tax', () => {
  test('should return state tax amount for Georgia and income of $0, single status', () => {
    const state: string = SupportedStates.Georgia;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = georgiaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = GEORGIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = georgiaSingleIncomeTaxBracketsObject.georgiaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Georgia and income of $100,000, single status', () => {
    const state: string = SupportedStates.Georgia;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = georgiaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = GEORGIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = georgiaSingleIncomeTaxBracketsObject.georgiaSingleSixthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Georgia and income of $100,000, married status', () => {
    const state: string = SupportedStates.Georgia;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = georgiaMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = GEORGIA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = georgiaMarriedIncomeTaxBracketsObject.georgiaMarriedSixthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Hawaii state income tax', () => {
  test('should return state tax amount for Hawaii and income of $0, single status', () => {
    const state: string = SupportedStates.Hawaii;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = hawaiiSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = HAWAII_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = hawaiiSingleIncomeTaxBracketsObject.hawaiiFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Hawaii and income of $100,000, single status', () => {
    const state: string = SupportedStates.Hawaii;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = hawaiiSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = HAWAII_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = hawaiiSingleIncomeTaxBracketsObject.hawaiiSingleNinthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Hawaii and income of $100,000, married status', () => {
    const state: string = SupportedStates.Hawaii;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = hawaiiMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = HAWAII_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = hawaiiMarriedIncomeTaxBracketsObject.hawaiiMarriedNinthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Idaho state income tax', () => {
  test('should return state tax amount for Idaho and income of $0, single status', () => {
    const state: string = SupportedStates.Idaho;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = idahoSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = IDAHO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = idahoSingleIncomeTaxBracketObject.idahoFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Idaho and income of $100,000, single status', () => {
    const state: string = SupportedStates.Idaho;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = idahoSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = IDAHO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = idahoSingleIncomeTaxBracketObject.idahoSingleFifthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Idaho and income of $100,000, married status', () => {
    const state: string = SupportedStates.Idaho;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = idahoMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = IDAHO_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = idahoMarriedIncomeTaxBracketsObject.idahoMarriedFifthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Illinois state income tax', () => {
  test('should return state tax amount for Illinois and income of $0, single status', () => {
    const state: string = SupportedStates.Illinois;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = illinoisIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ILLINOIS_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = illinoisIncomeTaxBracketsObject.illinoisTaxBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Illinois and income of $100,000, single status', () => {
    const state: string = SupportedStates.Illinois;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = illinoisIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ILLINOIS_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = illinoisIncomeTaxBracketsObject.illinoisTaxBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);
    const roundedAmount: number = Math.round(actualBreakdown.taxAmount);
    const roundedBreakdown: TaxPayload = {
      taxRate: actualBreakdown.taxRate,
      taxAmount: roundedAmount,
    };

    expect(roundedBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Illinois and income of $100,000, married status', () => {
    const state: string = SupportedStates.Illinois;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = illinoisIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = ILLINOIS_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = illinoisIncomeTaxBracketsObject.illinoisTaxBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);
    const roundedAmount: number = Math.round(actualBreakdown.taxAmount);
    const roundedBreakdown: TaxPayload = {
      taxRate: actualBreakdown.taxRate,
      taxAmount: roundedAmount,
    };

    expect(roundedBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Indiana state income tax', () => {
  test('should return state tax amount for Indiana and income of $0', () => {
    const state: string = SupportedStates.Indiana;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = indianaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = INDIANA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = indianaIncomeTaxBracketsObject.indianaTaxBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Indiana and income of $100,000', () => {
    const state: string = SupportedStates.Indiana;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = indianaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = INDIANA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = indianaIncomeTaxBracketsObject.indianaTaxBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Indiana and income of $100,000, married', () => {
    const state: string = SupportedStates.Indiana;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = indianaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = INDIANA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = indianaIncomeTaxBracketsObject.indianaTaxBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Iowa state income tax', () => {
  test('should return state tax amount for Iowa and income of $0', () => {
    const state: string = SupportedStates.Iowa;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = iowaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = IOWA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = iowaIncomeTaxBracketsObject.iowaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Iowa and income of $100,000', () => {
    const state: string = SupportedStates.Iowa;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = iowaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = IOWA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = iowaIncomeTaxBracketsObject.iowaNinthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Iowa and income of $100,000, married status', () => {
    const state: string = SupportedStates.Iowa;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = iowaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = IOWA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = iowaIncomeTaxBracketsObject.iowaNinthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Kansas state income tax', () => {
  test('should return state tax amount for Kansas and income of $0 and single', () => {
    const state: string = SupportedStates.Kansas;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = kansasSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = KANSAS_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = kansasSingleIncomeTaxBracketsObject.kansasFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Kansas and income of $100,000 and single', () => {
    const state: string = SupportedStates.Kansas;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = kansasSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = KANSAS_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = kansasSingleIncomeTaxBracketsObject.kansasSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Kansas and income of $100,000 and married status', () => {
    const state: string = SupportedStates.Kansas;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = kansasMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = KANSAS_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = kansasMarriedIncomeTaxBracketsObject.kansasMarriedThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Kentucky state income tax', () => {
  test('should return state tax amount for Kentucky and income of $0, single status', () => {
    const state: string = SupportedStates.Kentucky;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = kentuckyIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = KENTUCKY_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = kentuckyIncomeTaxBracketsObject.kentuckyFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Kentucky and income of $100,000, single status', () => {
    const state: string = SupportedStates.Kentucky;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = kentuckyIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = KENTUCKY_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = kentuckyIncomeTaxBracketsObject.kentuckyFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Kentucky and income of $100,000, married status', () => {
    const state: string = SupportedStates.Kentucky;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = kentuckyIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = KENTUCKY_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = kentuckyIncomeTaxBracketsObject.kentuckyFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Louisiana state income tax', () => {
  test('should return state tax amount for Louisiana and income of $0, single status', () => {
    const state: string = SupportedStates.Louisiana;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = louisianaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = LOUISIANA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = louisianaSingleIncomeTaxBracketsObject.louisianaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Louisiana and income of $100,000, single status', () => {
    const state: string = SupportedStates.Louisiana;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = louisianaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = LOUISIANA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = louisianaSingleIncomeTaxBracketsObject.louisianaSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Louisiana and income of $100,000, married status', () => {
    const state: string = SupportedStates.Louisiana;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = louisianaMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = LOUISIANA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = louisianaMarriedIncomeTaxBracketsObject.louisianaMarriedSecondBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Maine state income tax', () => {
  test('should return state tax amount for Maine and income of $0 and single', () => {
    const state: string = SupportedStates.Maine;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = maineSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MAINE_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = maineSingleIncomeTaxBracketsObject.maineFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Maine and income of $100,000 and single', () => {
    const state: string = SupportedStates.Maine;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = maineSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MAINE_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = maineSingleIncomeTaxBracketsObject.maineSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Maine and income of $100,000 and married', () => {
    const state: string = SupportedStates.Maine;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = maineMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MAINE_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = maineMarriedIncomeTaxBracketsObject.maineMarriedSecondBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Massachusetts state income tax', () => {
  test('should return state tax amount for Massachusetts and income of $0, single status', () => {
    const state: string = SupportedStates.Massachusetts;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = massachusettsIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MASSACHUSETTS_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = massachusettsIncomeTaxBracketsObject.massachusettsZeroBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Massachusetts and income of $100,000, single status', () => {
    const state: string = SupportedStates.Massachusetts;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = massachusettsIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MASSACHUSETTS_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = massachusettsIncomeTaxBracketsObject.massachusettsFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Massachusetts and income of $100,000, married status', () => {
    const state: string = SupportedStates.Massachusetts;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = massachusettsIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MASSACHUSETTS_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = massachusettsIncomeTaxBracketsObject.massachusettsFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Maryland state income tax', () => {
  test('should return state tax amount for Maryland and income of $0 and single', () => {
    const state: string = SupportedStates.Maryland;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = marylandSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MARYLAND_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = marylandSingleIncomeTaxBracketsObject.marylandFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Maryland and income of $100,000 and single', () => {
    const state: string = SupportedStates.Maryland;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = marylandSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MARYLAND_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = marylandSingleIncomeTaxBracketsObject.marylandFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Maryland and income of $100,000 and married', () => {
    const state: string = SupportedStates.Maryland;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = marylandMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MARYLAND_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = marylandMarriedIncomeTaxBracketsObject.marylandFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Michigan state income tax', () => {
  test('should return state tax amount for Michigan and income of $0', () => {
    const state: string = SupportedStates.Michigan;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = michiganIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MICHIGAN_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = michiganIncomeTaxBracketsObject.michiganTaxBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Michigan and income of $100,000', () => {
    const state: string = SupportedStates.Michigan;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = michiganIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MICHIGAN_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = michiganIncomeTaxBracketsObject.michiganTaxBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Michigan and income of $100,000, married status', () => {
    const state: string = SupportedStates.Michigan;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = michiganIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MICHIGAN_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = michiganIncomeTaxBracketsObject.michiganTaxBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Minnesota state income tax', () => {
  test('should return state tax amount for Minnesota and income of $0 and single', () => {
    const state: string = SupportedStates.Minnesota;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = minnesotaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MINNESOTA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = minnesotaSingleIncomeTaxBracketsObject.minnesotaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Minnesota and income of $100,000 and single', () => {
    const state: string = SupportedStates.Minnesota;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = minnesotaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MINNESOTA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = minnesotaSingleIncomeTaxBracketsObject.minnesotaSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Minnesota and income of $100,000 and married', () => {
    const state: string = SupportedStates.Minnesota;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = minnesotaMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MINNESOTA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = minnesotaMarriedIncomeTaxBracketsObject.minnesotaMarriedSecondBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Mississippi state income tax', () => {
  test('should return state tax amount for Mississippi and income of $0, single status', () => {
    const state: string = SupportedStates.Mississippi;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = mississippiIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MISSISSIPPI_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = mississippiIncomeTaxBracketsObject.mississippiZeroBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Mississippi and income of $100,000, single status', () => {
    const state: string = SupportedStates.Mississippi;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = mississippiIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MISSISSIPPI_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = mississippiIncomeTaxBracketsObject.mississippiThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Mississippi and income of $100,000, married status', () => {
    const state: string = SupportedStates.Mississippi;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = mississippiIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MISSISSIPPI_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = mississippiIncomeTaxBracketsObject.mississippiThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Montana state income tax', () => {
  test('should return state tax amount for Montana and income of $0, single status', () => {
    const state: string = SupportedStates.Montana;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = montanaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MONTANA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = montanaIncomeTaxBracketsObject.montanaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Montana and income of $100,000, single status', () => {
    const state: string = SupportedStates.Montana;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = montanaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MONTANA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = montanaIncomeTaxBracketsObject.montanaSeventhBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Montana and income of $100,000, married status', () => {
    const state: string = SupportedStates.Montana;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = montanaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = MONTANA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = montanaIncomeTaxBracketsObject.montanaSeventhBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Nebraska state income tax', () => {
  test('should return state tax amount for Nebraska and income of $0 and single', () => {
    const state: string = SupportedStates.Nebraska;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = nebraskaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEBRASKA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = nebraskaSingleIncomeTaxBracketsObject.nebraskaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Nebraska and income of $100,000 and single', () => {
    const state: string = SupportedStates.Nebraska;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = nebraskaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEBRASKA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = nebraskaSingleIncomeTaxBracketsObject.nebraskaSingleFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Nebraska and income of $100,000 and married', () => {
    const state: string = SupportedStates.Nebraska;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = nebraskaMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEBRASKA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = nebraskaMarriedIncomeTaxBracketsObject.nebraskaMarriedFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Nevada state income tax', () => {
  test('should return state tax amount of nothing for Nevada and income of $100,000', () => {
    const state: string = SupportedStates.Nevada;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test New Jersey state income tax', () => {
  test('should return state tax amount for New Jersey and income of $0 and single', () => {
    const state: string = SupportedStates.NewJersey;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = newJerseySingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_JERSEY_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = newJerseySingleIncomeTaxBracketsObject.newJerseyFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for New Jersey and income of $100,000 and single', () => {
    const state: string = SupportedStates.NewJersey;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = newJerseySingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_JERSEY_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = newJerseySingleIncomeTaxBracketsObject.newJerseySingleFifthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for New Jersey and income of $100,000 and married', () => {
    const state: string = SupportedStates.NewJersey;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = newJerseyMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_JERSEY_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = newJerseyMarriedIncomeTaxBracketsObject.newJerseyMarriedFifthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test New Hampshire state income tax', () => {
  test('should return state tax amount of nothing for New Hampshire and income of $100,000', () => {
    const state: string = SupportedStates.NewHampshire;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test New Mexico state income tax', () => {
  test('should return state tax amount for New Mexico and income of $0, single status', () => {
    const state: string = SupportedStates.NewMexico;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = newMexicoSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_MEXICO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = newMexicoSingleIncomeTaxBracketsObject.newMexicoFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for New Mexico and income of $100,000, single status', () => {
    const state: string = SupportedStates.NewMexico;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = newMexicoSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_MEXICO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = newMexicoSingleIncomeTaxBracketsObject.newMexicoSingleFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for New Mexico and income of $100,000, married status', () => {
    const state: string = SupportedStates.NewMexico;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = newMexicoMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_MEXICO_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = newMexicoMarriedIncomeTaxBracketsObject.newMexicoMarriedFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for New Mexico and income of $100,000, married filing separately status', () => {
    const state: string = SupportedStates.NewMexico;
    const maritalStatus: string = MaritalStatus.MarriedSeparately;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = newMexicoMarriedFilingSeparatelyIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_MEXICO_SINGLE_STANDARD_DEDUCTION;

    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = (
      newMexicoMarriedFilingSeparatelyIncomeTaxBracketsObject.newMexicoMarriedFilingSeparatelyFourthBracket
    );
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test New York state income tax', () => {
  test('should return state tax amount for New York and income of $0 and single', () => {
    const state: string = SupportedStates.NewYork;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = newYorkIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_YORK_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = newYorkIncomeTaxBracketsObject.newYorkFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for New York and income of $100,000', () => {
    const state: string = SupportedStates.NewYork;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = newYorkIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_YORK_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = newYorkIncomeTaxBracketsObject.newYorkSixthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for New York and income of $100,000, married status', () => {
    const state: string = SupportedStates.NewYork;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = newYorkIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NEW_YORK_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = newYorkIncomeTaxBracketsObject.newYorkSixthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test North Dakota state income tax', () => {
  test('should return state tax amount for North Dakota and income of $0 and single', () => {
    const state: string = SupportedStates.NorthDakota;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = northDakotaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NORTH_DAKOTA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = northDakotaSingleIncomeTaxBracketsObject.northDakotaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for North Dakota and income of $100,000 and single', () => {
    const state: string = SupportedStates.NorthDakota;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = northDakotaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NORTH_DAKOTA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = northDakotaSingleIncomeTaxBracketsObject.northDakotaSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for North Dakota and income of $100,000 and married', () => {
    const state: string = SupportedStates.NorthDakota;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = northDakotaMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NORTH_DAKOTA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = northDakotaMarriedIncomeTaxBracketsObject.northDakotaMarriedSecondBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test North Carolina state income tax', () => {
  test('should return state tax amount for North Carolina and income of $0 and single', () => {
    const state: string = SupportedStates.NorthCarolina;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = northCarolinaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NORTH_CAROLINA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = northCarolinaIncomeTaxBracketsObject.northCarolinaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount of nothing for North Carolina and income of $100,000', () => {
    const state: string = SupportedStates.NorthCarolina;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = northCarolinaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NORTH_CAROLINA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = northCarolinaIncomeTaxBracketsObject.northCarolinaFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount of nothing for North Carolina and income of $100,000, married status', () => {
    const state: string = SupportedStates.NorthCarolina;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = northCarolinaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = NORTH_CAROLINA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = northCarolinaIncomeTaxBracketsObject.northCarolinaFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Ohio state income tax', () => {
  test('should return state tax amount for Ohio and income of $0', () => {
    const state: string = SupportedStates.Ohio;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = ohioIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = OHIO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = ohioIncomeTaxBracketsObject.ohioFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Ohio and income of $100,000', () => {
    const state: string = SupportedStates.Ohio;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = ohioIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = OHIO_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = ohioIncomeTaxBracketsObject.ohioSeventhBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Oklahoma state income tax', () => {
  test('should return state tax amount for Oklahoma and income of $0, single status', () => {
    const state: string = SupportedStates.Oklahoma;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = oklahomaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = OKLAHOMA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = oklahomaSingleIncomeTaxBracketsObject.oklahomaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Oklahoma and income of $100,000, single status', () => {
    const state: string = SupportedStates.Oklahoma;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = oklahomaSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = OKLAHOMA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = oklahomaSingleIncomeTaxBracketsObject.oklahomaSingleSeventhBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Oklahoma and income of $100,000, married status', () => {
    const state: string = SupportedStates.Oklahoma;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = oklahomaMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = OKLAHOMA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = oklahomaMarriedIncomeTaxBracketsObject.oklahomaMarriedSeventhBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Oregon state income tax', () => {
  test('should return state tax amount for Oregon and income of $0, single status', () => {
    const state: string = SupportedStates.Oregon;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = oregonSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = OREGON_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = oregonSingleIncomeTaxBracketsObject.oregonFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Oregon and income of $100,000, single status', () => {
    const state: string = SupportedStates.Oregon;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = oregonSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = OREGON_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = oregonSingleIncomeTaxBracketsObject.oregonSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Oregon and income of $100,000, married status', () => {
    const state: string = SupportedStates.Oregon;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = oregonMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = OREGON_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = oregonMarriedIncomeTaxBracketsObject.oregonMarriedThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Pennsylvania state income tax', () => {
  test('should return state tax amount for Pennsylvania and income of $0', () => {
    const state: string = SupportedStates.Pennsylvania;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = pennsylvaniaTaxBracketsArray;
    const expectedStandardDeduction: number = PENNSYLVANIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = pennsylvaniaTaxBracketsObject.pennsylvaniaTaxBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Pennsylvania and income of $100,000', () => {
    const state: string = SupportedStates.Pennsylvania;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = pennsylvaniaTaxBracketsArray;
    const expectedStandardDeduction: number = PENNSYLVANIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = pennsylvaniaTaxBracketsObject.pennsylvaniaTaxBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Pennsylvania and income of $100,000, married status', () => {
    const state: string = SupportedStates.Pennsylvania;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = pennsylvaniaTaxBracketsArray;
    const expectedStandardDeduction: number = PENNSYLVANIA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = pennsylvaniaTaxBracketsObject.pennsylvaniaTaxBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test South Carolina state income tax', () => {
  test('should return state tax amount for South Carolina and income of $0', () => {
    const state: string = SupportedStates.SouthCarolina;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = southCarolinaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = SOUTH_CAROLINA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = southCarolinaIncomeTaxBracketsObject.southCarolinaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for South Carolina and income of $100,000', () => {
    const state: string = SupportedStates.SouthCarolina;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = southCarolinaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = SOUTH_CAROLINA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = southCarolinaIncomeTaxBracketsObject.southCarolinaSixthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for South Carolina and income of $100,000, married status', () => {
    const state: string = SupportedStates.SouthCarolina;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = southCarolinaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = SOUTH_CAROLINA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = southCarolinaIncomeTaxBracketsObject.southCarolinaSixthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test South Dakota state income tax', () => {
  test('should return state tax amount of nothing for South Dakota and income of $100,000', () => {
    const state: string = SupportedStates.SouthDakota;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Tennessee state income tax', () => {
  test('should return state tax amount of nothing for Tennessee and income of $100,000', () => {
    const state: string = SupportedStates.Tennessee;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Texas state income tax', () => {
  test('should return state tax amount of nothing for Texas and income of $100,000', () => {
    const state: string = SupportedStates.Texas;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Utah state income tax', () => {
  test('should return state tax amount for Utah and income of $0, single status', () => {
    const state: string = SupportedStates.Utah;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = utahIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = UTAH_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = utahIncomeTaxBracketsObject.utahFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Utah and income of $100,000, single status', () => {
    const state: string = SupportedStates.Utah;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = utahIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = UTAH_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = utahIncomeTaxBracketsObject.utahFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Utah and income of $100,000, married status', () => {
    const state: string = SupportedStates.Utah;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = utahIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = UTAH_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = utahIncomeTaxBracketsObject.utahFirstBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Vermont state income tax', () => {
  test('should return state tax amount for Vermont and income of $0 and single', () => {
    const state: string = SupportedStates.Vermont;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = vermontSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = VERMONT_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = vermontSingleIncomeTaxBracketsObject.vermontFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Vermont and income of $100,000 and single', () => {
    const state: string = SupportedStates.Vermont;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = vermontSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = VERMONT_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = vermontSingleIncomeTaxBracketsObject.vermontSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Vermont and income of $100,000 and married', () => {
    const state: string = SupportedStates.Vermont;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = vermontMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = VERMONT_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = vermontMarriedIncomeTaxBracketsObject.vermontMarriedSecondBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Virginia state income tax', () => {
  test('should return state tax amount for Virginia and income of $0, single status', () => {
    const state: string = SupportedStates.Virginia;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = virginiaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = VIRGINIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = virginiaIncomeTaxBracketsObject.virginiaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Virginia and income of $100,000, single status', () => {
    const state: string = SupportedStates.Virginia;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = virginiaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = VIRGINIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = virginiaIncomeTaxBracketsObject.viriginaFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Virginia and income of $100,000, married status', () => {
    const state: string = SupportedStates.Virginia;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = virginiaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = VIRGINIA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = virginiaIncomeTaxBracketsObject.viriginaFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Washington state income tax', () => {
  test('should return state tax amount of nothing for Washington and income of $100,000', () => {
    const state: string = SupportedStates.Washington;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Washington D.C. state income tax', () => {
  test('should return state tax amount for Washington D.C. and income of $0, single status', () => {
    const state: string = SupportedStates.WashingtonDC;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = washingtonDCIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = WASHINGTON_DC_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = washingtonDCIncomeTaxBracketsObject.washingtonDCFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Washington D.C. and income of $100,000, single status', () => {
    const state: string = SupportedStates.WashingtonDC;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = washingtonDCIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = WASHINGTON_DC_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = washingtonDCIncomeTaxBracketsObject.washingtonDCFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Washington D.C. and income of $100,000, married status', () => {
    const state: string = SupportedStates.WashingtonDC;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = washingtonDCIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = WASHINGTON_DC_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = washingtonDCIncomeTaxBracketsObject.washingtonDCFourthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test West Virginia state income tax', () => {
  test('should return state tax amount for West Virginia and income of $0, single status', () => {
    const state: string = SupportedStates.WestVirginia;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = westVirginiaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = WEST_VIRGINIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = westVirginiaIncomeTaxBracketsObject.westVirginiaFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for West Virginia and income of $100,000, single status', () => {
    const state: string = SupportedStates.WestVirginia;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = westVirginiaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = WEST_VIRGINIA_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = westVirginiaIncomeTaxBracketsObject.westVirginiaFifthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for West Virginia and income of $100,000, married status', () => {
    const state: string = SupportedStates.WestVirginia;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = westVirginiaIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = WEST_VIRGINIA_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = westVirginiaIncomeTaxBracketsObject.westVirginiaFifthBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Wisconsin state income tax', () => {
  test('should return state tax amount for Wisconsin and income of $0, single status', () => {
    const state: string = SupportedStates.Wisconsin;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = wisconsinSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = WISCONSIN_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = wisconsinSingleIncomeTaxBracketsObject.wisconsinFirstBracket;
    const { taxRate } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: 0,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Wisconsin and income of $100,000, single status', () => {
    const state: string = SupportedStates.Wisconsin;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = wisconsinSingleIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = WISCONSIN_SINGLE_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = wisconsinSingleIncomeTaxBracketsObject.wisconsinSingleThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });

  test('should return state tax amount for Wisconsin and income of $100,000, married status', () => {
    const state: string = SupportedStates.Wisconsin;
    const maritalStatus: string = MaritalStatus.MarriedJointly;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = wisconsinMarriedIncomeTaxBracketsArray;
    const expectedStandardDeduction: number = WISCONSIN_MARRIED_STANDARD_DEDUCTION;
    const {
      taxBracketList: actualTaxBracketList,
      standardDeduction: actualStandardDeduction,
    }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    expect(actualStandardDeduction).toEqual(expectedStandardDeduction);

    const expectedTaxBracket: TaxBracket = wisconsinMarriedIncomeTaxBracketsObject.wisconsinMarriedThirdBracket;
    const { minimumToQualify, taxRate, taxTotalToThisBracket } = expectedTaxBracket;
    const actualTaxBracket = findStateIncomeTaxBracket(annualIncome, actualTaxBracketList);

    expect(actualTaxBracket).toEqual(expectedTaxBracket);
    const expectedTaxAmount: number = (
      (annualIncome - minimumToQualify) * taxRate + taxTotalToThisBracket
    );

    const expectedBreakdown: TaxPayload = {
      taxRate,
      taxAmount: expectedTaxAmount,
    };
    const actualBreakdown: TaxPayload = calculateStateIncomeTax(annualIncome, actualTaxBracket);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Wyoming state income tax', () => {
  test('should return state tax amount of nothing for Wyoming and income of $100,000', () => {
    const state: string = SupportedStates.Wyoming;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedBreakdown: StateTaxBreakdown = {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(state, maritalStatus, annualIncome);

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});
