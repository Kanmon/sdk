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
 * @interface IncorrectProductTypeException
 */
export interface IncorrectProductTypeException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof IncorrectProductTypeException
     */
    errorCode: IncorrectProductTypeExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof IncorrectProductTypeException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof IncorrectProductTypeException
     */
    timestamp: string;
}


/**
 * @export
 */
export const IncorrectProductTypeExceptionErrorCodeEnum = {
    IncorrectProductTypeException: 'IncorrectProductTypeException'
} as const;
export type IncorrectProductTypeExceptionErrorCodeEnum = typeof IncorrectProductTypeExceptionErrorCodeEnum[keyof typeof IncorrectProductTypeExceptionErrorCodeEnum];


/**
 * Check if a given object implements the IncorrectProductTypeException interface.
 */
export function instanceOfIncorrectProductTypeException(value: object): boolean {
    if (!('errorCode' in value)) return false;
    if (!('message' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function IncorrectProductTypeExceptionFromJSON(json: any): IncorrectProductTypeException {
    return IncorrectProductTypeExceptionFromJSONTyped(json, false);
}

export function IncorrectProductTypeExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncorrectProductTypeException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function IncorrectProductTypeExceptionToJSON(value?: IncorrectProductTypeException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}
