/**
 * Kanmon Public V2 API
 * Kanmon\'s public api. Contains all of the endpoints for both capital providers and platforms
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class BadRequestException {
    /**
    * Safe for programmatic use.
    */
    'errorCode': BadRequestExceptionErrorCodeEnum;
    /**
    * The human readable description of the error.
    */
    'message': string;
    /**
    * When the error occurred - ISO 8601 format.
    */
    'timestamp': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "BadRequestExceptionErrorCodeEnum",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BadRequestException.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BadRequestExceptionErrorCodeEnum {
    BadRequestException = 'BadRequestException'
}

