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
import type { BusinessAddress } from './BusinessAddress';
import {
    BusinessAddressFromJSON,
    BusinessAddressFromJSONTyped,
    BusinessAddressToJSON,
} from './BusinessAddress';

/**
 * 
 * @export
 * @interface Business
 */
export interface Business {
    /**
     * The UUID representing the business in Kanmon.
     * @type {string}
     * @memberof Business
     */
    id: string;
    /**
     * Your platform’s unique ID for the business.
     * @type {string}
     * @memberof Business
     */
    platformBusinessId?: string;
    /**
     * The business’s name.
     * @type {object}
     * @memberof Business
     */
    name: object | null;
    /**
     * 
     * @type {BusinessAddress}
     * @memberof Business
     */
    address: BusinessAddress | null;
    /**
     * The business’s EIN. Only digits, no formatting.
     * @type {object}
     * @memberof Business
     */
    ein: object | null;
    /**
     * The business’s phone number. No formatting characters, country code is optional.
     * @type {object}
     * @memberof Business
     */
    phoneNumber: object | null;
    /**
     * The business’s website.
     * @type {object}
     * @memberof Business
     */
    website: object | null;
    /**
     * Metadata from your system that you want to associate the business with.
     * @type {object}
     * @memberof Business
     */
    metadata: object;
    /**
     * Creation UTC ISO 8601 timestamp of the business.
     * @type {string}
     * @memberof Business
     */
    createdAt: string;
    /**
     * Last updated UTC ISO 8601 timestamp of the business.
     * @type {string}
     * @memberof Business
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the Business interface.
 */
export function instanceOfBusiness(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('address' in value)) return false;
    if (!('ein' in value)) return false;
    if (!('phoneNumber' in value)) return false;
    if (!('website' in value)) return false;
    if (!('metadata' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function BusinessFromJSON(json: any): Business {
    return BusinessFromJSONTyped(json, false);
}

export function BusinessFromJSONTyped(json: any, ignoreDiscriminator: boolean): Business {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'platformBusinessId': json['platformBusinessId'] == null ? undefined : json['platformBusinessId'],
        'name': json['name'],
        'address': BusinessAddressFromJSON(json['address']),
        'ein': json['ein'],
        'phoneNumber': json['phoneNumber'],
        'website': json['website'],
        'metadata': json['metadata'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function BusinessToJSON(value?: Business | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'platformBusinessId': value['platformBusinessId'],
        'name': value['name'],
        'address': BusinessAddressToJSON(value['address']),
        'ein': value['ein'],
        'phoneNumber': value['phoneNumber'],
        'website': value['website'],
        'metadata': value['metadata'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}
