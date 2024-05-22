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
import type { IssuedProductServicingData } from './IssuedProductServicingData';
import {
    IssuedProductServicingDataFromJSON,
    IssuedProductServicingDataFromJSONTyped,
    IssuedProductServicingDataToJSON,
} from './IssuedProductServicingData';

/**
 * 
 * @export
 * @interface IssuedProduct
 */
export interface IssuedProduct {
    /**
     * The UUID representing the issued product in Kanmon.
     * @type {string}
     * @memberof IssuedProduct
     */
    id: string;
    /**
     * The UUID representing the offer tied to this issued product in Kanmon.
     * @type {string}
     * @memberof IssuedProduct
     */
    offerId: string;
    /**
     * The UUID representing the business in Kanmon.
     * @type {string}
     * @memberof IssuedProduct
     */
    businessId: string;
    /**
     * Your platform’s unique ID for the business.
     * @type {string}
     * @memberof IssuedProduct
     */
    platformBusinessId: string | null;
    /**
     * The current status of the loan.
     * @type {string}
     * @memberof IssuedProduct
     */
    loanStatus: IssuedProductLoanStatusEnum;
    /**
     * 
     * @type {IssuedProductServicingData}
     * @memberof IssuedProduct
     */
    servicingData: IssuedProductServicingData;
    /**
     * Creation UTC ISO 8601 timestamp of the prequalification.
     * @type {Date}
     * @memberof IssuedProduct
     */
    createdAt: Date;
    /**
     * Last updated UTC ISO 8601 timestamp of the prequalification.
     * @type {Date}
     * @memberof IssuedProduct
     */
    updatedAt: Date;
}


/**
 * @export
 */
export const IssuedProductLoanStatusEnum = {
    Current: 'CURRENT',
    Late: 'LATE',
    FullyPaid: 'FULLY_PAID',
    Refinanced: 'REFINANCED',
    Defaulted: 'DEFAULTED'
} as const;
export type IssuedProductLoanStatusEnum = typeof IssuedProductLoanStatusEnum[keyof typeof IssuedProductLoanStatusEnum];


/**
 * Check if a given object implements the IssuedProduct interface.
 */
export function instanceOfIssuedProduct(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('offerId' in value)) return false;
    if (!('businessId' in value)) return false;
    if (!('platformBusinessId' in value)) return false;
    if (!('loanStatus' in value)) return false;
    if (!('servicingData' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function IssuedProductFromJSON(json: any): IssuedProduct {
    return IssuedProductFromJSONTyped(json, false);
}

export function IssuedProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssuedProduct {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'offerId': json['offerId'],
        'businessId': json['businessId'],
        'platformBusinessId': json['platformBusinessId'],
        'loanStatus': json['loanStatus'],
        'servicingData': IssuedProductServicingDataFromJSON(json['servicingData']),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function IssuedProductToJSON(value?: IssuedProduct | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'offerId': value['offerId'],
        'businessId': value['businessId'],
        'platformBusinessId': value['platformBusinessId'],
        'loanStatus': value['loanStatus'],
        'servicingData': IssuedProductServicingDataToJSON(value['servicingData']),
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}

