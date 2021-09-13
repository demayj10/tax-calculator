import React, { FC } from "react";
import './resultData.css';
import DataListItem from "./dataListItem";

interface ResultDataProps {
    data: {
        grossAnnualIncome: number
        federalIncomeTaxRate: number,
        federalIncomeTaxAmount: number,
        medicareTaxAmount: number,
        medicareTaxRate: number,
        socialSecurityTaxRate: number,
        socialSecurityTaxAmount: number,
        totalTaxes: number,
        netAnnualIncome: number
    }
}

const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const ResultData: FC<ResultDataProps> = (resultDataProps: ResultDataProps) => {
    const {
        grossAnnualIncome,
        federalIncomeTaxRate,
        federalIncomeTaxAmount,
        medicareTaxAmount,
        medicareTaxRate,
        socialSecurityTaxRate,
        socialSecurityTaxAmount,
        totalTaxes,
        netAnnualIncome
    } = resultDataProps.data;

    const convertToPercent = (rate: number): string => {
        return `${(rate * 100).toFixed(0)}%`;
    }

    return(
        <div id={"resultContainer"}>
            <h1>
                <u>Results</u>
            </h1>
            <ul id={"resultData"}>
                <DataListItem
                    title={"Gross Annual Income"}
                    value={formatterUSD.format(grossAnnualIncome)}/>
                <DataListItem title={"Federal Income Tax Rate:"} value={convertToPercent(federalIncomeTaxRate)}/>
                <DataListItem title={"Federal Income Tax Amount"} value={formatterUSD.format(federalIncomeTaxAmount)}/>
                <DataListItem title={"Medicare Security Tax Amount"} value={convertToPercent(medicareTaxRate)}/>
                <DataListItem title={"Medicare Security Tax Amount"} value={formatterUSD.format(medicareTaxAmount)}/>
                <DataListItem title={"Social Security Tax Rate"} value={convertToPercent(socialSecurityTaxRate)}/>
                <DataListItem title={"Social Security Tax Amount"} value={formatterUSD.format(socialSecurityTaxAmount)}/>
                <DataListItem title={"Total Taxes"} value={formatterUSD.format(totalTaxes)}/>
                <DataListItem title={"Net Annual Income"} value={formatterUSD.format(netAnnualIncome)}/>
            </ul>
        </div>
    );
}

export default ResultData;
