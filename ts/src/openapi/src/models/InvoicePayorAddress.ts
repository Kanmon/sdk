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
 * The address of the payor. The address is optional. If you provide the address, you need to provide all the required fields in the address.
 * @export
 * @interface InvoicePayorAddress
 */
export interface InvoicePayorAddress {
    /**
     * 
     * @type {string}
     * @memberof InvoicePayorAddress
     */
    addressLineOne: string;
    /**
     * 
     * @type {string}
     * @memberof InvoicePayorAddress
     */
    addressLineTwo?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoicePayorAddress
     */
    city: string;
    /**
     * The 2 character abbreviated state
     * @type {string}
     * @memberof InvoicePayorAddress
     */
    state: InvoicePayorAddressStateEnum;
    /**
     * Zip code can be 5 digits, 9 digits, or 5+4 including a hyphen or plus sign, e.g. 90210, 902101234, 90210-1234 or 90210+1234
     * @type {string}
     * @memberof InvoicePayorAddress
     */
    zipcode: string;
    /**
     * USA
     * @type {string}
     * @memberof InvoicePayorAddress
     */
    country: string;
}


/**
 * @export
 */
export const InvoicePayorAddressStateEnum = {
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
export type InvoicePayorAddressStateEnum = typeof InvoicePayorAddressStateEnum[keyof typeof InvoicePayorAddressStateEnum];


/**
 * Check if a given object implements the InvoicePayorAddress interface.
 */
export function instanceOfInvoicePayorAddress(value: object): boolean {
    if (!('addressLineOne' in value)) return false;
    if (!('city' in value)) return false;
    if (!('state' in value)) return false;
    if (!('zipcode' in value)) return false;
    if (!('country' in value)) return false;
    return true;
}

export function InvoicePayorAddressFromJSON(json: any): InvoicePayorAddress {
    return InvoicePayorAddressFromJSONTyped(json, false);
}

export function InvoicePayorAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoicePayorAddress {
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

export function InvoicePayorAddressToJSON(value?: InvoicePayorAddress | null): any {
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

