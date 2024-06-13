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
 * @interface CheckingAccountRequiredException
 */
export interface CheckingAccountRequiredException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof CheckingAccountRequiredException
     */
    errorCode: CheckingAccountRequiredExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof CheckingAccountRequiredException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof CheckingAccountRequiredException
     */
    timestamp: string;
}


/**
 * @export
 */
export const CheckingAccountRequiredExceptionErrorCodeEnum = {
    CheckingAccountMustPresentException: 'CheckingAccountMustPresentException'
} as const;
export type CheckingAccountRequiredExceptionErrorCodeEnum = typeof CheckingAccountRequiredExceptionErrorCodeEnum[keyof typeof CheckingAccountRequiredExceptionErrorCodeEnum];


/**
 * Check if a given object implements the CheckingAccountRequiredException interface.
 */
export function instanceOfCheckingAccountRequiredException(value: object): boolean {
    if (!('errorCode' in value)) return false;
    if (!('message' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function CheckingAccountRequiredExceptionFromJSON(json: any): CheckingAccountRequiredException {
    return CheckingAccountRequiredExceptionFromJSONTyped(json, false);
}

export function CheckingAccountRequiredExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckingAccountRequiredException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function CheckingAccountRequiredExceptionToJSON(value?: CheckingAccountRequiredException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}
