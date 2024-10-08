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
 * @interface OfferNotFoundException
 */
export interface OfferNotFoundException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof OfferNotFoundException
     */
    errorCode: OfferNotFoundExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof OfferNotFoundException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof OfferNotFoundException
     */
    timestamp: string;
}


/**
 * @export
 */
export const OfferNotFoundExceptionErrorCodeEnum = {
    OfferNotFoundException: 'OfferNotFoundException'
} as const;
export type OfferNotFoundExceptionErrorCodeEnum = typeof OfferNotFoundExceptionErrorCodeEnum[keyof typeof OfferNotFoundExceptionErrorCodeEnum];


/**
 * Check if a given object implements the OfferNotFoundException interface.
 */
export function instanceOfOfferNotFoundException(value: object): value is OfferNotFoundException {
    if (!('errorCode' in value) || value['errorCode'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function OfferNotFoundExceptionFromJSON(json: any): OfferNotFoundException {
    return OfferNotFoundExceptionFromJSONTyped(json, false);
}

export function OfferNotFoundExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfferNotFoundException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function OfferNotFoundExceptionToJSON(value?: OfferNotFoundException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}

