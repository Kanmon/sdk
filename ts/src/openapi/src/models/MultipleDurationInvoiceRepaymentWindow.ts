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
import type { PaymentPlanRepaymentSchedule } from './PaymentPlanRepaymentSchedule';
import {
    PaymentPlanRepaymentScheduleFromJSON,
    PaymentPlanRepaymentScheduleFromJSONTyped,
    PaymentPlanRepaymentScheduleToJSON,
} from './PaymentPlanRepaymentSchedule';

/**
 * 
 * @export
 * @interface MultipleDurationInvoiceRepaymentWindow
 */
export interface MultipleDurationInvoiceRepaymentWindow {
    /**
     * 
     * @type {string}
     * @memberof MultipleDurationInvoiceRepaymentWindow
     */
    repaymentType: MultipleDurationInvoiceRepaymentWindowRepaymentTypeEnum;
    /**
     * 
     * @type {PaymentPlanRepaymentSchedule}
     * @memberof MultipleDurationInvoiceRepaymentWindow
     */
    repaymentSchedule: PaymentPlanRepaymentSchedule;
}


/**
 * @export
 */
export const MultipleDurationInvoiceRepaymentWindowRepaymentTypeEnum = {
    MULTIPLE_DURATION: 'MULTIPLE_DURATION'
} as const;
export type MultipleDurationInvoiceRepaymentWindowRepaymentTypeEnum = typeof MultipleDurationInvoiceRepaymentWindowRepaymentTypeEnum[keyof typeof MultipleDurationInvoiceRepaymentWindowRepaymentTypeEnum];


/**
 * Check if a given object implements the MultipleDurationInvoiceRepaymentWindow interface.
 */
export function instanceOfMultipleDurationInvoiceRepaymentWindow(value: object): value is MultipleDurationInvoiceRepaymentWindow {
    if (!('repaymentType' in value) || value['repaymentType'] === undefined) return false;
    if (!('repaymentSchedule' in value) || value['repaymentSchedule'] === undefined) return false;
    return true;
}

export function MultipleDurationInvoiceRepaymentWindowFromJSON(json: any): MultipleDurationInvoiceRepaymentWindow {
    return MultipleDurationInvoiceRepaymentWindowFromJSONTyped(json, false);
}

export function MultipleDurationInvoiceRepaymentWindowFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultipleDurationInvoiceRepaymentWindow {
    if (json == null) {
        return json;
    }
    return {
        
        'repaymentType': json['repaymentType'],
        'repaymentSchedule': PaymentPlanRepaymentScheduleFromJSON(json['repaymentSchedule']),
    };
}

export function MultipleDurationInvoiceRepaymentWindowToJSON(value?: MultipleDurationInvoiceRepaymentWindow | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'repaymentType': value['repaymentType'],
        'repaymentSchedule': PaymentPlanRepaymentScheduleToJSON(value['repaymentSchedule']),
    };
}

