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
 * @interface LineOfCreditOfferTerms
 */
export interface LineOfCreditOfferTerms {
    /**
     * The type of product being offered. Always `LINE_OF_CREDIT` for `LineOfCreditOfferTerms`.
     * @type {string}
     * @memberof LineOfCreditOfferTerms
     */
    productType: LineOfCreditOfferTermsProductTypeEnum;
    /**
     * The total limit allowed for this offer - in cents.
     * @type {number}
     * @memberof LineOfCreditOfferTerms
     */
    totalLimitCents: number;
    /**
     * The rate of interest on the loan. E.g. a value of `10` means 10%.
     * @type {number}
     * @memberof LineOfCreditOfferTerms
     */
    interestRatePercentage: number;
    /**
     * The fee percentage charged as the borrowing cost of the loan. E.g. a value of `2` means a 2% fee.
     * @type {number}
     * @memberof LineOfCreditOfferTerms
     */
    feePercentage: number;
    /**
     * The duration of the repayment for each draw - in months.
     * @type {number}
     * @memberof LineOfCreditOfferTerms
     */
    repaymentDurationMonths: number;
}


/**
 * @export
 */
export const LineOfCreditOfferTermsProductTypeEnum = {
    INVOICE_FINANCING: 'INVOICE_FINANCING',
    TERM_LOAN: 'TERM_LOAN',
    MCA: 'MCA',
    LINE_OF_CREDIT: 'LINE_OF_CREDIT',
    INTEGRATED_MCA: 'INTEGRATED_MCA',
    ACCOUNTS_PAYABLE_FINANCING: 'ACCOUNTS_PAYABLE_FINANCING'
} as const;
export type LineOfCreditOfferTermsProductTypeEnum = typeof LineOfCreditOfferTermsProductTypeEnum[keyof typeof LineOfCreditOfferTermsProductTypeEnum];


/**
 * Check if a given object implements the LineOfCreditOfferTerms interface.
 */
export function instanceOfLineOfCreditOfferTerms(value: object): value is LineOfCreditOfferTerms {
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('totalLimitCents' in value) || value['totalLimitCents'] === undefined) return false;
    if (!('interestRatePercentage' in value) || value['interestRatePercentage'] === undefined) return false;
    if (!('feePercentage' in value) || value['feePercentage'] === undefined) return false;
    if (!('repaymentDurationMonths' in value) || value['repaymentDurationMonths'] === undefined) return false;
    return true;
}

export function LineOfCreditOfferTermsFromJSON(json: any): LineOfCreditOfferTerms {
    return LineOfCreditOfferTermsFromJSONTyped(json, false);
}

export function LineOfCreditOfferTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineOfCreditOfferTerms {
    if (json == null) {
        return json;
    }
    return {
        
        'productType': json['productType'],
        'totalLimitCents': json['totalLimitCents'],
        'interestRatePercentage': json['interestRatePercentage'],
        'feePercentage': json['feePercentage'],
        'repaymentDurationMonths': json['repaymentDurationMonths'],
    };
}

export function LineOfCreditOfferTermsToJSON(value?: LineOfCreditOfferTerms | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productType': value['productType'],
        'totalLimitCents': value['totalLimitCents'],
        'interestRatePercentage': value['interestRatePercentage'],
        'feePercentage': value['feePercentage'],
        'repaymentDurationMonths': value['repaymentDurationMonths'],
    };
}

