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
import type { InvoicePaymentPlan } from './InvoicePaymentPlan';
import {
    InvoicePaymentPlanFromJSON,
    InvoicePaymentPlanFromJSONTyped,
    InvoicePaymentPlanToJSON,
} from './InvoicePaymentPlan';

/**
 * 
 * @export
 * @interface AccountsPayableFinancingOfferTerms
 */
export interface AccountsPayableFinancingOfferTerms {
    /**
     * The type of product being offered. Always `ACCOUNTS_PAYABLE_FINANCING` for `AccountsPayableFinancingOfferTerms`.
     * @type {string}
     * @memberof AccountsPayableFinancingOfferTerms
     */
    productType: AccountsPayableFinancingOfferTermsProductTypeEnum;
    /**
     * The total limit allowed for this offer - in cents.
     * @type {number}
     * @memberof AccountsPayableFinancingOfferTerms
     */
    totalLimitCents: number;
    /**
     * The pricing plans available for this offer.
     * @type {Array<InvoicePaymentPlan>}
     * @memberof AccountsPayableFinancingOfferTerms
     */
    pricingPlans: Array<InvoicePaymentPlan>;
}


/**
 * @export
 */
export const AccountsPayableFinancingOfferTermsProductTypeEnum = {
    INVOICE_FINANCING: 'INVOICE_FINANCING',
    TERM_LOAN: 'TERM_LOAN',
    MCA: 'MCA',
    LINE_OF_CREDIT: 'LINE_OF_CREDIT',
    INTEGRATED_MCA: 'INTEGRATED_MCA',
    ACCOUNTS_PAYABLE_FINANCING: 'ACCOUNTS_PAYABLE_FINANCING'
} as const;
export type AccountsPayableFinancingOfferTermsProductTypeEnum = typeof AccountsPayableFinancingOfferTermsProductTypeEnum[keyof typeof AccountsPayableFinancingOfferTermsProductTypeEnum];


/**
 * Check if a given object implements the AccountsPayableFinancingOfferTerms interface.
 */
export function instanceOfAccountsPayableFinancingOfferTerms(value: object): value is AccountsPayableFinancingOfferTerms {
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('totalLimitCents' in value) || value['totalLimitCents'] === undefined) return false;
    if (!('pricingPlans' in value) || value['pricingPlans'] === undefined) return false;
    return true;
}

export function AccountsPayableFinancingOfferTermsFromJSON(json: any): AccountsPayableFinancingOfferTerms {
    return AccountsPayableFinancingOfferTermsFromJSONTyped(json, false);
}

export function AccountsPayableFinancingOfferTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsPayableFinancingOfferTerms {
    if (json == null) {
        return json;
    }
    return {
        
        'productType': json['productType'],
        'totalLimitCents': json['totalLimitCents'],
        'pricingPlans': ((json['pricingPlans'] as Array<any>).map(InvoicePaymentPlanFromJSON)),
    };
}

export function AccountsPayableFinancingOfferTermsToJSON(value?: AccountsPayableFinancingOfferTerms | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productType': value['productType'],
        'totalLimitCents': value['totalLimitCents'],
        'pricingPlans': ((value['pricingPlans'] as Array<any>).map(InvoicePaymentPlanToJSON)),
    };
}

