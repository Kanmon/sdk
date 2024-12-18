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
import type { ProductType } from './ProductType';
import {
    ProductTypeFromJSON,
    ProductTypeFromJSONTyped,
    ProductTypeToJSON,
} from './ProductType';

/**
 * 
 * @export
 * @interface AccountPayableFinancingServicingData
 */
export interface AccountPayableFinancingServicingData {
    /**
     * 
     * @type {ProductType}
     * @memberof AccountPayableFinancingServicingData
     */
    productType: ProductType;
    /**
     * The total limit allowed - in cents.
     * @type {number}
     * @memberof AccountPayableFinancingServicingData
     */
    totalLimitCents: number;
    /**
     * The pricing plans available for this issued product.
     * @type {Array<InvoicePaymentPlan>}
     * @memberof AccountPayableFinancingServicingData
     */
    pricingPlans: Array<InvoicePaymentPlan>;
    /**
     * The total limit less the amount of balance outstanding - in cents.
     * @type {number}
     * @memberof AccountPayableFinancingServicingData
     */
    availableLimitCents: number;
}



/**
 * Check if a given object implements the AccountPayableFinancingServicingData interface.
 */
export function instanceOfAccountPayableFinancingServicingData(value: object): value is AccountPayableFinancingServicingData {
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('totalLimitCents' in value) || value['totalLimitCents'] === undefined) return false;
    if (!('pricingPlans' in value) || value['pricingPlans'] === undefined) return false;
    if (!('availableLimitCents' in value) || value['availableLimitCents'] === undefined) return false;
    return true;
}

export function AccountPayableFinancingServicingDataFromJSON(json: any): AccountPayableFinancingServicingData {
    return AccountPayableFinancingServicingDataFromJSONTyped(json, false);
}

export function AccountPayableFinancingServicingDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountPayableFinancingServicingData {
    if (json == null) {
        return json;
    }
    return {
        
        'productType': ProductTypeFromJSON(json['productType']),
        'totalLimitCents': json['totalLimitCents'],
        'pricingPlans': ((json['pricingPlans'] as Array<any>).map(InvoicePaymentPlanFromJSON)),
        'availableLimitCents': json['availableLimitCents'],
    };
}

export function AccountPayableFinancingServicingDataToJSON(value?: AccountPayableFinancingServicingData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productType': ProductTypeToJSON(value['productType']),
        'totalLimitCents': value['totalLimitCents'],
        'pricingPlans': ((value['pricingPlans'] as Array<any>).map(InvoicePaymentPlanToJSON)),
        'availableLimitCents': value['availableLimitCents'],
    };
}

