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
import type { ProductType } from './ProductType';
import {
    ProductTypeFromJSON,
    ProductTypeFromJSONTyped,
    ProductTypeToJSON,
} from './ProductType';

/**
 * 
 * @export
 * @interface IntegratedMcaOfferTerms
 */
export interface IntegratedMcaOfferTerms {
    /**
     * 
     * @type {ProductType}
     * @memberof IntegratedMcaOfferTerms
     */
    productType: ProductType;
    /**
     * The loan amount - in cents.
     * @type {number}
     * @memberof IntegratedMcaOfferTerms
     */
    advanceAmountCents: number;
    /**
     * The repayment percentage for calculating repayment amounts. E.g. a value of a `20` means 20%. If a business has $100 of income over a repayment period, the repayment amount would be $20.
     * @type {number}
     * @memberof IntegratedMcaOfferTerms
     */
    repaymentPercentage: number;
    /**
     * The fee percentage charged as the borrowing cost of the loan. E.g. a value of `1.3` means a 30% fee.
     * @type {number}
     * @memberof IntegratedMcaOfferTerms
     */
    feeFactor: number;
    /**
     * The total repayment amount in cents required to settle and close the debt. E.g. for a $10,000 loan with a fee factor of 1.3, the repayment amount equates to $13,000.
     * @type {number}
     * @memberof IntegratedMcaOfferTerms
     */
    totalRepaymentCents: number;
    /**
     * The maximum loan amount - in cents.
     * @type {number}
     * @memberof IntegratedMcaOfferTerms
     */
    maxAdvanceAmountCents: number;
}



/**
 * Check if a given object implements the IntegratedMcaOfferTerms interface.
 */
export function instanceOfIntegratedMcaOfferTerms(value: object): value is IntegratedMcaOfferTerms {
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('advanceAmountCents' in value) || value['advanceAmountCents'] === undefined) return false;
    if (!('repaymentPercentage' in value) || value['repaymentPercentage'] === undefined) return false;
    if (!('feeFactor' in value) || value['feeFactor'] === undefined) return false;
    if (!('totalRepaymentCents' in value) || value['totalRepaymentCents'] === undefined) return false;
    if (!('maxAdvanceAmountCents' in value) || value['maxAdvanceAmountCents'] === undefined) return false;
    return true;
}

export function IntegratedMcaOfferTermsFromJSON(json: any): IntegratedMcaOfferTerms {
    return IntegratedMcaOfferTermsFromJSONTyped(json, false);
}

export function IntegratedMcaOfferTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegratedMcaOfferTerms {
    if (json == null) {
        return json;
    }
    return {
        
        'productType': ProductTypeFromJSON(json['productType']),
        'advanceAmountCents': json['advanceAmountCents'],
        'repaymentPercentage': json['repaymentPercentage'],
        'feeFactor': json['feeFactor'],
        'totalRepaymentCents': json['totalRepaymentCents'],
        'maxAdvanceAmountCents': json['maxAdvanceAmountCents'],
    };
}

export function IntegratedMcaOfferTermsToJSON(value?: IntegratedMcaOfferTerms | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productType': ProductTypeToJSON(value['productType']),
        'advanceAmountCents': value['advanceAmountCents'],
        'repaymentPercentage': value['repaymentPercentage'],
        'feeFactor': value['feeFactor'],
        'totalRepaymentCents': value['totalRepaymentCents'],
        'maxAdvanceAmountCents': value['maxAdvanceAmountCents'],
    };
}

