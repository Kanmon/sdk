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
 * @interface BusinessAlreadyExistsException
 */
export interface BusinessAlreadyExistsException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof BusinessAlreadyExistsException
     */
    errorCode: BusinessAlreadyExistsExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof BusinessAlreadyExistsException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof BusinessAlreadyExistsException
     */
    timestamp: string;
}


/**
 * @export
 */
export const BusinessAlreadyExistsExceptionErrorCodeEnum = {
    BusinessAlreadyExistsException: 'BusinessAlreadyExistsException'
} as const;
export type BusinessAlreadyExistsExceptionErrorCodeEnum = typeof BusinessAlreadyExistsExceptionErrorCodeEnum[keyof typeof BusinessAlreadyExistsExceptionErrorCodeEnum];


/**
 * Check if a given object implements the BusinessAlreadyExistsException interface.
 */
export function instanceOfBusinessAlreadyExistsException(value: object): value is BusinessAlreadyExistsException {
    if (!('errorCode' in value) || value['errorCode'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function BusinessAlreadyExistsExceptionFromJSON(json: any): BusinessAlreadyExistsException {
    return BusinessAlreadyExistsExceptionFromJSONTyped(json, false);
}

export function BusinessAlreadyExistsExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessAlreadyExistsException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function BusinessAlreadyExistsExceptionToJSON(value?: BusinessAlreadyExistsException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}

