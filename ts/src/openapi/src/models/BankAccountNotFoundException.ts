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
 * @interface BankAccountNotFoundException
 */
export interface BankAccountNotFoundException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof BankAccountNotFoundException
     */
    errorCode: BankAccountNotFoundExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof BankAccountNotFoundException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof BankAccountNotFoundException
     */
    timestamp: string;
}


/**
 * @export
 */
export const BankAccountNotFoundExceptionErrorCodeEnum = {
    BankAccountNotFoundException: 'BankAccountNotFoundException'
} as const;
export type BankAccountNotFoundExceptionErrorCodeEnum = typeof BankAccountNotFoundExceptionErrorCodeEnum[keyof typeof BankAccountNotFoundExceptionErrorCodeEnum];


/**
 * Check if a given object implements the BankAccountNotFoundException interface.
 */
export function instanceOfBankAccountNotFoundException(value: object): value is BankAccountNotFoundException {
    if (!('errorCode' in value) || value['errorCode'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function BankAccountNotFoundExceptionFromJSON(json: any): BankAccountNotFoundException {
    return BankAccountNotFoundExceptionFromJSONTyped(json, false);
}

export function BankAccountNotFoundExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccountNotFoundException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function BankAccountNotFoundExceptionToJSON(value?: BankAccountNotFoundException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}

