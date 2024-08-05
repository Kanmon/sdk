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
import type { InvoicePaymentPlanRepaymentWindow } from './InvoicePaymentPlanRepaymentWindow';
import {
    InvoicePaymentPlanRepaymentWindowFromJSON,
    InvoicePaymentPlanRepaymentWindowFromJSONTyped,
    InvoicePaymentPlanRepaymentWindowToJSON,
} from './InvoicePaymentPlanRepaymentWindow';

/**
 * 
 * @export
 * @interface InvoicePaymentPlan
 */
export interface InvoicePaymentPlan {
    /**
     * The percentage of the invoice that is allowed for advances. E.g. a value of `80` would mean that $800 would be advanced on a $1,000 invoice.
     * @type {number}
     * @memberof InvoicePaymentPlan
     */
    advanceRatePercentage: number;
    /**
     * The percentage of the transaction that is charged as a fee. E.g. a value of `5` means 5%.
     * @type {number}
     * @memberof InvoicePaymentPlan
     */
    transactionFeePercentage: number;
    /**
     * 
     * @type {InvoicePaymentPlanRepaymentWindow}
     * @memberof InvoicePaymentPlan
     */
    repaymentWindow: InvoicePaymentPlanRepaymentWindow;
}

/**
 * Check if a given object implements the InvoicePaymentPlan interface.
 */
export function instanceOfInvoicePaymentPlan(value: object): boolean {
    if (!('advanceRatePercentage' in value)) return false;
    if (!('transactionFeePercentage' in value)) return false;
    if (!('repaymentWindow' in value)) return false;
    return true;
}

export function InvoicePaymentPlanFromJSON(json: any): InvoicePaymentPlan {
    return InvoicePaymentPlanFromJSONTyped(json, false);
}

export function InvoicePaymentPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoicePaymentPlan {
    if (json == null) {
        return json;
    }
    return {
        
        'advanceRatePercentage': json['advanceRatePercentage'],
        'transactionFeePercentage': json['transactionFeePercentage'],
        'repaymentWindow': InvoicePaymentPlanRepaymentWindowFromJSON(json['repaymentWindow']),
    };
}

export function InvoicePaymentPlanToJSON(value?: InvoicePaymentPlan | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'advanceRatePercentage': value['advanceRatePercentage'],
        'transactionFeePercentage': value['transactionFeePercentage'],
        'repaymentWindow': InvoicePaymentPlanRepaymentWindowToJSON(value['repaymentWindow']),
    };
}

