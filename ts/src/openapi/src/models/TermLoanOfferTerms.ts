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
 * @interface TermLoanOfferTerms
 */
export interface TermLoanOfferTerms {
    /**
     * The type of product being offered. Always `TERM_LOAN` for `TermLoanOfferTerms`.
     * @type {string}
     * @memberof TermLoanOfferTerms
     */
    productType: TermLoanOfferTermsProductTypeEnum;
    /**
     * The maximum loan amount - in cents.
     * @type {number}
     * @memberof TermLoanOfferTerms
     */
    maxLoanAmountCents: number;
    /**
     * The loan amount - in cents. This defaults to `maxLoanAmountCents`. However, the business can select a smaller amount.
     * @type {number}
     * @memberof TermLoanOfferTerms
     */
    loanAmountCents: number;
    /**
     * The rate of interest on the loan. E.g. a value of `10` means 10%.
     * @type {number}
     * @memberof TermLoanOfferTerms
     */
    interestRatePercentage: number;
    /**
     * The duration of the loan - in months.
     * @type {number}
     * @memberof TermLoanOfferTerms
     */
    durationMonths: number;
    /**
     * The fee percentage on the loan. E.g. a value of `3` means 3%.
     * @type {number}
     * @memberof TermLoanOfferTerms
     */
    feePercentage: number;
}


/**
 * @export
 */
export const TermLoanOfferTermsProductTypeEnum = {
    TermLoan: 'TERM_LOAN'
} as const;
export type TermLoanOfferTermsProductTypeEnum = typeof TermLoanOfferTermsProductTypeEnum[keyof typeof TermLoanOfferTermsProductTypeEnum];


/**
 * Check if a given object implements the TermLoanOfferTerms interface.
 */
export function instanceOfTermLoanOfferTerms(value: object): boolean {
    if (!('productType' in value)) return false;
    if (!('maxLoanAmountCents' in value)) return false;
    if (!('loanAmountCents' in value)) return false;
    if (!('interestRatePercentage' in value)) return false;
    if (!('durationMonths' in value)) return false;
    if (!('feePercentage' in value)) return false;
    return true;
}

export function TermLoanOfferTermsFromJSON(json: any): TermLoanOfferTerms {
    return TermLoanOfferTermsFromJSONTyped(json, false);
}

export function TermLoanOfferTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TermLoanOfferTerms {
    if (json == null) {
        return json;
    }
    return {
        
        'productType': json['productType'],
        'maxLoanAmountCents': json['maxLoanAmountCents'],
        'loanAmountCents': json['loanAmountCents'],
        'interestRatePercentage': json['interestRatePercentage'],
        'durationMonths': json['durationMonths'],
        'feePercentage': json['feePercentage'],
    };
}

export function TermLoanOfferTermsToJSON(value?: TermLoanOfferTerms | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productType': value['productType'],
        'maxLoanAmountCents': value['maxLoanAmountCents'],
        'loanAmountCents': value['loanAmountCents'],
        'interestRatePercentage': value['interestRatePercentage'],
        'durationMonths': value['durationMonths'],
        'feePercentage': value['feePercentage'],
    };
}

