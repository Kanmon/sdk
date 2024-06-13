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
import type { BusinessBankAccount } from './BusinessBankAccount';
import {
    BusinessBankAccountFromJSON,
    BusinessBankAccountFromJSONTyped,
    BusinessBankAccountToJSON,
} from './BusinessBankAccount';
import type { PaginationResult } from './PaginationResult';
import {
    PaginationResultFromJSON,
    PaginationResultFromJSONTyped,
    PaginationResultToJSON,
} from './PaginationResult';

/**
 * 
 * @export
 * @interface GetBusinessBankAccountsResponse
 */
export interface GetBusinessBankAccountsResponse {
    /**
     * Array of business bank accounts.
     * @type {Array<BusinessBankAccount>}
     * @memberof GetBusinessBankAccountsResponse
     */
    bankAccounts: Array<BusinessBankAccount>;
    /**
     * Pagination metadata.
     * @type {PaginationResult}
     * @memberof GetBusinessBankAccountsResponse
     */
    pagination: PaginationResult;
}

/**
 * Check if a given object implements the GetBusinessBankAccountsResponse interface.
 */
export function instanceOfGetBusinessBankAccountsResponse(value: object): boolean {
    if (!('bankAccounts' in value)) return false;
    if (!('pagination' in value)) return false;
    return true;
}

export function GetBusinessBankAccountsResponseFromJSON(json: any): GetBusinessBankAccountsResponse {
    return GetBusinessBankAccountsResponseFromJSONTyped(json, false);
}

export function GetBusinessBankAccountsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBusinessBankAccountsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'bankAccounts': ((json['bankAccounts'] as Array<any>).map(BusinessBankAccountFromJSON)),
        'pagination': PaginationResultFromJSON(json['pagination']),
    };
}

export function GetBusinessBankAccountsResponseToJSON(value?: GetBusinessBankAccountsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bankAccounts': ((value['bankAccounts'] as Array<any>).map(BusinessBankAccountToJSON)),
        'pagination': PaginationResultToJSON(value['pagination']),
    };
}
