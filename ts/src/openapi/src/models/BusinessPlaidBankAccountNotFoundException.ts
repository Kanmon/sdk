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
 * @interface BusinessPlaidBankAccountNotFoundException
 */
export interface BusinessPlaidBankAccountNotFoundException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof BusinessPlaidBankAccountNotFoundException
     */
    errorCode: BusinessPlaidBankAccountNotFoundExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof BusinessPlaidBankAccountNotFoundException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof BusinessPlaidBankAccountNotFoundException
     */
    timestamp: string;
}


/**
 * @export
 */
export const BusinessPlaidBankAccountNotFoundExceptionErrorCodeEnum = {
    BusinessPlaidBankAccountNotFoundException: 'BusinessPlaidBankAccountNotFoundException'
} as const;
export type BusinessPlaidBankAccountNotFoundExceptionErrorCodeEnum = typeof BusinessPlaidBankAccountNotFoundExceptionErrorCodeEnum[keyof typeof BusinessPlaidBankAccountNotFoundExceptionErrorCodeEnum];


/**
 * Check if a given object implements the BusinessPlaidBankAccountNotFoundException interface.
 */
export function instanceOfBusinessPlaidBankAccountNotFoundException(value: object): boolean {
    if (!('errorCode' in value)) return false;
    if (!('message' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function BusinessPlaidBankAccountNotFoundExceptionFromJSON(json: any): BusinessPlaidBankAccountNotFoundException {
    return BusinessPlaidBankAccountNotFoundExceptionFromJSONTyped(json, false);
}

export function BusinessPlaidBankAccountNotFoundExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessPlaidBankAccountNotFoundException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function BusinessPlaidBankAccountNotFoundExceptionToJSON(value?: BusinessPlaidBankAccountNotFoundException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}

