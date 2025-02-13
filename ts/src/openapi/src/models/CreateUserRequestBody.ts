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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';

/**
 * 
 * @export
 * @interface CreateUserRequestBody
 */
export interface CreateUserRequestBody {
    /**
     * Your platform’s unique ID for the user.
     * @type {string}
     * @memberof CreateUserRequestBody
     */
    platformUserId: string;
    /**
     * Your platform’s unique business ID for the business. Either `platformBusinessId` or `businessId` is required.
     * @type {string}
     * @memberof CreateUserRequestBody
     */
    platformBusinessId?: string;
    /**
     * The UUID representing the user’s business in Kanmon. Either `platformBusinessId` or `businessId` is required.
     * @type {string}
     * @memberof CreateUserRequestBody
     */
    businessId?: string;
    /**
     * The user’s email.
     * @type {string}
     * @memberof CreateUserRequestBody
     */
    email?: string;
    /**
     * The user’s first name.
     * @type {string}
     * @memberof CreateUserRequestBody
     */
    firstName?: string;
    /**
     * The user’s last name.
     * @type {string}
     * @memberof CreateUserRequestBody
     */
    lastName?: string;
    /**
     * The user’s phone number. No formatting characters, country code is optional.
     * @type {string}
     * @memberof CreateUserRequestBody
     */
    phoneNumber?: string;
    /**
     * The user’s address. The address is optional. If you provide the address, you need to provide all the required fields in the address. The address must be a street address, not a PO Box.
     * @type {Address}
     * @memberof CreateUserRequestBody
     */
    address?: Address;
    /**
     * The user’s roles. If no roles are defined, the user will be prompted to select a role within Kanmon. <br/><br/>A primary owner is a user with the authority to issue debt on behalf of the business. <br/>This means the user can complete onboarding, receive offers, choose to accept offers, <br/>sign financing agreements, and service an active issued product. <br/><br/>An operator is a user with permission to service an active issued product. Examples are uploading invoices on <br/>behalf of the business, checking the status of payments, etc. <br /><br/>Please note Kanmon supports an additional user role called secondary owners. <br/>Secondary owners are beneficial owners of a business, like primary owners, and Kanmon <br/>must perform KYC checks for these users. Kanmon will handle creating and managing <br/>these users for KYC purposes through a separate process. <br/>
     * @type {Array<string>}
     * @memberof CreateUserRequestBody
     */
    roles?: Array<CreateUserRequestBodyRolesEnum>;
    /**
     * Metadata from your system that you want to associate the user with.
     * @type {object}
     * @memberof CreateUserRequestBody
     */
    metadata?: object;
}


/**
 * @export
 */
export const CreateUserRequestBodyRolesEnum = {
    PRIMARY_OWNER: 'PRIMARY_OWNER',
    OPERATOR: 'OPERATOR'
} as const;
export type CreateUserRequestBodyRolesEnum = typeof CreateUserRequestBodyRolesEnum[keyof typeof CreateUserRequestBodyRolesEnum];


/**
 * Check if a given object implements the CreateUserRequestBody interface.
 */
export function instanceOfCreateUserRequestBody(value: object): value is CreateUserRequestBody {
    if (!('platformUserId' in value) || value['platformUserId'] === undefined) return false;
    return true;
}

export function CreateUserRequestBodyFromJSON(json: any): CreateUserRequestBody {
    return CreateUserRequestBodyFromJSONTyped(json, false);
}

export function CreateUserRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserRequestBody {
    if (json == null) {
        return json;
    }
    return {
        
        'platformUserId': json['platformUserId'],
        'platformBusinessId': json['platformBusinessId'] == null ? undefined : json['platformBusinessId'],
        'businessId': json['businessId'] == null ? undefined : json['businessId'],
        'email': json['email'] == null ? undefined : json['email'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'phoneNumber': json['phoneNumber'] == null ? undefined : json['phoneNumber'],
        'address': json['address'] == null ? undefined : AddressFromJSON(json['address']),
        'roles': json['roles'] == null ? undefined : json['roles'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

export function CreateUserRequestBodyToJSON(value?: CreateUserRequestBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'platformUserId': value['platformUserId'],
        'platformBusinessId': value['platformBusinessId'],
        'businessId': value['businessId'],
        'email': value['email'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'phoneNumber': value['phoneNumber'],
        'address': AddressToJSON(value['address']),
        'roles': value['roles'],
        'metadata': value['metadata'],
    };
}

