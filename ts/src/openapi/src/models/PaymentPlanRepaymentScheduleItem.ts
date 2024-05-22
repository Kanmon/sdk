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
 * @interface PaymentPlanRepaymentScheduleItem
 */
export interface PaymentPlanRepaymentScheduleItem {
    /**
     * This amount of days after which the repayment duration is due.
     * @type {number}
     * @memberof PaymentPlanRepaymentScheduleItem
     */
    repaymentDurationDays: number;
    /**
     * The percentage of the payment that is due for this repayment. E.g. a value of `50` means 50%.
     * @type {number}
     * @memberof PaymentPlanRepaymentScheduleItem
     */
    repaymentPercentage: number;
}

/**
 * Check if a given object implements the PaymentPlanRepaymentScheduleItem interface.
 */
export function instanceOfPaymentPlanRepaymentScheduleItem(value: object): boolean {
    if (!('repaymentDurationDays' in value)) return false;
    if (!('repaymentPercentage' in value)) return false;
    return true;
}

export function PaymentPlanRepaymentScheduleItemFromJSON(json: any): PaymentPlanRepaymentScheduleItem {
    return PaymentPlanRepaymentScheduleItemFromJSONTyped(json, false);
}

export function PaymentPlanRepaymentScheduleItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentPlanRepaymentScheduleItem {
    if (json == null) {
        return json;
    }
    return {
        
        'repaymentDurationDays': json['repaymentDurationDays'],
        'repaymentPercentage': json['repaymentPercentage'],
    };
}

export function PaymentPlanRepaymentScheduleItemToJSON(value?: PaymentPlanRepaymentScheduleItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'repaymentDurationDays': value['repaymentDurationDays'],
        'repaymentPercentage': value['repaymentPercentage'],
    };
}

