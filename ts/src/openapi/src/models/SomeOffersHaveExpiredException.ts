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
 * @interface SomeOffersHaveExpiredException
 */
export interface SomeOffersHaveExpiredException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof SomeOffersHaveExpiredException
     */
    errorCode: SomeOffersHaveExpiredExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof SomeOffersHaveExpiredException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof SomeOffersHaveExpiredException
     */
    timestamp: string;
}


/**
 * @export
 */
export const SomeOffersHaveExpiredExceptionErrorCodeEnum = {
    SomeOffersHaveExpiredException: 'SomeOffersHaveExpiredException'
} as const;
export type SomeOffersHaveExpiredExceptionErrorCodeEnum = typeof SomeOffersHaveExpiredExceptionErrorCodeEnum[keyof typeof SomeOffersHaveExpiredExceptionErrorCodeEnum];


/**
 * Check if a given object implements the SomeOffersHaveExpiredException interface.
 */
export function instanceOfSomeOffersHaveExpiredException(value: object): boolean {
    if (!('errorCode' in value)) return false;
    if (!('message' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function SomeOffersHaveExpiredExceptionFromJSON(json: any): SomeOffersHaveExpiredException {
    return SomeOffersHaveExpiredExceptionFromJSONTyped(json, false);
}

export function SomeOffersHaveExpiredExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SomeOffersHaveExpiredException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function SomeOffersHaveExpiredExceptionToJSON(value?: SomeOffersHaveExpiredException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}
