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
import type { ActivityLog } from './ActivityLog';
import {
    ActivityLogFromJSON,
    ActivityLogFromJSONTyped,
    ActivityLogToJSON,
} from './ActivityLog';
import type { PaginationResult } from './PaginationResult';
import {
    PaginationResultFromJSON,
    PaginationResultFromJSONTyped,
    PaginationResultToJSON,
} from './PaginationResult';

/**
 * 
 * @export
 * @interface GetActivityLogsResponse
 */
export interface GetActivityLogsResponse {
    /**
     * An array of activity logs.
     * @type {Array<ActivityLog>}
     * @memberof GetActivityLogsResponse
     */
    activityLogs: Array<ActivityLog>;
    /**
     * Pagination metadata.
     * @type {PaginationResult}
     * @memberof GetActivityLogsResponse
     */
    pagination: PaginationResult;
}

/**
 * Check if a given object implements the GetActivityLogsResponse interface.
 */
export function instanceOfGetActivityLogsResponse(value: object): value is GetActivityLogsResponse {
    if (!('activityLogs' in value) || value['activityLogs'] === undefined) return false;
    if (!('pagination' in value) || value['pagination'] === undefined) return false;
    return true;
}

export function GetActivityLogsResponseFromJSON(json: any): GetActivityLogsResponse {
    return GetActivityLogsResponseFromJSONTyped(json, false);
}

export function GetActivityLogsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetActivityLogsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'activityLogs': ((json['activityLogs'] as Array<any>).map(ActivityLogFromJSON)),
        'pagination': PaginationResultFromJSON(json['pagination']),
    };
}

export function GetActivityLogsResponseToJSON(value?: GetActivityLogsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'activityLogs': ((value['activityLogs'] as Array<any>).map(ActivityLogToJSON)),
        'pagination': PaginationResultToJSON(value['pagination']),
    };
}

