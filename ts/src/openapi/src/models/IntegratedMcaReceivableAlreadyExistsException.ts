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
 * @interface IntegratedMcaReceivableAlreadyExistsException
 */
export interface IntegratedMcaReceivableAlreadyExistsException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof IntegratedMcaReceivableAlreadyExistsException
     */
    errorCode: IntegratedMcaReceivableAlreadyExistsExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof IntegratedMcaReceivableAlreadyExistsException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof IntegratedMcaReceivableAlreadyExistsException
     */
    timestamp: string;
}


/**
 * @export
 */
export const IntegratedMcaReceivableAlreadyExistsExceptionErrorCodeEnum = {
    IntegratedMcaReceivableAlreadyExistsException: 'IntegratedMcaReceivableAlreadyExistsException'
} as const;
export type IntegratedMcaReceivableAlreadyExistsExceptionErrorCodeEnum = typeof IntegratedMcaReceivableAlreadyExistsExceptionErrorCodeEnum[keyof typeof IntegratedMcaReceivableAlreadyExistsExceptionErrorCodeEnum];


/**
 * Check if a given object implements the IntegratedMcaReceivableAlreadyExistsException interface.
 */
export function instanceOfIntegratedMcaReceivableAlreadyExistsException(value: object): boolean {
    if (!('errorCode' in value)) return false;
    if (!('message' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function IntegratedMcaReceivableAlreadyExistsExceptionFromJSON(json: any): IntegratedMcaReceivableAlreadyExistsException {
    return IntegratedMcaReceivableAlreadyExistsExceptionFromJSONTyped(json, false);
}

export function IntegratedMcaReceivableAlreadyExistsExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegratedMcaReceivableAlreadyExistsException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function IntegratedMcaReceivableAlreadyExistsExceptionToJSON(value?: IntegratedMcaReceivableAlreadyExistsException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}

