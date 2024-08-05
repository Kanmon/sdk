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
 * @interface McaServicingData
 */
export interface McaServicingData {
    /**
     * The type of product being offered. Always `MCA` for `McaServicingData`.
     * @type {string}
     * @memberof McaServicingData
     */
    productType: string;
    /**
     * The loan amount - in cents.
     * @type {number}
     * @memberof McaServicingData
     */
    advanceAmountCents: number;
    /**
     * The repayment percentage for calculating repayment amounts. E.g. a value of a `20` means 20%. If a business has $100 of income over a repayment period, the repayment amount would be $20.
     * @type {number}
     * @memberof McaServicingData
     */
    repaymentPercentage: number;
    /**
     * The fee percentage charged as the borrowing cost of the loan. E.g. a value of `1.3` means a 30% fee.
     * @type {number}
     * @memberof McaServicingData
     */
    feeFactor: number;
    /**
     * The total repayment amount in cents required to settle and close the debt. E.g. for a $10,000 loan with a fee factor of 1.3, the repayment amount equates to $13,000.
     * @type {number}
     * @memberof McaServicingData
     */
    totalRepaymentCents: number;
    /**
     * The repayment frequency of the loan. E.g. biweekly repayment occurs every 14 days, weekly repayment occurs every 7 days, etc.
     * @type {string}
     * @memberof McaServicingData
     */
    repaymentFrequency: McaServicingDataRepaymentFrequencyEnum;
    /**
     * The next scheduled payment date - ISO 8601 date format.
     * @type {string}
     * @memberof McaServicingData
     */
    nextPaymentDate: string | null;
    /**
     * The total repayment amount less the amount repaid - in cents.
     * @type {number}
     * @memberof McaServicingData
     */
    advanceBalanceCents: number;
}


/**
 * @export
 */
export const McaServicingDataRepaymentFrequencyEnum = {
    Daily: 'DAILY',
    Weekly: 'WEEKLY',
    Biweekly: 'BIWEEKLY',
    Monthly: 'MONTHLY'
} as const;
export type McaServicingDataRepaymentFrequencyEnum = typeof McaServicingDataRepaymentFrequencyEnum[keyof typeof McaServicingDataRepaymentFrequencyEnum];


/**
 * Check if a given object implements the McaServicingData interface.
 */
export function instanceOfMcaServicingData(value: object): boolean {
    if (!('productType' in value)) return false;
    if (!('advanceAmountCents' in value)) return false;
    if (!('repaymentPercentage' in value)) return false;
    if (!('feeFactor' in value)) return false;
    if (!('totalRepaymentCents' in value)) return false;
    if (!('repaymentFrequency' in value)) return false;
    if (!('nextPaymentDate' in value)) return false;
    if (!('advanceBalanceCents' in value)) return false;
    return true;
}

export function McaServicingDataFromJSON(json: any): McaServicingData {
    return McaServicingDataFromJSONTyped(json, false);
}

export function McaServicingDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): McaServicingData {
    if (json == null) {
        return json;
    }
    return {
        
        'productType': json['productType'],
        'advanceAmountCents': json['advanceAmountCents'],
        'repaymentPercentage': json['repaymentPercentage'],
        'feeFactor': json['feeFactor'],
        'totalRepaymentCents': json['totalRepaymentCents'],
        'repaymentFrequency': json['repaymentFrequency'],
        'nextPaymentDate': json['nextPaymentDate'],
        'advanceBalanceCents': json['advanceBalanceCents'],
    };
}

export function McaServicingDataToJSON(value?: McaServicingData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productType': value['productType'],
        'advanceAmountCents': value['advanceAmountCents'],
        'repaymentPercentage': value['repaymentPercentage'],
        'feeFactor': value['feeFactor'],
        'totalRepaymentCents': value['totalRepaymentCents'],
        'repaymentFrequency': value['repaymentFrequency'],
        'nextPaymentDate': value['nextPaymentDate'],
        'advanceBalanceCents': value['advanceBalanceCents'],
    };
}

