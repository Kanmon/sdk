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

import type { InvoiceFlowSessionTokenData } from './InvoiceFlowSessionTokenData';
import {
    instanceOfInvoiceFlowSessionTokenData,
    InvoiceFlowSessionTokenDataFromJSON,
    InvoiceFlowSessionTokenDataFromJSONTyped,
    InvoiceFlowSessionTokenDataToJSON,
} from './InvoiceFlowSessionTokenData';
import type { InvoiceFlowWithInvoiceFileSessionTokenData } from './InvoiceFlowWithInvoiceFileSessionTokenData';
import {
    instanceOfInvoiceFlowWithInvoiceFileSessionTokenData,
    InvoiceFlowWithInvoiceFileSessionTokenDataFromJSON,
    InvoiceFlowWithInvoiceFileSessionTokenDataFromJSONTyped,
    InvoiceFlowWithInvoiceFileSessionTokenDataToJSON,
} from './InvoiceFlowWithInvoiceFileSessionTokenData';

/**
 * @type CreateSessionTokenRequestBodyData
 * This will differ depending on which `component` is used.
 * @export
 */
export type CreateSessionTokenRequestBodyData = { component: 'SESSION_INVOICE_FLOW' } & InvoiceFlowSessionTokenData | { component: 'SESSION_INVOICE_FLOW_WITH_INVOICE_FILE' } & InvoiceFlowWithInvoiceFileSessionTokenData;

export function CreateSessionTokenRequestBodyDataFromJSON(json: any): CreateSessionTokenRequestBodyData {
    return CreateSessionTokenRequestBodyDataFromJSONTyped(json, false);
}

export function CreateSessionTokenRequestBodyDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSessionTokenRequestBodyData {
    if (json == null) {
        return json;
    }
    switch (json['component']) {
        case 'SESSION_INVOICE_FLOW':
            return Object.assign({}, InvoiceFlowSessionTokenDataFromJSONTyped(json, true), { component: 'SESSION_INVOICE_FLOW' } as const);
        case 'SESSION_INVOICE_FLOW_WITH_INVOICE_FILE':
            return Object.assign({}, InvoiceFlowWithInvoiceFileSessionTokenDataFromJSONTyped(json, true), { component: 'SESSION_INVOICE_FLOW_WITH_INVOICE_FILE' } as const);
        default:
            throw new Error(`No variant of CreateSessionTokenRequestBodyData exists with 'component=${json['component']}'`);
    }
}

export function CreateSessionTokenRequestBodyDataToJSON(value?: CreateSessionTokenRequestBodyData | null): any {
    if (value == null) {
        return value;
    }
    switch (value['component']) {
        case 'SESSION_INVOICE_FLOW':
            return InvoiceFlowSessionTokenDataToJSON(value);
        case 'SESSION_INVOICE_FLOW_WITH_INVOICE_FILE':
            return InvoiceFlowWithInvoiceFileSessionTokenDataToJSON(value);
        default:
            throw new Error(`No variant of CreateSessionTokenRequestBodyData exists with 'component=${value['component']}'`);
    }

}

