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

import { PaymentScheduleItemPaymentOrder } from '../models/PaymentScheduleItemPaymentOrder';
import { HttpFile } from '../http/http';

export class PaymentScheduleItem {
    /**
    * The effective UTC ISO 8601 date that the payment will process.
    */
    'effectiveDate': string;
    /**
    * The total payment amount - in cents.
    */
    'totalPaymentAmountCents': number;
    'paymentOrder': PaymentScheduleItemPaymentOrder | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "effectiveDate",
            "baseName": "effectiveDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalPaymentAmountCents",
            "baseName": "totalPaymentAmountCents",
            "type": "number",
            "format": ""
        },
        {
            "name": "paymentOrder",
            "baseName": "paymentOrder",
            "type": "PaymentScheduleItemPaymentOrder",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentScheduleItem.attributeTypeMap;
    }

    public constructor() {
    }
}
