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

import type { FixedDateInvoiceRepaymentWindow } from './FixedDateInvoiceRepaymentWindow';
import {
    instanceOfFixedDateInvoiceRepaymentWindow,
    FixedDateInvoiceRepaymentWindowFromJSON,
    FixedDateInvoiceRepaymentWindowFromJSONTyped,
    FixedDateInvoiceRepaymentWindowToJSON,
} from './FixedDateInvoiceRepaymentWindow';
import type { FixedDurationInvoiceRepaymentWindow } from './FixedDurationInvoiceRepaymentWindow';
import {
    instanceOfFixedDurationInvoiceRepaymentWindow,
    FixedDurationInvoiceRepaymentWindowFromJSON,
    FixedDurationInvoiceRepaymentWindowFromJSONTyped,
    FixedDurationInvoiceRepaymentWindowToJSON,
} from './FixedDurationInvoiceRepaymentWindow';
import type { MultipleDurationInvoiceRepaymentWindow } from './MultipleDurationInvoiceRepaymentWindow';
import {
    instanceOfMultipleDurationInvoiceRepaymentWindow,
    MultipleDurationInvoiceRepaymentWindowFromJSON,
    MultipleDurationInvoiceRepaymentWindowFromJSONTyped,
    MultipleDurationInvoiceRepaymentWindowToJSON,
} from './MultipleDurationInvoiceRepaymentWindow';

/**
 * @type InvoicePaymentPlanRepaymentWindow
 * The repayment window
 * @export
 */
export type InvoicePaymentPlanRepaymentWindow = FixedDateInvoiceRepaymentWindow | FixedDurationInvoiceRepaymentWindow | MultipleDurationInvoiceRepaymentWindow;

export function InvoicePaymentPlanRepaymentWindowFromJSON(json: any): InvoicePaymentPlanRepaymentWindow {
    return InvoicePaymentPlanRepaymentWindowFromJSONTyped(json, false);
}

export function InvoicePaymentPlanRepaymentWindowFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoicePaymentPlanRepaymentWindow {
    if (json == null) {
        return json;
    }
    if (instanceOfFixedDateInvoiceRepaymentWindow(json)) {
        return FixedDateInvoiceRepaymentWindowFromJSONTyped(json, true);
    }
    if (instanceOfFixedDurationInvoiceRepaymentWindow(json)) {
        return FixedDurationInvoiceRepaymentWindowFromJSONTyped(json, true);
    }
    if (instanceOfMultipleDurationInvoiceRepaymentWindow(json)) {
        return MultipleDurationInvoiceRepaymentWindowFromJSONTyped(json, true);
    }

    return {} as any;
}

export function InvoicePaymentPlanRepaymentWindowToJSON(value?: InvoicePaymentPlanRepaymentWindow | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfFixedDateInvoiceRepaymentWindow(value)) {
        return FixedDateInvoiceRepaymentWindowToJSON(value as FixedDateInvoiceRepaymentWindow);
    }
    if (instanceOfFixedDurationInvoiceRepaymentWindow(value)) {
        return FixedDurationInvoiceRepaymentWindowToJSON(value as FixedDurationInvoiceRepaymentWindow);
    }
    if (instanceOfMultipleDurationInvoiceRepaymentWindow(value)) {
        return MultipleDurationInvoiceRepaymentWindowToJSON(value as MultipleDurationInvoiceRepaymentWindow);
    }

    return {};
}

