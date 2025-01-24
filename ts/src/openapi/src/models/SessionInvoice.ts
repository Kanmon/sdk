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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';

/**
 * 
 * @export
 * @interface SessionInvoice
 */
export interface SessionInvoice {
    /**
     * Your platform’s unique ID for the invoice.
     * @type {string}
     * @memberof SessionInvoice
     */
    platformInvoiceId: string;
    /**
     * Your user-facing identifier for the invoice. This does not need to be unique. This may or may not be the same as your `platformInvoiceId`.
     * @type {string}
     * @memberof SessionInvoice
     */
    platformInvoiceNumber: string;
    /**
     * The invoice amount - in cents. This needs to be greater than or equal to 100.
     * @type {number}
     * @memberof SessionInvoice
     */
    invoiceAmountCents: number;
    /**
     * The date when the invoice will be paid by the payor. ISO 8601 date format. This date must be at least 7 days in the future and must be after the `invoiceIssuedDate`.
     * @type {string}
     * @memberof SessionInvoice
     */
    invoiceDueDate: string;
    /**
     * The date when the payee issued the invoice. ISO 8601 date format.
     * @type {string}
     * @memberof SessionInvoice
     */
    invoiceIssuedDate: string;
    /**
     * The email of the payor.
     * @type {string}
     * @memberof SessionInvoice
     */
    payorEmail?: string;
    /**
     * The address of the payor. The address is optional. If you provide the address, you need to provide all the required fields in the address.
     * @type {Address}
     * @memberof SessionInvoice
     */
    payorAddress?: Address;
    /**
     * `INDIVIDUAL` if the payor is a person and `BUSINESS` if the payor is a company.
     * @type {string}
     * @memberof SessionInvoice
     */
    payorType: SessionInvoicePayorTypeEnum;
    /**
     * The registered name of the payor business when the payor is a business and not an individual. Required and should only be defined if `payorType` is `BUSINESS`.
     * @type {string}
     * @memberof SessionInvoice
     */
    payorBusinessName?: string;
    /**
     * The first name of the payor when the payor is an individual and not a business. Required and should only be defined if `payorType` is `INDIVIDUAL`.
     * @type {string}
     * @memberof SessionInvoice
     */
    payorFirstName?: string;
    /**
     * The middle name of the payor when the payor is an individual and not a business. Optional and should only be defined if `payorType` is `INDIVIDUAL`.
     * @type {string}
     * @memberof SessionInvoice
     */
    payorMiddleName?: string;
    /**
     * The last name of the payor when the payor is an individual and not a business. Required and should only be defined if `payorType` is `INDIVIDUAL`.
     * @type {string}
     * @memberof SessionInvoice
     */
    payorLastName?: string;
    /**
     * The description of the goods or services in the invoice.
     * @type {string}
     * @memberof SessionInvoice
     */
    description: string;
}


/**
 * @export
 */
export const SessionInvoicePayorTypeEnum = {
    BUSINESS: 'BUSINESS',
    INDIVIDUAL: 'INDIVIDUAL'
} as const;
export type SessionInvoicePayorTypeEnum = typeof SessionInvoicePayorTypeEnum[keyof typeof SessionInvoicePayorTypeEnum];


/**
 * Check if a given object implements the SessionInvoice interface.
 */
export function instanceOfSessionInvoice(value: object): value is SessionInvoice {
    if (!('platformInvoiceId' in value) || value['platformInvoiceId'] === undefined) return false;
    if (!('platformInvoiceNumber' in value) || value['platformInvoiceNumber'] === undefined) return false;
    if (!('invoiceAmountCents' in value) || value['invoiceAmountCents'] === undefined) return false;
    if (!('invoiceDueDate' in value) || value['invoiceDueDate'] === undefined) return false;
    if (!('invoiceIssuedDate' in value) || value['invoiceIssuedDate'] === undefined) return false;
    if (!('payorType' in value) || value['payorType'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function SessionInvoiceFromJSON(json: any): SessionInvoice {
    return SessionInvoiceFromJSONTyped(json, false);
}

export function SessionInvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionInvoice {
    if (json == null) {
        return json;
    }
    return {
        
        'platformInvoiceId': json['platformInvoiceId'],
        'platformInvoiceNumber': json['platformInvoiceNumber'],
        'invoiceAmountCents': json['invoiceAmountCents'],
        'invoiceDueDate': json['invoiceDueDate'],
        'invoiceIssuedDate': json['invoiceIssuedDate'],
        'payorEmail': json['payorEmail'] == null ? undefined : json['payorEmail'],
        'payorAddress': json['payorAddress'] == null ? undefined : AddressFromJSON(json['payorAddress']),
        'payorType': json['payorType'],
        'payorBusinessName': json['payorBusinessName'] == null ? undefined : json['payorBusinessName'],
        'payorFirstName': json['payorFirstName'] == null ? undefined : json['payorFirstName'],
        'payorMiddleName': json['payorMiddleName'] == null ? undefined : json['payorMiddleName'],
        'payorLastName': json['payorLastName'] == null ? undefined : json['payorLastName'],
        'description': json['description'],
    };
}

export function SessionInvoiceToJSON(value?: SessionInvoice | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'platformInvoiceId': value['platformInvoiceId'],
        'platformInvoiceNumber': value['platformInvoiceNumber'],
        'invoiceAmountCents': value['invoiceAmountCents'],
        'invoiceDueDate': value['invoiceDueDate'],
        'invoiceIssuedDate': value['invoiceIssuedDate'],
        'payorEmail': value['payorEmail'],
        'payorAddress': AddressToJSON(value['payorAddress']),
        'payorType': value['payorType'],
        'payorBusinessName': value['payorBusinessName'],
        'payorFirstName': value['payorFirstName'],
        'payorMiddleName': value['payorMiddleName'],
        'payorLastName': value['payorLastName'],
        'description': value['description'],
    };
}

