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
import type { ProductType } from './ProductType';
import {
    ProductTypeFromJSON,
    ProductTypeFromJSONTyped,
    ProductTypeToJSON,
} from './ProductType';

/**
 * 
 * @export
 * @interface BusinessPrequalification
 */
export interface BusinessPrequalification {
    /**
     * 
     * @type {ProductType}
     * @memberof BusinessPrequalification
     */
    product: ProductType;
    /**
     * The UUID representing your platform in Kanmon.
     * @type {string}
     * @memberof BusinessPrequalification
     */
    platformId: string;
    /**
     * The UUID representing the business in Kanmon.
     * @type {string}
     * @memberof BusinessPrequalification
     */
    businessId: string | null;
    /**
     * Your platform’s unique ID for the business.
     * @type {string}
     * @memberof BusinessPrequalification
     */
    platformBusinessId: string;
    /**
     * Whether or not the business has been prequalified.
     * @type {boolean}
     * @memberof BusinessPrequalification
     */
    isPrequalified: boolean;
    /**
     * Number describing the prequalification amount of the business in cents.
     * @type {number}
     * @memberof BusinessPrequalification
     */
    prequalifiedAmountCents: number | null;
    /**
     * Creation UTC ISO 8601 timestamp of the prequalification.
     * @type {string}
     * @memberof BusinessPrequalification
     */
    createdAt: string;
    /**
     * Last updated UTC ISO 8601 timestamp of the prequalification.
     * @type {string}
     * @memberof BusinessPrequalification
     */
    updatedAt: string;
}



/**
 * Check if a given object implements the BusinessPrequalification interface.
 */
export function instanceOfBusinessPrequalification(value: object): value is BusinessPrequalification {
    if (!('product' in value) || value['product'] === undefined) return false;
    if (!('platformId' in value) || value['platformId'] === undefined) return false;
    if (!('businessId' in value) || value['businessId'] === undefined) return false;
    if (!('platformBusinessId' in value) || value['platformBusinessId'] === undefined) return false;
    if (!('isPrequalified' in value) || value['isPrequalified'] === undefined) return false;
    if (!('prequalifiedAmountCents' in value) || value['prequalifiedAmountCents'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function BusinessPrequalificationFromJSON(json: any): BusinessPrequalification {
    return BusinessPrequalificationFromJSONTyped(json, false);
}

export function BusinessPrequalificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessPrequalification {
    if (json == null) {
        return json;
    }
    return {
        
        'product': ProductTypeFromJSON(json['product']),
        'platformId': json['platformId'],
        'businessId': json['businessId'],
        'platformBusinessId': json['platformBusinessId'],
        'isPrequalified': json['isPrequalified'],
        'prequalifiedAmountCents': json['prequalifiedAmountCents'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function BusinessPrequalificationToJSON(value?: BusinessPrequalification | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'product': ProductTypeToJSON(value['product']),
        'platformId': value['platformId'],
        'businessId': value['businessId'],
        'platformBusinessId': value['platformBusinessId'],
        'isPrequalified': value['isPrequalified'],
        'prequalifiedAmountCents': value['prequalifiedAmountCents'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}

