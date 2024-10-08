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
 * @interface BankStatementsInvalidException
 */
export interface BankStatementsInvalidException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof BankStatementsInvalidException
     */
    errorCode: BankStatementsInvalidExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof BankStatementsInvalidException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof BankStatementsInvalidException
     */
    timestamp: string;
}


/**
 * @export
 */
export const BankStatementsInvalidExceptionErrorCodeEnum = {
    BankStatementsInvalidException: 'BankStatementsInvalidException'
} as const;
export type BankStatementsInvalidExceptionErrorCodeEnum = typeof BankStatementsInvalidExceptionErrorCodeEnum[keyof typeof BankStatementsInvalidExceptionErrorCodeEnum];


/**
 * Check if a given object implements the BankStatementsInvalidException interface.
 */
export function instanceOfBankStatementsInvalidException(value: object): value is BankStatementsInvalidException {
    if (!('errorCode' in value) || value['errorCode'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function BankStatementsInvalidExceptionFromJSON(json: any): BankStatementsInvalidException {
    return BankStatementsInvalidExceptionFromJSONTyped(json, false);
}

export function BankStatementsInvalidExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankStatementsInvalidException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function BankStatementsInvalidExceptionToJSON(value?: BankStatementsInvalidException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}

