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
 * @interface CreateConnectTokenRequestBody
 */
export interface CreateConnectTokenRequestBody {
    /**
     * UUID representing the user in Kanmon. Either `userId` or `platformUserId` is required.
     * @type {string}
     * @memberof CreateConnectTokenRequestBody
     */
    userId?: string;
    /**
     * Your platform’s unique ID for the user. Either `userId` or `platformUserId` is required.
     * @type {string}
     * @memberof CreateConnectTokenRequestBody
     */
    platformUserId?: string;
}

/**
 * Check if a given object implements the CreateConnectTokenRequestBody interface.
 */
export function instanceOfCreateConnectTokenRequestBody(value: object): boolean {
    return true;
}

export function CreateConnectTokenRequestBodyFromJSON(json: any): CreateConnectTokenRequestBody {
    return CreateConnectTokenRequestBodyFromJSONTyped(json, false);
}

export function CreateConnectTokenRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateConnectTokenRequestBody {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['userId'] == null ? undefined : json['userId'],
        'platformUserId': json['platformUserId'] == null ? undefined : json['platformUserId'],
    };
}

export function CreateConnectTokenRequestBodyToJSON(value?: CreateConnectTokenRequestBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'userId': value['userId'],
        'platformUserId': value['platformUserId'],
    };
}
