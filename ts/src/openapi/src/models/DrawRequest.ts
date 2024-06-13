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
import type { DrawRequestState } from './DrawRequestState';
import {
    DrawRequestStateFromJSON,
    DrawRequestStateFromJSONTyped,
    DrawRequestStateToJSON,
} from './DrawRequestState';

/**
 * 
 * @export
 * @interface DrawRequest
 */
export interface DrawRequest {
    /**
     * Kanmon’s unique ID for the draw request.
     * @type {string}
     * @memberof DrawRequest
     */
    id: string;
    /**
     * The UUID representing the issued product in Kanmon.
     * @type {string}
     * @memberof DrawRequest
     */
    issuedProductId: string;
    /**
     * The total draw request amount - in cents.
     * @type {number}
     * @memberof DrawRequest
     */
    amountCents: number;
    /**
     * The total draw request amount, less the fees - in cents. This is the amount disbursed to the business if the draw request is approved.
     * @type {number}
     * @memberof DrawRequest
     */
    disbursementAmountCents: number;
    /**
     * The fee amount - in cents.
     * @type {number}
     * @memberof DrawRequest
     */
    feeAmountCents: number;
    /**
     * 
     * @type {DrawRequestState}
     * @memberof DrawRequest
     */
    status: DrawRequestState;
    /**
     * The interest rate for the draw request. E.g. a value of `10` means 10%.
     * @type {number}
     * @memberof DrawRequest
     */
    interestRatePercentage: number;
    /**
     * The fee percentage charged as the borrowing cost of the draw request. E.g. a value of `2` means a 2% fee.
     * @type {number}
     * @memberof DrawRequest
     */
    feePercentage: number;
    /**
     * The duration of the repayment for the draw request - in months.
     * @type {number}
     * @memberof DrawRequest
     */
    repaymentDurationMonths: number;
    /**
     * Creation UTC ISO 8601 timestamp of the draw request.
     * @type {string}
     * @memberof DrawRequest
     */
    createdAt: string;
    /**
     * Last updated UTC ISO 8601 timestamp of the draw request.
     * @type {string}
     * @memberof DrawRequest
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the DrawRequest interface.
 */
export function instanceOfDrawRequest(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('issuedProductId' in value)) return false;
    if (!('amountCents' in value)) return false;
    if (!('disbursementAmountCents' in value)) return false;
    if (!('feeAmountCents' in value)) return false;
    if (!('status' in value)) return false;
    if (!('interestRatePercentage' in value)) return false;
    if (!('feePercentage' in value)) return false;
    if (!('repaymentDurationMonths' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function DrawRequestFromJSON(json: any): DrawRequest {
    return DrawRequestFromJSONTyped(json, false);
}

export function DrawRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DrawRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'issuedProductId': json['issuedProductId'],
        'amountCents': json['amountCents'],
        'disbursementAmountCents': json['disbursementAmountCents'],
        'feeAmountCents': json['feeAmountCents'],
        'status': DrawRequestStateFromJSON(json['status']),
        'interestRatePercentage': json['interestRatePercentage'],
        'feePercentage': json['feePercentage'],
        'repaymentDurationMonths': json['repaymentDurationMonths'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function DrawRequestToJSON(value?: DrawRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'issuedProductId': value['issuedProductId'],
        'amountCents': value['amountCents'],
        'disbursementAmountCents': value['disbursementAmountCents'],
        'feeAmountCents': value['feeAmountCents'],
        'status': DrawRequestStateToJSON(value['status']),
        'interestRatePercentage': value['interestRatePercentage'],
        'feePercentage': value['feePercentage'],
        'repaymentDurationMonths': value['repaymentDurationMonths'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}
