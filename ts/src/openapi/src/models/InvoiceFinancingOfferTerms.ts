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
 * @interface InvoiceFinancingOfferTerms
 */
export interface InvoiceFinancingOfferTerms {
    /**
     * The type of product being offered. Always `INVOICE_FINANCING` for `InvoiceFinancingOfferTerms`.
     * @type {string}
     * @memberof InvoiceFinancingOfferTerms
     */
    productType: InvoiceFinancingOfferTermsProductTypeEnum;
    /**
     * The total limit allowed for this offer - in cents.
     * @type {number}
     * @memberof InvoiceFinancingOfferTerms
     */
    totalLimitCents: number;
    /**
     * The pricing plans available for this offer.
     * @type {Array<InvoicePaymentPlan>}
     * @memberof InvoiceFinancingOfferTerms
     */
    pricingPlans: Array<InvoicePaymentPlan>;
}


/**
 * @export
 */
export const InvoiceFinancingOfferTermsProductTypeEnum = {
    InvoiceFinancing: 'INVOICE_FINANCING'
} as const;
export type InvoiceFinancingOfferTermsProductTypeEnum = typeof InvoiceFinancingOfferTermsProductTypeEnum[keyof typeof InvoiceFinancingOfferTermsProductTypeEnum];


/**
 * Check if a given object implements the InvoiceFinancingOfferTerms interface.
 */
export function instanceOfInvoiceFinancingOfferTerms(value: object): boolean {
    if (!('productType' in value)) return false;
    if (!('totalLimitCents' in value)) return false;
    if (!('pricingPlans' in value)) return false;
    return true;
}

export function InvoiceFinancingOfferTermsFromJSON(json: any): InvoiceFinancingOfferTerms {
    return InvoiceFinancingOfferTermsFromJSONTyped(json, false);
}

export function InvoiceFinancingOfferTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceFinancingOfferTerms {
    if (json == null) {
        return json;
    }
    return {
        
        'productType': json['productType'],
        'totalLimitCents': json['totalLimitCents'],
        'pricingPlans': ((json['pricingPlans'] as Array<any>).map(InvoicePaymentPlanFromJSON)),
    };
}

export function InvoiceFinancingOfferTermsToJSON(value?: InvoiceFinancingOfferTerms | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productType': value['productType'],
        'totalLimitCents': value['totalLimitCents'],
        'pricingPlans': ((value['pricingPlans'] as Array<any>).map(InvoicePaymentPlanToJSON)),
    };
}

