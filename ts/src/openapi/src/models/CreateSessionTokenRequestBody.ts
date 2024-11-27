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
import type { CreateSessionTokenRequestBodyData } from './CreateSessionTokenRequestBodyData';
import {
    CreateSessionTokenRequestBodyDataFromJSON,
    CreateSessionTokenRequestBodyDataFromJSONTyped,
    CreateSessionTokenRequestBodyDataToJSON,
} from './CreateSessionTokenRequestBodyData';

/**
 * 
 * @export
 * @interface CreateSessionTokenRequestBody
 */
export interface CreateSessionTokenRequestBody {
    /**
     * The unique identifier for business within Kanmon. Either of `businessId` or `platformBusinessId` is required.
     * @type {string}
     * @memberof CreateSessionTokenRequestBody
     */
    businessId?: string;
    /**
     * The unique identifier for business in your platform. Either of `businessId` or `platformBusinessId` is required.
     * @type {string}
     * @memberof CreateSessionTokenRequestBody
     */
    platformBusinessId?: string;
    /**
     * 
     * @type {CreateSessionTokenRequestBodyData}
     * @memberof CreateSessionTokenRequestBody
     */
    data: CreateSessionTokenRequestBodyData;
}

/**
 * Check if a given object implements the CreateSessionTokenRequestBody interface.
 */
export function instanceOfCreateSessionTokenRequestBody(value: object): value is CreateSessionTokenRequestBody {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CreateSessionTokenRequestBodyFromJSON(json: any): CreateSessionTokenRequestBody {
    return CreateSessionTokenRequestBodyFromJSONTyped(json, false);
}

export function CreateSessionTokenRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSessionTokenRequestBody {
    if (json == null) {
        return json;
    }
    return {
        
        'businessId': json['businessId'] == null ? undefined : json['businessId'],
        'platformBusinessId': json['platformBusinessId'] == null ? undefined : json['platformBusinessId'],
        'data': CreateSessionTokenRequestBodyDataFromJSON(json['data']),
    };
}

export function CreateSessionTokenRequestBodyToJSON(value?: CreateSessionTokenRequestBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'businessId': value['businessId'],
        'platformBusinessId': value['platformBusinessId'],
        'data': CreateSessionTokenRequestBodyDataToJSON(value['data']),
    };
}

