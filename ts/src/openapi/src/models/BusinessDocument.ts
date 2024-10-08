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
import type { BusinessDocumentType } from './BusinessDocumentType';
import {
    BusinessDocumentTypeFromJSON,
    BusinessDocumentTypeFromJSONTyped,
    BusinessDocumentTypeToJSON,
} from './BusinessDocumentType';

/**
 * 
 * @export
 * @interface BusinessDocument
 */
export interface BusinessDocument {
    /**
     * The UUID representing the business document in Kanmon.
     * @type {string}
     * @memberof BusinessDocument
     */
    id: string;
    /**
     * Your platform’s unique ID for the business.
     * @type {string}
     * @memberof BusinessDocument
     */
    platformBusinessId: string | null;
    /**
     * The UUID representing the business in Kanmon.
     * @type {string}
     * @memberof BusinessDocument
     */
    businessId: string;
    /**
     * 
     * @type {BusinessDocumentType}
     * @memberof BusinessDocument
     */
    documentType: BusinessDocumentType;
    /**
     * The file’s original file name.
     * @type {string}
     * @memberof BusinessDocument
     */
    originalFileName: string;
    /**
     * Creation UTC ISO 8601 timestamp of the business document.
     * @type {string}
     * @memberof BusinessDocument
     */
    createdAt: string;
    /**
     * Last updated UTC ISO 8601 timestamp of the business document.
     * @type {string}
     * @memberof BusinessDocument
     */
    updatedAt: string;
}



/**
 * Check if a given object implements the BusinessDocument interface.
 */
export function instanceOfBusinessDocument(value: object): value is BusinessDocument {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('platformBusinessId' in value) || value['platformBusinessId'] === undefined) return false;
    if (!('businessId' in value) || value['businessId'] === undefined) return false;
    if (!('documentType' in value) || value['documentType'] === undefined) return false;
    if (!('originalFileName' in value) || value['originalFileName'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function BusinessDocumentFromJSON(json: any): BusinessDocument {
    return BusinessDocumentFromJSONTyped(json, false);
}

export function BusinessDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessDocument {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'platformBusinessId': json['platformBusinessId'],
        'businessId': json['businessId'],
        'documentType': BusinessDocumentTypeFromJSON(json['documentType']),
        'originalFileName': json['originalFileName'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function BusinessDocumentToJSON(value?: BusinessDocument | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'platformBusinessId': value['platformBusinessId'],
        'businessId': value['businessId'],
        'documentType': BusinessDocumentTypeToJSON(value['documentType']),
        'originalFileName': value['originalFileName'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}

