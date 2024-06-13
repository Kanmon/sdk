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
import type { PaymentOrderStatus } from './PaymentOrderStatus';
import {
    PaymentOrderStatusFromJSON,
    PaymentOrderStatusFromJSONTyped,
    PaymentOrderStatusToJSON,
} from './PaymentOrderStatus';

/**
 * The payment order for this schedule item
 * @export
 * @interface PaymentScheduleItemPaymentOrder
 */
export interface PaymentScheduleItemPaymentOrder {
    /**
     * The UUID representing the payment order in Kanmon.
     * @type {string}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    id: string;
    /**
     * The UUID representing the issued product in Kanmon.
     * @type {string}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    issuedProductId: string;
    /**
     * The UUID representing the draw request in Kanmon. (only present for Line of Credit).
     * @type {string}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    drawRequestId: string | null;
    /**
     * The UUID representing the invoice in Kanmon. (only present for Invoice Financing).
     * @type {string}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    invoiceId: string | null;
    /**
     * Your platform’s unique ID for the invoice. (only present for Invoice Financing).
     * @type {string}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    platformInvoiceId: string | null;
    /**
     * The effective UTC ISO 8601 date that the payment will process.
     * @type {string}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    effectiveDate: string;
    /**
     * The UTC ISO 8601 date that the payment was settled.
     * @type {string}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    settledDate: string | null;
    /**
     * The total payment amount - in cents.
     * @type {number}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    totalPaymentAmountCents: number;
    /**
     * The principal payment amount - in cents. (null for disbursements).
     * @type {number}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    principalPaymentAmountCents: number | null;
    /**
     * The interest payment amount - in cents. (null for disbursements).
     * @type {number}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    interestPaymentAmountCents: number | null;
    /**
     * The fee payment amount - in cents. (null for disbursements).
     * @type {number}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    feePaymentAmountCents: number | null;
    /**
     * The type of the fee that was charged. (only present when `feePaymentAmountCents` is not 0 or null).
     * @type {string}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    feeType: PaymentScheduleItemPaymentOrderFeeTypeEnum | null;
    /**
     * The direction of the payment.
     * @type {string}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    direction: PaymentScheduleItemPaymentOrderDirectionEnum;
    /**
     * 
     * @type {PaymentOrderStatus}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    status: PaymentOrderStatus;
    /**
     * Creation UTC ISO 8601 timestamp of the payment order.
     * @type {Date}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    createdAt: Date;
    /**
     * Last updated UTC ISO 8601 timestamp of the payment order.
     * @type {Date}
     * @memberof PaymentScheduleItemPaymentOrder
     */
    updatedAt: Date;
}


/**
 * @export
 */
export const PaymentScheduleItemPaymentOrderFeeTypeEnum = {
    LatePayment: 'LATE_PAYMENT',
    InsufficientFunds: 'INSUFFICIENT_FUNDS',
    TransactionFee: 'TRANSACTION_FEE',
    Maintenance: 'MAINTENANCE'
} as const;
export type PaymentScheduleItemPaymentOrderFeeTypeEnum = typeof PaymentScheduleItemPaymentOrderFeeTypeEnum[keyof typeof PaymentScheduleItemPaymentOrderFeeTypeEnum];

/**
 * @export
 */
export const PaymentScheduleItemPaymentOrderDirectionEnum = {
    Disbursement: 'DISBURSEMENT',
    Repayment: 'REPAYMENT'
} as const;
export type PaymentScheduleItemPaymentOrderDirectionEnum = typeof PaymentScheduleItemPaymentOrderDirectionEnum[keyof typeof PaymentScheduleItemPaymentOrderDirectionEnum];


/**
 * Check if a given object implements the PaymentScheduleItemPaymentOrder interface.
 */
export function instanceOfPaymentScheduleItemPaymentOrder(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('issuedProductId' in value)) return false;
    if (!('drawRequestId' in value)) return false;
    if (!('invoiceId' in value)) return false;
    if (!('platformInvoiceId' in value)) return false;
    if (!('effectiveDate' in value)) return false;
    if (!('settledDate' in value)) return false;
    if (!('totalPaymentAmountCents' in value)) return false;
    if (!('principalPaymentAmountCents' in value)) return false;
    if (!('interestPaymentAmountCents' in value)) return false;
    if (!('feePaymentAmountCents' in value)) return false;
    if (!('feeType' in value)) return false;
    if (!('direction' in value)) return false;
    if (!('status' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function PaymentScheduleItemPaymentOrderFromJSON(json: any): PaymentScheduleItemPaymentOrder {
    return PaymentScheduleItemPaymentOrderFromJSONTyped(json, false);
}

export function PaymentScheduleItemPaymentOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentScheduleItemPaymentOrder {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'issuedProductId': json['issuedProductId'],
        'drawRequestId': json['drawRequestId'],
        'invoiceId': json['invoiceId'],
        'platformInvoiceId': json['platformInvoiceId'],
        'effectiveDate': json['effectiveDate'],
        'settledDate': json['settledDate'],
        'totalPaymentAmountCents': json['totalPaymentAmountCents'],
        'principalPaymentAmountCents': json['principalPaymentAmountCents'],
        'interestPaymentAmountCents': json['interestPaymentAmountCents'],
        'feePaymentAmountCents': json['feePaymentAmountCents'],
        'feeType': json['feeType'],
        'direction': json['direction'],
        'status': PaymentOrderStatusFromJSON(json['status']),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function PaymentScheduleItemPaymentOrderToJSON(value?: PaymentScheduleItemPaymentOrder | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'issuedProductId': value['issuedProductId'],
        'drawRequestId': value['drawRequestId'],
        'invoiceId': value['invoiceId'],
        'platformInvoiceId': value['platformInvoiceId'],
        'effectiveDate': value['effectiveDate'],
        'settledDate': value['settledDate'],
        'totalPaymentAmountCents': value['totalPaymentAmountCents'],
        'principalPaymentAmountCents': value['principalPaymentAmountCents'],
        'interestPaymentAmountCents': value['interestPaymentAmountCents'],
        'feePaymentAmountCents': value['feePaymentAmountCents'],
        'feeType': value['feeType'],
        'direction': value['direction'],
        'status': PaymentOrderStatusToJSON(value['status']),
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}
