import {
  StateTaxBreakdown,
  StateTaxInformation,
  TaxBracket,
  TaxPayload,
} from '../types';
import { MaritalStatus } from './data/maritalStatus';
import { StatesWithoutIncomeTax, SupportedStates } from './data/supportedStates';
import {
  alabamaMarriedIncomeTaxBracketsArray,
  alabamaSingleIncomeTaxBracketsArray,
  ALABAMA_MARRIED_STANDARD_DEDUCTION,
  ALABAMA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/AL-IncomeTax';
import {
  arkansasIncomeTaxBracketsArray, ARKANSAS_MARRIED_STANDARD_DEDUCTION, ARKANSAS_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/AR-IncomeTax';
import {
  arizonaMarriedIncomeTaxBracketsArray,
  arizonaSingleIncomeTaxBracketsArray,
  ARIZONA_MARRIED_STANDARD_DEDUCTION,
  ARIZONA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/AZ-IncomeTax';
import {
  californiaMarriedIncomeTaxBracketsArray,
  californiaSingleIncomeTaxBracketsArray,
  CALIFORNIA_MARRIED_STANDARD_DEDUCTION,
  CALIFORNIA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/CA-IncomeTax';
import {
  coloradoIncomeTaxBracketsArray,
  COLORADO_MARRIED_STANDARD_DEDUCTION,
  COLORADO_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/CO-IncomeTax';
import {
  connecticutMarriedIncomeTaxBracketsArray,
  connecticutSingleIncomeTaxBracketsArray,
  CONNECTICUT_MARRIED_STANDARD_DEDUCTION,
  CONNECTICUT_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/CT-IncomeTax';
import {
  washingtonDCIncomeTaxBracketsArray,
  WASHINGTON_DC_MARRIED_STANDARD_DEDUCTION,
  WASHINGTON_DC_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/DC-IncomeTax';
import {
  delawareIncomeTaxBracketsArray,
  DELAWARE_MARRIED_STANDARD_DEDUCTION,
  DELAWARE_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/DE-IncomeTax';
import {
  georgiaMarriedIncomeTaxBracketsArray,
  georgiaSingleIncomeTaxBracketsArray,
  GEORGIA_MARRIED_STANDARD_DEDUCTION,
  GEORGIA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/GA-IncomeTax';
import {
  hawaiiMarriedIncomeTaxBracketsArray,
  hawaiiSingleIncomeTaxBracketsArray,
  HAWAII_MARRIED_STANDARD_DEDUCTION,
  HAWAII_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/HI-IncomeTax';
import {
  iowaIncomeTaxBracketsArray,
  IOWA_MARRIED_STANDARD_DEDUCTION,
  IOWA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/IA-IncomeTax';
import {
  idahoMarriedIncomeTaxBracketsArray,
  idahoSingleIncomeTaxBracketsArray,
  IDAHO_MARRIED_STANDARD_DEDUCTION,
  IDAHO_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/ID-IncomeTax';
import {
  illinoisIncomeTaxBracketsArray,
  ILLINOIS_MARRIED_STANDARD_DEDUCTION,
  ILLINOIS_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/IL-IncomeTax';
import {
  indianaIncomeTaxBracketsArray,
  INDIANA_MARRIED_STANDARD_DEDUCTION,
  INDIANA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/IN-IncomeTax';
import {
  kansasMarriedIncomeTaxBracketsArray,
  kansasSingleIncomeTaxBracketsArray,
  KANSAS_MARRIED_STANDARD_DEDUCTION,
  KANSAS_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/KS-IncomeTax';
import {
  louisianaMarriedIncomeTaxBracketsArray,
  louisianaSingleIncomeTaxBracketsArray,
  LOUISIANA_MARRIED_STANDARD_DEDUCTION,
  LOUISIANA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/LA-IncomeTax';
import {
  massachusettsIncomeTaxBracketsArray,
  MASSACHUSETTS_MARRIED_STANDARD_DEDUCTION,
  MASSACHUSETTS_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/MA-IncomeTax';
import {
  marylandMarriedIncomeTaxBracketsArray,
  marylandSingleIncomeTaxBracketsArray,
  MARYLAND_MARRIED_STANDARD_DEDUCTION,
  MARYLAND_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/MD-IncomeTax';
import {
  maineMarriedIncomeTaxBracketsArray,
  maineSingleIncomeTaxBracketsArray,
  MAINE_MARRIED_STANDARD_DEDUCTION,
  MAINE_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/ME-IncomeTax';
import {
  michiganIncomeTaxBracketsArray,
  MICHIGAN_MARRIED_STANDARD_DEDUCTION,
  MICHIGAN_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/MI-IncomeTax';
import {
  minnesotaMarriedIncomeTaxBracketsArray,
  minnesotaSingleIncomeTaxBracketsArray,
  MINNESOTA_MARRIED_STANDARD_DEDUCTION,
  MINNESOTA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/MN-IncomeTax';
import {
  mississippiIncomeTaxBracketsArray,
  MISSISSIPPI_MARRIED_STANDARD_DEDUCTION,
  MISSISSIPPI_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/MS-IncomeTax';
import {
  montanaIncomeTaxBracketsArray,
  MONTANA_MARRIED_STANDARD_DEDUCTION,
  MONTANA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/MT-IncomeTax';
import {
  northCarolinaIncomeTaxBracketsArray,
  NORTH_CAROLINA_MARRIED_STANDARD_DEDUCTION,
  NORTH_CAROLINA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/NC-IncomeTax';
import {
  northDakotaMarriedIncomeTaxBracketsArray,
  northDakotaSingleIncomeTaxBracketsArray,
  NORTH_DAKOTA_MARRIED_STANDARD_DEDUCTION,
  NORTH_DAKOTA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/ND-IncomeTax';
import {
  nebraskaMarriedIncomeTaxBracketsArray,
  nebraskaSingleIncomeTaxBracketsArray,
  NEBRASKA_MARRIED_STANDARD_DEDUCTION,
  NEBRASKA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/NE-IncomeTax';
import {
  newJerseyMarriedIncomeTaxBracketsArray,
  newJerseySingleIncomeTaxBracketsArray,
  NEW_JERSEY_MARRIED_STANDARD_DEDUCTION,
  NEW_JERSEY_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/NJ-IncomeTax';
import {
  newMexicoMarriedFilingSeparatelyIncomeTaxBracketsArray,
  newMexicoMarriedIncomeTaxBracketsArray,
  newMexicoSingleIncomeTaxBracketsArray,
  NEW_MEXICO_MARRIED_STANDARD_DEDUCTION,
  NEW_MEXICO_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/NM-IncomeTax';
import {
  newYorkIncomeTaxBracketsArray,
  NEW_YORK_MARRIED_STANDARD_DEDUCTION,
  NEW_YORK_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/NY-IncomeTax';
import {
  ohioIncomeTaxBracketsArray,
  OHIO_MARRIED_STANDARD_DEDUCTION,
  OHIO_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/OH-IncomeTax';
import {
  oklahomaMarriedIncomeTaxBracketsArray,
  oklahomaSingleIncomeTaxBracketsArray,
  OKLAHOMA_MARRIED_STANDARD_DEDUCTION,
  OKLAHOMA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/OK-IncomeTax';
import {
  oregonMarriedIncomeTaxBracketsArray,
  oregonSingleIncomeTaxBracketsArray,
  OREGON_MARRIED_STANDARD_DEDUCTION,
  OREGON_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/OR-IncomeTax';
import {
  pennsylvaniaTaxBracketsArray,
  PENNSYLVANIA_MARRIED_STANDARD_DEDUCTION,
  PENNSYLVANIA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/PA-IncomeTax';
import {
  southCarolinaIncomeTaxBracketsArray,
  SOUTH_CAROLINA_MARRIED_STANDARD_DEDUCTION,
  SOUTH_CAROLINA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/SC-IncomeTax';
import {
  utahIncomeTaxBracketsArray,
  UTAH_MARRIED_STANDARD_DEDUCTION,
  UTAH_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/UT-IncomeTax';
import {
  virginiaIncomeTaxBracketsArray,
  VIRGINIA_MARRIED_STANDARD_DEDUCTION,
  VIRGINIA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/VA-IncomeTax';
import {
  vermontMarriedIncomeTaxBracketsArray,
  vermontSingleIncomeTaxBracketsArray,
  VERMONT_MARRIED_STANDARD_DEDUCTION,
  VERMONT_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/VT-IncomeTax';
import {
  wisconsinMarriedIncomeTaxBracketsArray,
  wisconsinSingleIncomeTaxBracketsArray,
  WISCONSIN_MARRIED_STANDARD_DEDUCTION,
  WISCONSIN_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/WI-IncomeTax';
import {
  westVirginiaIncomeTaxBracketsArray,
  WEST_VIRGINIA_MARRIED_STANDARD_DEDUCTION,
  WEST_VIRGINIA_SINGLE_STANDARD_DEDUCTION,
} from './taxBrackets/stateTaxes/WV-IncomeTax';

export const calculateStateIncomeTax = (
  annualIncome: number,
  stateIncomeTaxBracket: TaxBracket,
): TaxPayload => {
  const {
    minimumToQualify,
    taxRate,
    taxTotalToThisBracket,
  }: TaxBracket = stateIncomeTaxBracket;
  const amountTaxed: number = annualIncome - minimumToQualify;
  const taxAmount: number = (amountTaxed * taxRate) + taxTotalToThisBracket;

  return { taxRate, taxAmount };
};

export const findStateTaxBracketList = (
  state: string,
  maritalStatus: string,
): StateTaxInformation => {
  switch (state) {
    case SupportedStates.Alabama:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: alabamaSingleIncomeTaxBracketsArray,
            standardDeduction: ALABAMA_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: alabamaMarriedIncomeTaxBracketsArray,
            standardDeduction: ALABAMA_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Arizona:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: arizonaSingleIncomeTaxBracketsArray,
            standardDeduction: ARIZONA_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: arizonaMarriedIncomeTaxBracketsArray,
            standardDeduction: ARIZONA_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Arkansas:
      return {
        taxBracketList: arkansasIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? ARKANSAS_SINGLE_STANDARD_DEDUCTION : ARKANSAS_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.California:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: californiaSingleIncomeTaxBracketsArray,
            standardDeduction: CALIFORNIA_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: californiaMarriedIncomeTaxBracketsArray,
            standardDeduction: CALIFORNIA_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Colorado:
      return {
        taxBracketList: coloradoIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? COLORADO_SINGLE_STANDARD_DEDUCTION : COLORADO_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Connecticut:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: connecticutSingleIncomeTaxBracketsArray,
            standardDeduction: CONNECTICUT_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: connecticutMarriedIncomeTaxBracketsArray,
            standardDeduction: CONNECTICUT_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Delaware:
      return {
        taxBracketList: delawareIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? DELAWARE_SINGLE_STANDARD_DEDUCTION : DELAWARE_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Georgia:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: georgiaSingleIncomeTaxBracketsArray,
            standardDeduction: GEORGIA_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: georgiaMarriedIncomeTaxBracketsArray,
            standardDeduction: GEORGIA_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Hawaii:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: hawaiiSingleIncomeTaxBracketsArray,
            standardDeduction: HAWAII_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: hawaiiMarriedIncomeTaxBracketsArray,
            standardDeduction: HAWAII_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Idaho:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: idahoSingleIncomeTaxBracketsArray,
            standardDeduction: IDAHO_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: idahoMarriedIncomeTaxBracketsArray,
            standardDeduction: IDAHO_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Illinois:
      return {
        taxBracketList: illinoisIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? ILLINOIS_SINGLE_STANDARD_DEDUCTION : ILLINOIS_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Indiana:
      return {
        taxBracketList: indianaIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? INDIANA_SINGLE_STANDARD_DEDUCTION : INDIANA_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Iowa:
      return {
        taxBracketList: iowaIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? IOWA_SINGLE_STANDARD_DEDUCTION : IOWA_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Kansas:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: kansasSingleIncomeTaxBracketsArray,
            standardDeduction: KANSAS_SINGLE_STANDARD_DEDUCTION,
          };
        // Married status case
        default:
          return {
            taxBracketList: kansasMarriedIncomeTaxBracketsArray,
            standardDeduction: KANSAS_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Louisiana:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: louisianaSingleIncomeTaxBracketsArray,
            standardDeduction: LOUISIANA_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: louisianaMarriedIncomeTaxBracketsArray,
            standardDeduction: LOUISIANA_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Maine:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: maineSingleIncomeTaxBracketsArray,
            standardDeduction: MAINE_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: maineMarriedIncomeTaxBracketsArray,
            standardDeduction: MAINE_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Massachusetts:
      return {
        taxBracketList: massachusettsIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? MASSACHUSETTS_SINGLE_STANDARD_DEDUCTION : MASSACHUSETTS_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Maryland:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: marylandSingleIncomeTaxBracketsArray,
            standardDeduction: MARYLAND_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: marylandMarriedIncomeTaxBracketsArray,
            standardDeduction: MARYLAND_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Michigan:
      return {
        taxBracketList: michiganIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? MICHIGAN_SINGLE_STANDARD_DEDUCTION : MICHIGAN_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Minnesota:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: minnesotaSingleIncomeTaxBracketsArray,
            standardDeduction: MINNESOTA_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: minnesotaMarriedIncomeTaxBracketsArray,
            standardDeduction: MINNESOTA_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Mississippi:
      return {
        taxBracketList: mississippiIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? MISSISSIPPI_SINGLE_STANDARD_DEDUCTION : MISSISSIPPI_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Montana:
      return {
        taxBracketList: montanaIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? MONTANA_SINGLE_STANDARD_DEDUCTION : MONTANA_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Nebraska:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: nebraskaSingleIncomeTaxBracketsArray,
            standardDeduction: NEBRASKA_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: nebraskaMarriedIncomeTaxBracketsArray,
            standardDeduction: NEBRASKA_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.NewJersey:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: newJerseySingleIncomeTaxBracketsArray,
            standardDeduction: NEW_JERSEY_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: newJerseyMarriedIncomeTaxBracketsArray,
            standardDeduction: NEW_JERSEY_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.NewMexico:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: newMexicoSingleIncomeTaxBracketsArray,
            standardDeduction: NEW_MEXICO_SINGLE_STANDARD_DEDUCTION,
          };
        case MaritalStatus.MarriedSeparately:
          return {
            taxBracketList: newMexicoMarriedFilingSeparatelyIncomeTaxBracketsArray,
            standardDeduction: NEW_MEXICO_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: newMexicoMarriedIncomeTaxBracketsArray,
            standardDeduction: NEW_MEXICO_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.NewYork:
      return {
        taxBracketList: newYorkIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? NEW_YORK_SINGLE_STANDARD_DEDUCTION : NEW_YORK_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.NorthDakota:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: northDakotaSingleIncomeTaxBracketsArray,
            standardDeduction: NORTH_DAKOTA_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: northDakotaMarriedIncomeTaxBracketsArray,
            standardDeduction: NORTH_DAKOTA_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.NorthCarolina:
      return {
        taxBracketList: northCarolinaIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? NORTH_CAROLINA_SINGLE_STANDARD_DEDUCTION : NORTH_CAROLINA_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Ohio:
      return {
        taxBracketList: ohioIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? OHIO_SINGLE_STANDARD_DEDUCTION : OHIO_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Oklahoma:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: oklahomaSingleIncomeTaxBracketsArray,
            standardDeduction: OKLAHOMA_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: oklahomaMarriedIncomeTaxBracketsArray,
            standardDeduction: OKLAHOMA_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Oregon:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: oregonSingleIncomeTaxBracketsArray,
            standardDeduction: OREGON_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: oregonMarriedIncomeTaxBracketsArray,
            standardDeduction: OREGON_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Pennsylvania:
      return {
        taxBracketList: pennsylvaniaTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? PENNSYLVANIA_SINGLE_STANDARD_DEDUCTION : PENNSYLVANIA_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.SouthCarolina:
      return {
        taxBracketList: southCarolinaIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? SOUTH_CAROLINA_SINGLE_STANDARD_DEDUCTION : SOUTH_CAROLINA_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Utah:
      return {
        taxBracketList: utahIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? UTAH_SINGLE_STANDARD_DEDUCTION : UTAH_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Vermont:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: vermontSingleIncomeTaxBracketsArray,
            standardDeduction: VERMONT_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: vermontMarriedIncomeTaxBracketsArray,
            standardDeduction: VERMONT_MARRIED_STANDARD_DEDUCTION,
          };
      }
    case SupportedStates.Virginia:
      return {
        taxBracketList: virginiaIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? VIRGINIA_SINGLE_STANDARD_DEDUCTION : VIRGINIA_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.WashingtonDC:
      return {
        taxBracketList: washingtonDCIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? WASHINGTON_DC_SINGLE_STANDARD_DEDUCTION : WASHINGTON_DC_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.WestVirginia:
      return {
        taxBracketList: westVirginiaIncomeTaxBracketsArray,
        standardDeduction: (
          maritalStatus === MaritalStatus.Single
            ? WEST_VIRGINIA_SINGLE_STANDARD_DEDUCTION : WEST_VIRGINIA_MARRIED_STANDARD_DEDUCTION
        ),
      };
    case SupportedStates.Wisconsin:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return {
            taxBracketList: wisconsinSingleIncomeTaxBracketsArray,
            standardDeduction: WISCONSIN_SINGLE_STANDARD_DEDUCTION,
          };
        default:
          return {
            taxBracketList: wisconsinMarriedIncomeTaxBracketsArray,
            standardDeduction: WISCONSIN_MARRIED_STANDARD_DEDUCTION,
          };
      }
    default:
      return { taxBracketList: [], standardDeduction: 0 };
  }
};

export const findStateIncomeTaxBracket = (
  annualIncome: number,
  stateIncomeBrackets: TaxBracket[],
): TaxBracket => {
  let maxMinimum: TaxBracket = stateIncomeBrackets[0];
  stateIncomeBrackets.forEach((bracket: TaxBracket) => {
    if (annualIncome > bracket.minimumToQualify) {
      if (bracket.minimumToQualify > maxMinimum.minimumToQualify) {
        maxMinimum = bracket;
      }
    }
  });

  return maxMinimum;
};

export const calculateStateTaxes = (
  state: string,
  maritalStatus: string,
  annualIncome: number,
): StateTaxBreakdown => {
  // If it is not a state with income tax
  if (StatesWithoutIncomeTax.includes(state as SupportedStates)) {
    return {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
  }
  const { taxBracketList, standardDeduction }: StateTaxInformation = findStateTaxBracketList(state, maritalStatus);
  let adjustedIncome: number = annualIncome - standardDeduction;
  if (adjustedIncome < 0) adjustedIncome = 0;
  const stateIncomeTaxBracket: TaxBracket = findStateIncomeTaxBracket(adjustedIncome, taxBracketList);
  const {
    taxRate: stateIncomeTaxRate,
    taxAmount: stateIncomeTaxAmount,
  } = calculateStateIncomeTax(adjustedIncome, stateIncomeTaxBracket);

  return {
    stateIncomeTaxRate,
    stateIncomeTaxAmount,
    totalStateTaxAmount: stateIncomeTaxAmount,
    hasStateIncomeTax: true,
  };
};
