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

import { BusinessDocument } from '../models/BusinessDocument';
import { HttpFile } from '../http/http';

export class CreateBusinessDocumentsResponse {
    /**
    * The documents that were uploaded.
    */
    'documents': Array<BusinessDocument>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<BusinessDocument>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateBusinessDocumentsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
