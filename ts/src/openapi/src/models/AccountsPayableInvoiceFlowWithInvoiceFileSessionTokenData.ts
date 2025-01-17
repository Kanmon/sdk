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
import type { AccountsPayableSessionInvoiceWithInvoiceFile } from './AccountsPayableSessionInvoiceWithInvoiceFile';
import {
    AccountsPayableSessionInvoiceWithInvoiceFileFromJSON,
    AccountsPayableSessionInvoiceWithInvoiceFileFromJSONTyped,
    AccountsPayableSessionInvoiceWithInvoiceFileToJSON,
} from './AccountsPayableSessionInvoiceWithInvoiceFile';

/**
 * 
 * @export
 * @interface AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData
 */
export interface AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData {
    /**
     * Generates a session token for the accounts payable invoice confirmation flow. This option can be used if you do not have all the required invoice data for the SESSION_ACCOUNTS_PAYABLE_INVOICE_FLOW option. Optional data that is not provided may be collected from the user. An invoice PDF must be provided.
     * @type {string}
     * @memberof AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData
     */
    component: AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenDataComponentEnum;
    /**
     * Details about the list of invoices which are to be created.
     * @type {Array<AccountsPayableSessionInvoiceWithInvoiceFile>}
     * @memberof AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData
     */
    invoices: Array<AccountsPayableSessionInvoiceWithInvoiceFile>;
}


/**
 * @export
 */
export const AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenDataComponentEnum = {
    SESSION_ACCOUNTS_PAYABLE_INVOICE_FLOW_WITH_INVOICE_FILE: 'SESSION_ACCOUNTS_PAYABLE_INVOICE_FLOW_WITH_INVOICE_FILE'
} as const;
export type AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenDataComponentEnum = typeof AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenDataComponentEnum[keyof typeof AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenDataComponentEnum];


/**
 * Check if a given object implements the AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData interface.
 */
export function instanceOfAccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData(value: object): value is AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData {
    if (!('component' in value) || value['component'] === undefined) return false;
    if (!('invoices' in value) || value['invoices'] === undefined) return false;
    return true;
}

export function AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenDataFromJSON(json: any): AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData {
    return AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenDataFromJSONTyped(json, false);
}

export function AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData {
    if (json == null) {
        return json;
    }
    return {
        
        'component': json['component'],
        'invoices': ((json['invoices'] as Array<any>).map(AccountsPayableSessionInvoiceWithInvoiceFileFromJSON)),
    };
}

export function AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenDataToJSON(value?: AccountsPayableInvoiceFlowWithInvoiceFileSessionTokenData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component': value['component'],
        'invoices': ((value['invoices'] as Array<any>).map(AccountsPayableSessionInvoiceWithInvoiceFileToJSON)),
    };
}

