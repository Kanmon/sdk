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


/**
 * 
 * @export
 */
export const InvoiceStatus = {
    InvoiceCreated: 'INVOICE_CREATED',
    InvoiceFunded: 'INVOICE_FUNDED',
    InvoicePaidInFull: 'INVOICE_PAID_IN_FULL',
    Rejected: 'REJECTED',
    Defaulted: 'DEFAULTED',
    Late: 'LATE'
} as const;
export type InvoiceStatus = typeof InvoiceStatus[keyof typeof InvoiceStatus];


export function instanceOfInvoiceStatus(value: any): boolean {
    return Object.values(InvoiceStatus).includes(value);
}

export function InvoiceStatusFromJSON(json: any): InvoiceStatus {
    return InvoiceStatusFromJSONTyped(json, false);
}

export function InvoiceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceStatus {
    return json as InvoiceStatus;
}

export function InvoiceStatusToJSON(value?: InvoiceStatus | null): any {
    return value as any;
}

