/* tslint:disable */
/* eslint-disable */
/**
 * Kanmon Public V2 API
 * Kanmon\'s public api. Contains all of the endpoints for both capital providers and platforms
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TermLoanServicingData
 */
export interface TermLoanServicingData {
    /**
     * The type of product being offered. Always `TERM_LOAN` for `TermLoanServicingData`.
     * @type {string}
     * @memberof TermLoanServicingData
     */
    productType: TermLoanServicingDataProductTypeEnum;
    /**
     * The total loan amount - in cents.
     * @type {number}
     * @memberof TermLoanServicingData
     */
    loanAmountCents: number;
    /**
     * The total origination fee amount - in cents.
     * @type {number}
     * @memberof TermLoanServicingData
     */
    originationFeeCents: number;
    /**
     * The principal remaining on the loan - in cents.
     * @type {number}
     * @memberof TermLoanServicingData
     */
    principalBalanceCents: number;
    /**
     * The monthly payment amount - in cents.
     * @type {number}
     * @memberof TermLoanServicingData
     */
    monthlyPaymentCents: number;
    /**
     * The interest rate of the loan. E.g. a value of `10` means 10%.
     * @type {number}
     * @memberof TermLoanServicingData
     */
    interestRate: number;
    /**
     * The next scheduled payment date - ISO 8601 date format.
     * @type {string}
     * @memberof TermLoanServicingData
     */
    nextPaymentDate: string | null;
}


/**
 * @export
 */
export const TermLoanServicingDataProductTypeEnum = {
    TermLoan: 'TERM_LOAN'
} as const;
export type TermLoanServicingDataProductTypeEnum = typeof TermLoanServicingDataProductTypeEnum[keyof typeof TermLoanServicingDataProductTypeEnum];


/**
 * Check if a given object implements the TermLoanServicingData interface.
 */
export function instanceOfTermLoanServicingData(value: object): boolean {
    if (!('productType' in value)) return false;
    if (!('loanAmountCents' in value)) return false;
    if (!('originationFeeCents' in value)) return false;
    if (!('principalBalanceCents' in value)) return false;
    if (!('monthlyPaymentCents' in value)) return false;
    if (!('interestRate' in value)) return false;
    if (!('nextPaymentDate' in value)) return false;
    return true;
}

export function TermLoanServicingDataFromJSON(json: any): TermLoanServicingData {
    return TermLoanServicingDataFromJSONTyped(json, false);
}

export function TermLoanServicingDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TermLoanServicingData {
    if (json == null) {
        return json;
    }
    return {
        
        'productType': json['productType'],
        'loanAmountCents': json['loanAmountCents'],
        'originationFeeCents': json['originationFeeCents'],
        'principalBalanceCents': json['principalBalanceCents'],
        'monthlyPaymentCents': json['monthlyPaymentCents'],
        'interestRate': json['interestRate'],
        'nextPaymentDate': json['nextPaymentDate'],
    };
}

export function TermLoanServicingDataToJSON(value?: TermLoanServicingData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productType': value['productType'],
        'loanAmountCents': value['loanAmountCents'],
        'originationFeeCents': value['originationFeeCents'],
        'principalBalanceCents': value['principalBalanceCents'],
        'monthlyPaymentCents': value['monthlyPaymentCents'],
        'interestRate': value['interestRate'],
        'nextPaymentDate': value['nextPaymentDate'],
    };
}

