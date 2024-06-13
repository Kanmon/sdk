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
import type { OfferTerms } from './OfferTerms';
import {
    OfferTermsFromJSON,
    OfferTermsFromJSONTyped,
    OfferTermsToJSON,
} from './OfferTerms';

/**
 * 
 * @export
 * @interface Offer
 */
export interface Offer {
    /**
     * A unique id representing the offer object.
     * @type {string}
     * @memberof Offer
     */
    id: string;
    /**
     * The UUID representing the business in Kanmon.
     * @type {string}
     * @memberof Offer
     */
    businessId: string;
    /**
     * Your platform’s unique ID for the business.
     * @type {string}
     * @memberof Offer
     */
    platformBusinessId: string | null;
    /**
     * 
     * @type {OfferTerms}
     * @memberof Offer
     */
    terms: OfferTerms;
    /**
     * The ISO 8601 timestamp for when the offer expires.
     * @type {string}
     * @memberof Offer
     */
    expiredAt: string | null;
    /**
     * If the offer has been selected by the business, the ISO 8601 timestamp for when it was selected.
     * @type {string}
     * @memberof Offer
     */
    selectedAt: string | null;
    /**
     * Creation ISO 8601 timestamp of the offer.
     * @type {string}
     * @memberof Offer
     */
    createdAt: string;
    /**
     * Last updated ISO 8601 timestamp of the offer.
     * @type {string}
     * @memberof Offer
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the Offer interface.
 */
export function instanceOfOffer(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('businessId' in value)) return false;
    if (!('platformBusinessId' in value)) return false;
    if (!('terms' in value)) return false;
    if (!('expiredAt' in value)) return false;
    if (!('selectedAt' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function OfferFromJSON(json: any): Offer {
    return OfferFromJSONTyped(json, false);
}

export function OfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): Offer {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'businessId': json['businessId'],
        'platformBusinessId': json['platformBusinessId'],
        'terms': OfferTermsFromJSON(json['terms']),
        'expiredAt': json['expiredAt'],
        'selectedAt': json['selectedAt'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function OfferToJSON(value?: Offer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'businessId': value['businessId'],
        'platformBusinessId': value['platformBusinessId'],
        'terms': OfferTermsToJSON(value['terms']),
        'expiredAt': value['expiredAt'],
        'selectedAt': value['selectedAt'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}
