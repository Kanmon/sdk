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
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressLineOne: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressLineTwo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    city: string;
    /**
     * The 2 character abbreviated state
     * @type {string}
     * @memberof Address
     */
    state: AddressStateEnum;
    /**
     * Zip code can be 5 digits, 9 digits, or 5+4 including a hyphen or plus sign, e.g. 90210, 902101234, 90210-1234 or 90210+1234
     * @type {string}
     * @memberof Address
     */
    zipcode: string;
    /**
     * USA
     * @type {string}
     * @memberof Address
     */
    country: string;
}


/**
 * @export
 */
export const AddressStateEnum = {
    AL: 'AL',
    KY: 'KY',
    OH: 'OH',
    AK: 'AK',
    LA: 'LA',
    OK: 'OK',
    AZ: 'AZ',
    ME: 'ME',
    OR: 'OR',
    AR: 'AR',
    MD: 'MD',
    PA: 'PA',
    AS: 'AS',
    MA: 'MA',
    PR: 'PR',
    CA: 'CA',
    MI: 'MI',
    RI: 'RI',
    CO: 'CO',
    MN: 'MN',
    SC: 'SC',
    CT: 'CT',
    MS: 'MS',
    SD: 'SD',
    DE: 'DE',
    MO: 'MO',
    TN: 'TN',
    DC: 'DC',
    MT: 'MT',
    TX: 'TX',
    FL: 'FL',
    NE: 'NE',
    TT: 'TT',
    GA: 'GA',
    NV: 'NV',
    UT: 'UT',
    GU: 'GU',
    NH: 'NH',
    VT: 'VT',
    HI: 'HI',
    NJ: 'NJ',
    VA: 'VA',
    ID: 'ID',
    NM: 'NM',
    VI: 'VI',
    IL: 'IL',
    NY: 'NY',
    WA: 'WA',
    IN: 'IN',
    NC: 'NC',
    WV: 'WV',
    IA: 'IA',
    ND: 'ND',
    WI: 'WI',
    KS: 'KS',
    MP: 'MP',
    WY: 'WY'
} as const;
export type AddressStateEnum = typeof AddressStateEnum[keyof typeof AddressStateEnum];


/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): value is Address {
    if (!('addressLineOne' in value) || value['addressLineOne'] === undefined) return false;
    if (!('city' in value) || value['city'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('zipcode' in value) || value['zipcode'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    return true;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if (json == null) {
        return json;
    }
    return {
        
        'addressLineOne': json['addressLineOne'],
        'addressLineTwo': json['addressLineTwo'] == null ? undefined : json['addressLineTwo'],
        'city': json['city'],
        'state': json['state'],
        'zipcode': json['zipcode'],
        'country': json['country'],
    };
}

export function AddressToJSON(value?: Address | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'addressLineOne': value['addressLineOne'],
        'addressLineTwo': value['addressLineTwo'],
        'city': value['city'],
        'state': value['state'],
        'zipcode': value['zipcode'],
        'country': value['country'],
    };
}

