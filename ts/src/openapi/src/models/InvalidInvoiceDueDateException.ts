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
 * @interface InvalidInvoiceDueDateException
 */
export interface InvalidInvoiceDueDateException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof InvalidInvoiceDueDateException
     */
    errorCode: InvalidInvoiceDueDateExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof InvalidInvoiceDueDateException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof InvalidInvoiceDueDateException
     */
    timestamp: string;
}


/**
 * @export
 */
export const InvalidInvoiceDueDateExceptionErrorCodeEnum = {
    InvalidInvoiceDueDateException: 'InvalidInvoiceDueDateException'
} as const;
export type InvalidInvoiceDueDateExceptionErrorCodeEnum = typeof InvalidInvoiceDueDateExceptionErrorCodeEnum[keyof typeof InvalidInvoiceDueDateExceptionErrorCodeEnum];


/**
 * Check if a given object implements the InvalidInvoiceDueDateException interface.
 */
export function instanceOfInvalidInvoiceDueDateException(value: object): boolean {
    if (!('errorCode' in value)) return false;
    if (!('message' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function InvalidInvoiceDueDateExceptionFromJSON(json: any): InvalidInvoiceDueDateException {
    return InvalidInvoiceDueDateExceptionFromJSONTyped(json, false);
}

export function InvalidInvoiceDueDateExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvalidInvoiceDueDateException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function InvalidInvoiceDueDateExceptionToJSON(value?: InvalidInvoiceDueDateException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}
