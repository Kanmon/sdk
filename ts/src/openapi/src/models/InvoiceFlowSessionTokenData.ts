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
import type { SessionInvoice } from './SessionInvoice';
import {
    SessionInvoiceFromJSON,
    SessionInvoiceFromJSONTyped,
    SessionInvoiceToJSON,
} from './SessionInvoice';

/**
 * 
 * @export
 * @interface InvoiceFlowSessionTokenData
 */
export interface InvoiceFlowSessionTokenData {
    /**
     * Generates a session token for the invoice confirmation flow. This option can be used if you have all the required invoice data.
     * @type {string}
     * @memberof InvoiceFlowSessionTokenData
     */
    component: InvoiceFlowSessionTokenDataComponentEnum;
    /**
     * Details about the list of invoices which are to be created.
     * @type {Array<SessionInvoice>}
     * @memberof InvoiceFlowSessionTokenData
     */
    invoices: Array<SessionInvoice>;
}


/**
 * @export
 */
export const InvoiceFlowSessionTokenDataComponentEnum = {
    SESSION_INVOICE_FLOW: 'SESSION_INVOICE_FLOW'
} as const;
export type InvoiceFlowSessionTokenDataComponentEnum = typeof InvoiceFlowSessionTokenDataComponentEnum[keyof typeof InvoiceFlowSessionTokenDataComponentEnum];


/**
 * Check if a given object implements the InvoiceFlowSessionTokenData interface.
 */
export function instanceOfInvoiceFlowSessionTokenData(value: object): value is InvoiceFlowSessionTokenData {
    if (!('component' in value) || value['component'] === undefined) return false;
    if (!('invoices' in value) || value['invoices'] === undefined) return false;
    return true;
}

export function InvoiceFlowSessionTokenDataFromJSON(json: any): InvoiceFlowSessionTokenData {
    return InvoiceFlowSessionTokenDataFromJSONTyped(json, false);
}

export function InvoiceFlowSessionTokenDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceFlowSessionTokenData {
    if (json == null) {
        return json;
    }
    return {
        
        'component': json['component'],
        'invoices': ((json['invoices'] as Array<any>).map(SessionInvoiceFromJSON)),
    };
}

export function InvoiceFlowSessionTokenDataToJSON(value?: InvoiceFlowSessionTokenData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component': value['component'],
        'invoices': ((value['invoices'] as Array<any>).map(SessionInvoiceToJSON)),
    };
}

