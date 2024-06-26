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
    addressLineTwo?: string;
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
    Al: 'AL',
    Ky: 'KY',
    Oh: 'OH',
    Ak: 'AK',
    La: 'LA',
    Ok: 'OK',
    Az: 'AZ',
    Me: 'ME',
    Or: 'OR',
    Ar: 'AR',
    Md: 'MD',
    Pa: 'PA',
    As: 'AS',
    Ma: 'MA',
    Pr: 'PR',
    Ca: 'CA',
    Mi: 'MI',
    Ri: 'RI',
    Co: 'CO',
    Mn: 'MN',
    Sc: 'SC',
    Ct: 'CT',
    Ms: 'MS',
    Sd: 'SD',
    De: 'DE',
    Mo: 'MO',
    Tn: 'TN',
    Dc: 'DC',
    Mt: 'MT',
    Tx: 'TX',
    Fl: 'FL',
    Ne: 'NE',
    Tt: 'TT',
    Ga: 'GA',
    Nv: 'NV',
    Ut: 'UT',
    Gu: 'GU',
    Nh: 'NH',
    Vt: 'VT',
    Hi: 'HI',
    Nj: 'NJ',
    Va: 'VA',
    Id: 'ID',
    Nm: 'NM',
    Vi: 'VI',
    Il: 'IL',
    Ny: 'NY',
    Wa: 'WA',
    In: 'IN',
    Nc: 'NC',
    Wv: 'WV',
    Ia: 'IA',
    Nd: 'ND',
    Wi: 'WI',
    Ks: 'KS',
    Mp: 'MP',
    Wy: 'WY'
} as const;
export type AddressStateEnum = typeof AddressStateEnum[keyof typeof AddressStateEnum];


/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): boolean {
    if (!('addressLineOne' in value)) return false;
    if (!('city' in value)) return false;
    if (!('state' in value)) return false;
    if (!('zipcode' in value)) return false;
    if (!('country' in value)) return false;
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

