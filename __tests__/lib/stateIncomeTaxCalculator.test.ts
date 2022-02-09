import { SupportedStates } from '../../src/lib/data/supportedStates';
import { StateTaxBreakdown, TaxBracket, TaxPayload } from '../../src/types';
import {
  ohioIncomeTaxBracketsArray,
  ohioIncomeTaxBracketsObject,
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
} from '../../src/lib/taxBrackets/stateTaxes/PA-IncomeTax';
import {
  indianaIncomeTaxBracketsArray,
  indianaIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/IN-IncomeTax';
import {
  illinoisIncomeTaxBracketsArray,
  illinoisIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/IL-IncomeTax';
import {
  iowaIncomeTaxBracketsArray,
  iowaIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/IA-IncomeTax';
import {
  michiganIncomeTaxBracketsArray,
  michiganIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/MI-IncomeTax';
import { MaritalStatus } from '../../src/lib/data/maritalStatus';
import {
  kansasMarriedIncomeTaxBracketsArray,
  kansasMarriedIncomeTaxBracketsObject,
  kansasSingleIncomeTaxBracketsArray,
  kansasSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/KS-IncomeTax';
import {
  minnesotaMarriedIncomeTaxBracketsArray,
  minnesotaMarriedIncomeTaxBracketsObject,
  minnesotaSingleIncomeTaxBracketsArray,
  minnesotaSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/MN-IncomeTax';
import {
  nebraskaMarriedIncomeTaxBracketsArray,
  nebraskaMarriedIncomeTaxBracketsObject,
  nebraskaSingleIncomeTaxBracketsArray,
  nebraskaSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/NE-IncomeTax';
import {
  northDakotaMarriedIncomeTaxBracketsArray,
  northDakotaMarriedIncomeTaxBracketsObject,
  northDakotaSingleIncomeTaxBracketsArray,
  northDakotaSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/ND-IncomeTax';
import {
  wisconsinMarriedIncomeTaxBracketsArray,
  wisconsinMarriedIncomeTaxBracketsObject,
  wisconsinSingleIncomeTaxBracketsArray,
  wisconsinSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/WI-IncomeTax';
import {
  arizonaMarriedIncomeTaxBracketsArray,
  arizonaMarriedIncomeTaxBracketsObject,
  arizonaSingleIncomeTaxBracketsArray,
  arizonaSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/AZ-IncomeTax';
import {
  newMexicoMarriedFilingSeparatelyIncomeTaxBracketsArray, newMexicoMarriedFilingSeparatelyIncomeTaxBracketsObject,
  newMexicoMarriedIncomeTaxBracketsArray,
  newMexicoMarriedIncomeTaxBracketsObject,
  newMexicoSingleIncomeTaxBracketsArray,
  newMexicoSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/NM-IncomeTax';
import {
  oklahomaMarriedIncomeTaxBracketsArray,
  oklahomaMarriedIncomeTaxBracketsObject,
  oklahomaSingleIncomeTaxBracketsArray,
  oklahomaSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/OK-IncomeTax';
import {
  northCarolinaIncomeTaxBracketsArray,
  northCarolinaIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/NC-IncomeTax';
import {
  arkansasIncomeTaxBracketsArray,
  arkansasIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/AR-IncomeTax';
import {
  alabamaMarriedIncomeTaxBracketsArray,
  alabamaMarriedIncomeTaxBracketsObject,
  alabamaSingleIncomeTaxBracketsArray,
  alabamaSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/AL-IncomeTax';
import {
  georgiaMarriedIncomeTaxBracketsArray,
  georgiaMarriedIncomeTaxBracketsObject,
  georgiaSingleIncomeTaxBracketsArray,
  georgiaSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/GA-IncomeTax';
import {
  louisianaMarriedIncomeTaxBracketsArray,
  louisianaMarriedIncomeTaxBracketsObject,
  louisianaSingleIncomeTaxBracketsArray,
  louisianaSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/LA-IncomeTax';
import {
  mississippiIncomeTaxBracketsArray,
  mississippiIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/MS-IncomeTax';
import {
  southCarolinaIncomeTaxBracketsArray,
  southCarolinaIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/SC-IncomeTax';
import {
  coloradoIncomeTaxBracketsArray,
  coloradoIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/CO-IncomeTax';
import {
  utahIncomeTaxBracketsArray,
  utahIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/UT-IncomeTax';
import {
  oregonMarriedIncomeTaxBracketsArray,
  oregonMarriedIncomeTaxBracketsObject,
  oregonSingleIncomeTaxBracketsArray,
  oregonSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/OR-IncomeTax';
import {
  montanaIncomeTaxBracketsArray,
  montanaIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/MT-IncomeTax';
import {
  idahoMarriedIncomeTaxBracketsArray,
  idahoMarriedIncomeTaxBracketsObject,
  idahoSingleIncomeTaxBracketObject,
  idahoSingleIncomeTaxBracketsArray,
} from '../../src/lib/taxBrackets/stateTaxes/ID-IncomeTax';
import {
  hawaiiMarriedIncomeTaxBracketsArray,
  hawaiiMarriedIncomeTaxBracketsObject,
  hawaiiSingleIncomeTaxBracketsArray,
  hawaiiSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/HI-IncomeTax';
import {
  californiaMarriedIncomeTaxBracketsArray,
  californiaMarriedIncomeTaxBracketsObject,
  californiaSingleIncomeTaxBracketsArray,
  californiaSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/CA-IncomeTax';
import {
  connecticutSingleIncomeTaxBracketsArray,
  connecticutSingleIncomeTaxBracketsObject,
  connecticutMarriedIncomeTaxBracketsArray,
  connecticutMarriedIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/CT-IncomeTax';
import {
  massachusettsIncomeTaxBracketsArray,
  massachusettsIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/MA-IncomeTax';
import {
  virginiaIncomeTaxBracketsArray,
  virginiaIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/VA-IncomeTax';
import {
  washingtonDCIncomeTaxBracketsArray,
  washingtonDCIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/DC-IncomeTax';
import {
  westVirginiaIncomeTaxBracketsArray,
  westVirginiaIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/WV-IncomeTax';
import {
  maineMarriedIncomeTaxBracketsArray,
  maineMarriedIncomeTaxBracketsObject,
  maineSingleIncomeTaxBracketsArray,
  maineSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/ME-IncomeTax';
import {
  vermontMarriedIncomeTaxBracketsArray,
  vermontMarriedIncomeTaxBracketsObject,
  vermontSingleIncomeTaxBracketsArray,
  vermontSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/VT-IncomeTax';
import {
  newYorkIncomeTaxBracketsArray,
  newYorkIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/NY-IncomeTax';
import {
  marylandMarriedIncomeTaxBracketsArray,
  marylandMarriedIncomeTaxBracketsObject,
  marylandSingleIncomeTaxBracketsArray,
  marylandSingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/MD-IncomeTax';
import {
  delawareIncomeTaxBracketsArray,
  delawareIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/DE-IncomeTax';
import {
  newJerseyMarriedIncomeTaxBracketsArray,
  newJerseyMarriedIncomeTaxBracketsObject,
  newJerseySingleIncomeTaxBracketsArray,
  newJerseySingleIncomeTaxBracketsObject,
} from '../../src/lib/taxBrackets/stateTaxes/NJ-IncomeTax';

describe('test findStateTaxBracketList', () => {
  test('should return the tax brackets for Ohio', () => {
    const state: string = SupportedStates.Ohio;
    const maritalStatus: string = MaritalStatus.Single;

    const expectedTaxBracketList: TaxBracket[] = ohioIncomeTaxBracketsArray;
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
  });

  test('should return the empty array for default case', () => {
    const state = '';
    const maritalStatus: string = MaritalStatus.Single;

    const expectedTaxBracketList: TaxBracket[] = [];
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
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

    const expectedTaxBracket: TaxBracket = ohioIncomeTaxBracketsObject.seventhBracket;
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
    const taxBracket: TaxBracket = ohioIncomeTaxBracketsObject.seventhBracket;
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

describe('test Alabama state income tax', () => {
  test('should return state tax amount for Alabama and income of $0, single status', () => {
    const state: string = SupportedStates.Alabama;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = alabamaSingleIncomeTaxBracketsArray;
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

    const expectedTaxBracket: TaxBracket = alabamaSingleIncomeTaxBracketsObject.alabamaFirstBracket;
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

  test('should return state tax amount for Alabama and income of $100,000, single status', () => {
    const state: string = SupportedStates.Alabama;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = alabamaSingleIncomeTaxBracketsArray;
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

    const expectedTaxBracket: TaxBracket = arkansasIncomeTaxBracketsObject.arkansasFourthBracket;
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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

    const expectedTaxBracket: TaxBracket = arkansasIncomeTaxBracketsObject.arkansasFourthBracket;
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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
  test('should return state tax amount for Illinois and income of $0', () => {
    const state: string = SupportedStates.Illinois;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = illinoisIncomeTaxBracketsArray;
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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

  test('should return state tax amount for Illinois and income of $100,000', () => {
    const state: string = SupportedStates.Illinois;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = ONE_HUNDRED_THOUSAND;

    const expectedTaxBracketList: TaxBracket[] = illinoisIncomeTaxBracketsArray;
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

    const expectedTaxBracket: TaxBracket = iowaIncomeTaxBracketsObject.ninthBracket;
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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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

describe('test Louisiana state income tax', () => {
  test('should return state tax amount for Louisiana and income of $0, single status', () => {
    const state: string = SupportedStates.Louisiana;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = louisianaSingleIncomeTaxBracketsArray;
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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

    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

    const expectedTaxBracket: TaxBracket = ohioIncomeTaxBracketsObject.seventhBracket;
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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

    const expectedTaxBracket: TaxBracket = oklahomaSingleIncomeTaxBracketsObject.oklahomaSingleSixthBracket;
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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

    const expectedTaxBracket: TaxBracket = oklahomaMarriedIncomeTaxBracketsObject.oklahomaMarriedSixthBracket;
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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualBreakdown: StateTaxBreakdown = calculateStateTaxes(
      state, maritalStatus, annualIncome,
    );

    expect(actualBreakdown).toEqual(expectedBreakdown);
  });
});

describe('test Utah state income tax', () => {
  test('should return state tax amount for Utah and income of $0, single status', () => {
    const state: string = SupportedStates.Utah;
    const maritalStatus: string = MaritalStatus.Single;
    const annualIncome = 0;

    const expectedTaxBracketList: TaxBracket[] = utahIncomeTaxBracketsArray;
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
    const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);

    expect(actualTaxBracketList).toEqual(expectedTaxBracketList);

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
