/**
 * Kanmon Public V2 API
 * Kanmon\'s public api. Contains all of the endpoints for both capital providers and platforms
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InvoicePaymentPlan } from '../models/InvoicePaymentPlan';
import { HttpFile } from '../http/http';

export class InvoiceFinancingOfferTerms {
    'productType': InvoiceFinancingOfferTermsProductTypeEnum;
    /**
    * The total limit allowed for this offer - in cents.
    */
    'totalLimitCents': number;
    /**
    * The pricing plans available for this offer.
    */
    'pricingPlans': Array<InvoicePaymentPlan>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productType",
            "baseName": "productType",
            "type": "InvoiceFinancingOfferTermsProductTypeEnum",
            "format": ""
        },
        {
            "name": "totalLimitCents",
            "baseName": "totalLimitCents",
            "type": "number",
            "format": ""
        },
        {
            "name": "pricingPlans",
            "baseName": "pricingPlans",
            "type": "Array<InvoicePaymentPlan>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceFinancingOfferTerms.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum InvoiceFinancingOfferTermsProductTypeEnum {
    InvoiceFinancing = 'INVOICE_FINANCING'
}
