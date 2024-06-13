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
 * @interface InternalServerErrorException
 */
export interface InternalServerErrorException {
    /**
     * Safe for programmatic use.
     * @type {string}
     * @memberof InternalServerErrorException
     */
    errorCode: InternalServerErrorExceptionErrorCodeEnum;
    /**
     * The human readable description of the error.
     * @type {string}
     * @memberof InternalServerErrorException
     */
    message: string;
    /**
     * When the error occurred - ISO 8601 format.
     * @type {string}
     * @memberof InternalServerErrorException
     */
    timestamp: string;
}


/**
 * @export
 */
export const InternalServerErrorExceptionErrorCodeEnum = {
    InternalServerErrorException: 'InternalServerErrorException'
} as const;
export type InternalServerErrorExceptionErrorCodeEnum = typeof InternalServerErrorExceptionErrorCodeEnum[keyof typeof InternalServerErrorExceptionErrorCodeEnum];


/**
 * Check if a given object implements the InternalServerErrorException interface.
 */
export function instanceOfInternalServerErrorException(value: object): boolean {
    if (!('errorCode' in value)) return false;
    if (!('message' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function InternalServerErrorExceptionFromJSON(json: any): InternalServerErrorException {
    return InternalServerErrorExceptionFromJSONTyped(json, false);
}

export function InternalServerErrorExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalServerErrorException {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'timestamp': json['timestamp'],
    };
}

export function InternalServerErrorExceptionToJSON(value?: InternalServerErrorException | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': value['errorCode'],
        'message': value['message'],
        'timestamp': value['timestamp'],
    };
}

