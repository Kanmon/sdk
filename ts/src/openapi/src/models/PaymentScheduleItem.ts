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
import type { PaymentScheduleItemPaymentOrder } from './PaymentScheduleItemPaymentOrder';
import {
    PaymentScheduleItemPaymentOrderFromJSON,
    PaymentScheduleItemPaymentOrderFromJSONTyped,
    PaymentScheduleItemPaymentOrderToJSON,
} from './PaymentScheduleItemPaymentOrder';

/**
 * 
 * @export
 * @interface PaymentScheduleItem
 */
export interface PaymentScheduleItem {
    /**
     * The effective UTC ISO 8601 date that the payment will process.
     * @type {string}
     * @memberof PaymentScheduleItem
     */
    effectiveDate: string;
    /**
     * The total payment amount - in cents.
     * @type {number}
     * @memberof PaymentScheduleItem
     */
    totalPaymentAmountCents: number;
    /**
     * 
     * @type {PaymentScheduleItemPaymentOrder}
     * @memberof PaymentScheduleItem
     */
    paymentOrder: PaymentScheduleItemPaymentOrder | null;
}

/**
 * Check if a given object implements the PaymentScheduleItem interface.
 */
export function instanceOfPaymentScheduleItem(value: object): boolean {
    if (!('effectiveDate' in value)) return false;
    if (!('totalPaymentAmountCents' in value)) return false;
    if (!('paymentOrder' in value)) return false;
    return true;
}

export function PaymentScheduleItemFromJSON(json: any): PaymentScheduleItem {
    return PaymentScheduleItemFromJSONTyped(json, false);
}

export function PaymentScheduleItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentScheduleItem {
    if (json == null) {
        return json;
    }
    return {
        
        'effectiveDate': json['effectiveDate'],
        'totalPaymentAmountCents': json['totalPaymentAmountCents'],
        'paymentOrder': PaymentScheduleItemPaymentOrderFromJSON(json['paymentOrder']),
    };
}

export function PaymentScheduleItemToJSON(value?: PaymentScheduleItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'effectiveDate': value['effectiveDate'],
        'totalPaymentAmountCents': value['totalPaymentAmountCents'],
        'paymentOrder': PaymentScheduleItemPaymentOrderToJSON(value['paymentOrder']),
    };
}
