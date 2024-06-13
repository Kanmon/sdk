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
 * @interface BusinessHasNoPrimaryOwnerException
 */
export interface BusinessHasNoPrimaryOwnerException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof BusinessHasNoPrimaryOwnerException
     */
    errorCode: BusinessHasNoPrimaryOwnerExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof BusinessHasNoPrimaryOwnerException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof BusinessHasNoPrimaryOwnerException
     */
    timestamp: string;
}


/**
 * @export
 */
export const BusinessHasNoPrimaryOwnerExceptionErrorCodeEnum = {
    BusinessHasNoPrimaryOwnerException: 'BusinessHasNoPrimaryOwnerException'
} as const;
export type BusinessHasNoPrimaryOwnerExceptionErrorCodeEnum = typeof BusinessHasNoPrimaryOwnerExceptionErrorCodeEnum[keyof typeof BusinessHasNoPrimaryOwnerExceptionErrorCodeEnum];


/**
 * Check if a given object implements the BusinessHasNoPrimaryOwnerException interface.
 */
export function instanceOfBusinessHasNoPrimaryOwnerException(value: object): boolean {
    if (!('errorCode' in value)) return false;
    if (!('message' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function BusinessHasNoPrimaryOwnerExceptionFromJSON(json: any): BusinessHasNoPrimaryOwnerException {
    return BusinessHasNoPrimaryOwnerExceptionFromJSONTyped(json, false);
}

export function BusinessHasNoPrimaryOwnerExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessHasNoPrimaryOwnerException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function BusinessHasNoPrimaryOwnerExceptionToJSON(value?: BusinessHasNoPrimaryOwnerException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}

