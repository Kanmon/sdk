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
 * @interface PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException
 */
export interface PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException
     */
    errorCode: PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException
     */
    timestamp: string;
}


/**
 * @export
 */
export const PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionErrorCodeEnum = {
    PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException: 'PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException'
} as const;
export type PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionErrorCodeEnum = typeof PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionErrorCodeEnum[keyof typeof PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionErrorCodeEnum];


/**
 * Check if a given object implements the PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException interface.
 */
export function instanceOfPlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException(value: object): value is PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException {
    if (!('errorCode' in value) || value['errorCode'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionFromJSON(json: any): PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException {
    return PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionFromJSONTyped(json, false);
}

export function PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductExceptionToJSON(value?: PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}

