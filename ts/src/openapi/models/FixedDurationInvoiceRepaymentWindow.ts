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

export class FixedDurationInvoiceRepaymentWindow {
    'repaymentType': FixedDurationInvoiceRepaymentWindowRepaymentTypeEnum;
    /**
    * This amount of days after which the repayment duration is due.
    */
    'repaymentDurationDays': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "repaymentType",
            "baseName": "repaymentType",
            "type": "FixedDurationInvoiceRepaymentWindowRepaymentTypeEnum",
            "format": ""
        },
        {
            "name": "repaymentDurationDays",
            "baseName": "repaymentDurationDays",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FixedDurationInvoiceRepaymentWindow.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FixedDurationInvoiceRepaymentWindowRepaymentTypeEnum {
    FixedDuration = 'FIXED_DURATION'
}
