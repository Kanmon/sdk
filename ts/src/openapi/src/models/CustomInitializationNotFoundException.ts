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
 * @interface CustomInitializationNotFoundException
 */
export interface CustomInitializationNotFoundException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof CustomInitializationNotFoundException
     */
    errorCode: CustomInitializationNotFoundExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof CustomInitializationNotFoundException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof CustomInitializationNotFoundException
     */
    timestamp: string;
}


/**
 * @export
 */
export const CustomInitializationNotFoundExceptionErrorCodeEnum = {
    CustomInitializationNotFoundException: 'CustomInitializationNotFoundException'
} as const;
export type CustomInitializationNotFoundExceptionErrorCodeEnum = typeof CustomInitializationNotFoundExceptionErrorCodeEnum[keyof typeof CustomInitializationNotFoundExceptionErrorCodeEnum];


/**
 * Check if a given object implements the CustomInitializationNotFoundException interface.
 */
export function instanceOfCustomInitializationNotFoundException(value: object): value is CustomInitializationNotFoundException {
    if (!('errorCode' in value) || value['errorCode'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function CustomInitializationNotFoundExceptionFromJSON(json: any): CustomInitializationNotFoundException {
    return CustomInitializationNotFoundExceptionFromJSONTyped(json, false);
}

export function CustomInitializationNotFoundExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomInitializationNotFoundException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function CustomInitializationNotFoundExceptionToJSON(value?: CustomInitializationNotFoundException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}
