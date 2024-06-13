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
import type { BusinessPrequalification } from './BusinessPrequalification';
import {
    BusinessPrequalificationFromJSON,
    BusinessPrequalificationFromJSONTyped,
    BusinessPrequalificationToJSON,
} from './BusinessPrequalification';
import type { PaginationResult } from './PaginationResult';
import {
    PaginationResultFromJSON,
    PaginationResultFromJSONTyped,
    PaginationResultToJSON,
} from './PaginationResult';

/**
 * 
 * @export
 * @interface GetPrequalificationsResponse
 */
export interface GetPrequalificationsResponse {
    /**
     * Array of prequalifications.
     * @type {Array<BusinessPrequalification>}
     * @memberof GetPrequalificationsResponse
     */
    prequalifications: Array<BusinessPrequalification>;
    /**
     * Pagination metadata.
     * @type {PaginationResult}
     * @memberof GetPrequalificationsResponse
     */
    pagination: PaginationResult;
}

/**
 * Check if a given object implements the GetPrequalificationsResponse interface.
 */
export function instanceOfGetPrequalificationsResponse(value: object): boolean {
    if (!('prequalifications' in value)) return false;
    if (!('pagination' in value)) return false;
    return true;
}

export function GetPrequalificationsResponseFromJSON(json: any): GetPrequalificationsResponse {
    return GetPrequalificationsResponseFromJSONTyped(json, false);
}

export function GetPrequalificationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPrequalificationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'prequalifications': ((json['prequalifications'] as Array<any>).map(BusinessPrequalificationFromJSON)),
        'pagination': PaginationResultFromJSON(json['pagination']),
    };
}

export function GetPrequalificationsResponseToJSON(value?: GetPrequalificationsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'prequalifications': ((value['prequalifications'] as Array<any>).map(BusinessPrequalificationToJSON)),
        'pagination': PaginationResultToJSON(value['pagination']),
    };
}
