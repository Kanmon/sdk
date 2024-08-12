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

import type { IntegratedMcaServicingData } from './IntegratedMcaServicingData';
import {
    instanceOfIntegratedMcaServicingData,
    IntegratedMcaServicingDataFromJSON,
    IntegratedMcaServicingDataFromJSONTyped,
    IntegratedMcaServicingDataToJSON,
} from './IntegratedMcaServicingData';
import type { InvoiceFinancingServicingData } from './InvoiceFinancingServicingData';
import {
    instanceOfInvoiceFinancingServicingData,
    InvoiceFinancingServicingDataFromJSON,
    InvoiceFinancingServicingDataFromJSONTyped,
    InvoiceFinancingServicingDataToJSON,
} from './InvoiceFinancingServicingData';
import type { LineOfCreditServicingData } from './LineOfCreditServicingData';
import {
    instanceOfLineOfCreditServicingData,
    LineOfCreditServicingDataFromJSON,
    LineOfCreditServicingDataFromJSONTyped,
    LineOfCreditServicingDataToJSON,
} from './LineOfCreditServicingData';
import type { McaServicingData } from './McaServicingData';
import {
    instanceOfMcaServicingData,
    McaServicingDataFromJSON,
    McaServicingDataFromJSONTyped,
    McaServicingDataToJSON,
} from './McaServicingData';
import type { TermLoanServicingData } from './TermLoanServicingData';
import {
    instanceOfTermLoanServicingData,
    TermLoanServicingDataFromJSON,
    TermLoanServicingDataFromJSONTyped,
    TermLoanServicingDataToJSON,
} from './TermLoanServicingData';

/**
 * @type IssuedProductServicingData
 * The data needed to service this specific type of issued product
 * @export
 */
export type IssuedProductServicingData = { productType: 'INTEGRATED_MCA' } & IntegratedMcaServicingData | { productType: 'INVOICE_FINANCING' } & InvoiceFinancingServicingData | { productType: 'LINE_OF_CREDIT' } & LineOfCreditServicingData | { productType: 'MCA' } & McaServicingData | { productType: 'TERM_LOAN' } & TermLoanServicingData;

export function IssuedProductServicingDataFromJSON(json: any): IssuedProductServicingData {
    return IssuedProductServicingDataFromJSONTyped(json, false);
}

export function IssuedProductServicingDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssuedProductServicingData {
    if (json == null) {
        return json;
    }
    switch (json['productType']) {
        case 'INTEGRATED_MCA':
            return Object.assign({}, IntegratedMcaServicingDataFromJSONTyped(json, true), { productType: 'INTEGRATED_MCA' });
        case 'INVOICE_FINANCING':
            return Object.assign({}, InvoiceFinancingServicingDataFromJSONTyped(json, true), { productType: 'INVOICE_FINANCING' });
        case 'LINE_OF_CREDIT':
            return Object.assign({}, LineOfCreditServicingDataFromJSONTyped(json, true), { productType: 'LINE_OF_CREDIT' });
        case 'MCA':
            return Object.assign({}, McaServicingDataFromJSONTyped(json, true), { productType: 'MCA' });
        case 'TERM_LOAN':
            return Object.assign({}, TermLoanServicingDataFromJSONTyped(json, true), { productType: 'TERM_LOAN' });
        default:
            throw new Error(`No variant of IssuedProductServicingData exists with 'productType=${json['productType']}'`);
    }
}

export function IssuedProductServicingDataToJSON(value?: IssuedProductServicingData | null): any {
    if (value == null) {
        return value;
    }
    switch (value['productType']) {
        case 'INTEGRATED_MCA':
            return IntegratedMcaServicingDataToJSON(value);
        case 'INVOICE_FINANCING':
            return InvoiceFinancingServicingDataToJSON(value);
        case 'LINE_OF_CREDIT':
            return LineOfCreditServicingDataToJSON(value);
        case 'MCA':
            return McaServicingDataToJSON(value);
        case 'TERM_LOAN':
            return TermLoanServicingDataToJSON(value);
        default:
            throw new Error(`No variant of IssuedProductServicingData exists with 'productType=${value['productType']}'`);
    }

}

