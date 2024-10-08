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
 * @interface ActivityLog
 */
export interface ActivityLog {
    /**
     * The UUID representing the activity log item in Kanmon.
     * @type {string}
     * @memberof ActivityLog
     */
    id: string;
    /**
     * The UUID representing the business in Kanmon.
     * @type {string}
     * @memberof ActivityLog
     */
    businessId: string;
    /**
     * Your platform’s unique business ID for the user.
     * @type {string}
     * @memberof ActivityLog
     */
    platformBusinessId: string | null;
    /**
     * Event details and schema: https://kanmon.dev/docs/webhook-events
     * @type {object}
     * @memberof ActivityLog
     */
    payload: object;
    /**
     * A description of the log event type.
     * @type {string}
     * @memberof ActivityLog
     */
    eventType: string;
    /**
     * Creation UTC ISO 8601 timestamp of the business.
     * @type {string}
     * @memberof ActivityLog
     */
    createdAt: string;
    /**
     * Last updated UTC ISO 8601 timestamp of the business.
     * @type {string}
     * @memberof ActivityLog
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the ActivityLog interface.
 */
export function instanceOfActivityLog(value: object): value is ActivityLog {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('businessId' in value) || value['businessId'] === undefined) return false;
    if (!('platformBusinessId' in value) || value['platformBusinessId'] === undefined) return false;
    if (!('payload' in value) || value['payload'] === undefined) return false;
    if (!('eventType' in value) || value['eventType'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function ActivityLogFromJSON(json: any): ActivityLog {
    return ActivityLogFromJSONTyped(json, false);
}

export function ActivityLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityLog {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'businessId': json['businessId'],
        'platformBusinessId': json['platformBusinessId'],
        'payload': json['payload'],
        'eventType': json['eventType'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function ActivityLogToJSON(value?: ActivityLog | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'businessId': value['businessId'],
        'platformBusinessId': value['platformBusinessId'],
        'payload': value['payload'],
        'eventType': value['eventType'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}

