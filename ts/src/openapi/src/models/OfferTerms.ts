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

import type { AccountsPayableFinancingOfferTerms } from './AccountsPayableFinancingOfferTerms';
import {
    instanceOfAccountsPayableFinancingOfferTerms,
    AccountsPayableFinancingOfferTermsFromJSON,
    AccountsPayableFinancingOfferTermsFromJSONTyped,
    AccountsPayableFinancingOfferTermsToJSON,
} from './AccountsPayableFinancingOfferTerms';
import type { IntegratedMcaOfferTerms } from './IntegratedMcaOfferTerms';
import {
    instanceOfIntegratedMcaOfferTerms,
    IntegratedMcaOfferTermsFromJSON,
    IntegratedMcaOfferTermsFromJSONTyped,
    IntegratedMcaOfferTermsToJSON,
} from './IntegratedMcaOfferTerms';
import type { InvoiceFinancingOfferTerms } from './InvoiceFinancingOfferTerms';
import {
    instanceOfInvoiceFinancingOfferTerms,
    InvoiceFinancingOfferTermsFromJSON,
    InvoiceFinancingOfferTermsFromJSONTyped,
    InvoiceFinancingOfferTermsToJSON,
} from './InvoiceFinancingOfferTerms';
import type { LineOfCreditOfferTerms } from './LineOfCreditOfferTerms';
import {
    instanceOfLineOfCreditOfferTerms,
    LineOfCreditOfferTermsFromJSON,
    LineOfCreditOfferTermsFromJSONTyped,
    LineOfCreditOfferTermsToJSON,
} from './LineOfCreditOfferTerms';
import type { McaOfferTerms } from './McaOfferTerms';
import {
    instanceOfMcaOfferTerms,
    McaOfferTermsFromJSON,
    McaOfferTermsFromJSONTyped,
    McaOfferTermsToJSON,
} from './McaOfferTerms';
import type { TermLoanOfferTerms } from './TermLoanOfferTerms';
import {
    instanceOfTermLoanOfferTerms,
    TermLoanOfferTermsFromJSON,
    TermLoanOfferTermsFromJSONTyped,
    TermLoanOfferTermsToJSON,
} from './TermLoanOfferTerms';

/**
 * @type OfferTerms
 * Terms of the offer.
 * @export
 */
export type OfferTerms = { productType: 'ACCOUNTS_PAYABLE_FINANCING' } & AccountsPayableFinancingOfferTerms | { productType: 'INTEGRATED_MCA' } & IntegratedMcaOfferTerms | { productType: 'INVOICE_FINANCING' } & InvoiceFinancingOfferTerms | { productType: 'LINE_OF_CREDIT' } & LineOfCreditOfferTerms | { productType: 'MCA' } & McaOfferTerms | { productType: 'TERM_LOAN' } & TermLoanOfferTerms;

export function OfferTermsFromJSON(json: any): OfferTerms {
    return OfferTermsFromJSONTyped(json, false);
}

export function OfferTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfferTerms {
    if (json == null) {
        return json;
    }
    switch (json['productType']) {
        case 'ACCOUNTS_PAYABLE_FINANCING':
            return Object.assign({}, AccountsPayableFinancingOfferTermsFromJSONTyped(json, true), { productType: 'ACCOUNTS_PAYABLE_FINANCING' } as const);
        case 'INTEGRATED_MCA':
            return Object.assign({}, IntegratedMcaOfferTermsFromJSONTyped(json, true), { productType: 'INTEGRATED_MCA' } as const);
        case 'INVOICE_FINANCING':
            return Object.assign({}, InvoiceFinancingOfferTermsFromJSONTyped(json, true), { productType: 'INVOICE_FINANCING' } as const);
        case 'LINE_OF_CREDIT':
            return Object.assign({}, LineOfCreditOfferTermsFromJSONTyped(json, true), { productType: 'LINE_OF_CREDIT' } as const);
        case 'MCA':
            return Object.assign({}, McaOfferTermsFromJSONTyped(json, true), { productType: 'MCA' } as const);
        case 'TERM_LOAN':
            return Object.assign({}, TermLoanOfferTermsFromJSONTyped(json, true), { productType: 'TERM_LOAN' } as const);
        default:
            throw new Error(`No variant of OfferTerms exists with 'productType=${json['productType']}'`);
    }
}

export function OfferTermsToJSON(value?: OfferTerms | null): any {
    if (value == null) {
        return value;
    }
    switch (value['productType']) {
        case 'ACCOUNTS_PAYABLE_FINANCING':
            return AccountsPayableFinancingOfferTermsToJSON(value);
        case 'INTEGRATED_MCA':
            return IntegratedMcaOfferTermsToJSON(value);
        case 'INVOICE_FINANCING':
            return InvoiceFinancingOfferTermsToJSON(value);
        case 'LINE_OF_CREDIT':
            return LineOfCreditOfferTermsToJSON(value);
        case 'MCA':
            return McaOfferTermsToJSON(value);
        case 'TERM_LOAN':
            return TermLoanOfferTermsToJSON(value);
        default:
            throw new Error(`No variant of OfferTerms exists with 'productType=${value['productType']}'`);
    }

}

