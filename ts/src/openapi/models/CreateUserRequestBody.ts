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

import { Address } from '../models/Address';
import { HttpFile } from '../http/http';

export class CreateUserRequestBody {
    /**
    * Your platform’s unique ID for the user.
    */
    'platformUserId': string;
    /**
    * Your platform’s unique business ID for the business. Either `platformBusinessId` or `businessId` is required.
    */
    'platformBusinessId'?: string;
    /**
    * The UUID representing the user’s business in Kanmon. Either `platformBusinessId` or `businessId` is required.
    */
    'businessId'?: string;
    /**
    * The user’s email.
    */
    'email'?: string;
    /**
    * The user’s first name.
    */
    'firstName'?: string;
    /**
    * The user’s last name.
    */
    'lastName'?: string;
    /**
    * The user’s address.
    */
    'address'?: Address;
    /**
    * The user’s roles. If no roles are defined, the user will be prompted to select a role within Kanmon. <br/><br/>A primary owner is a user with the authority to issue debt on behalf of the business. <br/>This means the user can complete onboarding, receive offers, choose to accept offers, <br/>sign financing agreements, and service an active issued product. <br/><br/>An operator is a user with permission to service an active issued product. Examples are uploading invoices on <br/>behalf of the business, checking the status of payments, etc. <br /><br/>Please note Kanmon supports an additional user role called secondary owners. <br/>Secondary owners are beneficial owners of a business, like primary owners, and Kanmon <br/>must perform KYC checks for these users. Kanmon will handle creating and managing <br/>these users for KYC purposes through a separate process. <br/>
    */
    'roles'?: Array<CreateUserRequestBodyRolesEnum>;
    /**
    * Metadata from your system that you want to associate the user with.
    */
    'metadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "platformUserId",
            "baseName": "platformUserId",
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
            "name": "businessId",
            "baseName": "businessId",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<CreateUserRequestBodyRolesEnum>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUserRequestBody.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CreateUserRequestBodyRolesEnum {
    PrimaryOwner = 'PRIMARY_OWNER',
    Operator = 'OPERATOR'
}

