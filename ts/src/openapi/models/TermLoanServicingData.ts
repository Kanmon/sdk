/**
 * Kanmon Public V2 API
 * Kanmon\'s public api. Contains all of the endpoints for both capital providers and platforms
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class TermLoanServicingData {
    'productType': TermLoanServicingDataProductTypeEnum;
    /**
    * The total loan amount - in cents.
    */
    'loanAmountCents': number;
    /**
    * The total origination fee amount - in cents.
    */
    'originationFeeCents': number;
    /**
    * The principal remaining on the loan - in cents.
    */
    'principalBalanceCents': number;
    /**
    * The monthly payment amount - in cents.
    */
    'monthlyPaymentCents': number;
    /**
    * The interest rate of the loan. E.g. a value of `10` means 10%.
    */
    'interestRate': number;
    /**
    * The next scheduled payment date - ISO 8601 date format.
    */
    'nextPaymentDate': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productType",
            "baseName": "productType",
            "type": "TermLoanServicingDataProductTypeEnum",
            "format": ""
        },
        {
            "name": "loanAmountCents",
            "baseName": "loanAmountCents",
            "type": "number",
            "format": ""
        },
        {
            "name": "originationFeeCents",
            "baseName": "originationFeeCents",
            "type": "number",
            "format": ""
        },
        {
            "name": "principalBalanceCents",
            "baseName": "principalBalanceCents",
            "type": "number",
            "format": ""
        },
        {
            "name": "monthlyPaymentCents",
            "baseName": "monthlyPaymentCents",
            "type": "number",
            "format": ""
        },
        {
            "name": "interestRate",
            "baseName": "interestRate",
            "type": "number",
            "format": ""
        },
        {
            "name": "nextPaymentDate",
            "baseName": "nextPaymentDate",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TermLoanServicingData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TermLoanServicingDataProductTypeEnum {
    TermLoan = 'TERM_LOAN'
}

