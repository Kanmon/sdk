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
/**
 * 
 * @export
 * @interface CreateBusinessBankAccountRequestBody
 */
export interface CreateBusinessBankAccountRequestBody {
    /**
     * Your platform’s unique business ID for the business. Either `platformBusinessId` or `businessId` is required.
     * @type {string}
     * @memberof CreateBusinessBankAccountRequestBody
     */
    platformBusinessId?: string;
    /**
     * The UUID representing the user’s business in Kanmon. Either `platformBusinessId` or `businessId` is required.
     * @type {string}
     * @memberof CreateBusinessBankAccountRequestBody
     */
    businessId?: string;
    /**
     * Your platform’s unique ID for the bank account.
     * @type {string}
     * @memberof CreateBusinessBankAccountRequestBody
     */
    platformBankAccountId: string;
    /**
     * The business defined bank account name.
     * @type {string}
     * @memberof CreateBusinessBankAccountRequestBody
     */
    accountName: string;
    /**
     * The business’s bank account number. Only digits, no formatting.
     * @type {string}
     * @memberof CreateBusinessBankAccountRequestBody
     */
    accountNumber: string;
    /**
     * The business’s bank routing number. Should be a 9 digits number, no formatting.
     * @type {string}
     * @memberof CreateBusinessBankAccountRequestBody
     */
    routingNumber: string;
    /**
     * The bank account’s type. Currently, we only support checking accounts. We may support others in the future.
     * @type {string}
     * @memberof CreateBusinessBankAccountRequestBody
     */
    accountType: CreateBusinessBankAccountRequestBodyAccountTypeEnum;
    /**
     * The bank account’s roles. Currently, we only support creating disbursement bank account. We may support others in the future.
     * @type {Array<string>}
     * @memberof CreateBusinessBankAccountRequestBody
     */
    roles: Array<CreateBusinessBankAccountRequestBodyRolesEnum>;
}


/**
 * @export
 */
export const CreateBusinessBankAccountRequestBodyAccountTypeEnum = {
    Checking: 'CHECKING'
} as const;
export type CreateBusinessBankAccountRequestBodyAccountTypeEnum = typeof CreateBusinessBankAccountRequestBodyAccountTypeEnum[keyof typeof CreateBusinessBankAccountRequestBodyAccountTypeEnum];

/**
 * @export
 */
export const CreateBusinessBankAccountRequestBodyRolesEnum = {
    Disbursement: 'DISBURSEMENT'
} as const;
export type CreateBusinessBankAccountRequestBodyRolesEnum = typeof CreateBusinessBankAccountRequestBodyRolesEnum[keyof typeof CreateBusinessBankAccountRequestBodyRolesEnum];


/**
 * Check if a given object implements the CreateBusinessBankAccountRequestBody interface.
 */
export function instanceOfCreateBusinessBankAccountRequestBody(value: object): boolean {
    if (!('platformBankAccountId' in value)) return false;
    if (!('accountName' in value)) return false;
    if (!('accountNumber' in value)) return false;
    if (!('routingNumber' in value)) return false;
    if (!('accountType' in value)) return false;
    if (!('roles' in value)) return false;
    return true;
}

export function CreateBusinessBankAccountRequestBodyFromJSON(json: any): CreateBusinessBankAccountRequestBody {
    return CreateBusinessBankAccountRequestBodyFromJSONTyped(json, false);
}

export function CreateBusinessBankAccountRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBusinessBankAccountRequestBody {
    if (json == null) {
        return json;
    }
    return {
        
        'platformBusinessId': json['platformBusinessId'] == null ? undefined : json['platformBusinessId'],
        'businessId': json['businessId'] == null ? undefined : json['businessId'],
        'platformBankAccountId': json['platformBankAccountId'],
        'accountName': json['accountName'],
        'accountNumber': json['accountNumber'],
        'routingNumber': json['routingNumber'],
        'accountType': json['accountType'],
        'roles': json['roles'],
    };
}

export function CreateBusinessBankAccountRequestBodyToJSON(value?: CreateBusinessBankAccountRequestBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'platformBusinessId': value['platformBusinessId'],
        'businessId': value['businessId'],
        'platformBankAccountId': value['platformBankAccountId'],
        'accountName': value['accountName'],
        'accountNumber': value['accountNumber'],
        'routingNumber': value['routingNumber'],
        'accountType': value['accountType'],
        'roles': value['roles'],
    };
}

