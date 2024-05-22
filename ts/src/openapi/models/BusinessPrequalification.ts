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

import { HttpFile } from '../http/http';

export class BusinessPrequalification {
    /**
    * The product that the business is prequalified for. This will be null if `isPrequalified` is false.
    */
    'product': BusinessPrequalificationProductEnum | null;
    /**
    * The UUID representing your platform in Kanmon.
    */
    'platformId': string;
    /**
    * The UUID representing the business in Kanmon.
    */
    'businessId': string | null;
    /**
    * Your platform’s unique ID for the business.
    */
    'platformBusinessId': string;
    /**
    * Whether or not the business has been prequalified.
    */
    'isPrequalified': boolean;
    /**
    * Number describing the prequalification amount of the business in cents.
    */
    'prequalifiedAmountCents': number | null;
    /**
    * Creation UTC ISO 8601 timestamp of the prequalification.
    */
    'createdAt': Date;
    /**
    * Last updated UTC ISO 8601 timestamp of the prequalification.
    */
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "product",
            "baseName": "product",
            "type": "BusinessPrequalificationProductEnum",
            "format": ""
        },
        {
            "name": "platformId",
            "baseName": "platformId",
            "type": "string",
            "format": ""
        },
        {
            "name": "businessId",
            "baseName": "businessId",
            "type": "string",
            "format": ""
        },
        {
            "name": "platformBusinessId",
            "baseName": "platformBusinessId",
            "type": "string",
            "format": ""
        },
        {
            "name": "isPrequalified",
            "baseName": "isPrequalified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "prequalifiedAmountCents",
            "baseName": "prequalifiedAmountCents",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return BusinessPrequalification.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BusinessPrequalificationProductEnum {
    InvoiceFinancing = 'INVOICE_FINANCING',
    TermLoan = 'TERM_LOAN',
    Mca = 'MCA',
    LineOfCredit = 'LINE_OF_CREDIT'
}

