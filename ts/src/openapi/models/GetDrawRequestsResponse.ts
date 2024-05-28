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

import { DrawRequest } from '../models/DrawRequest';
import { PaginationResult } from '../models/PaginationResult';
import { HttpFile } from '../http/http';

export class GetDrawRequestsResponse {
    /**
    * Array of draw requests.
    */
    'drawRequests': Array<DrawRequest>;
    /**
    * Pagination metadata.
    */
    'pagination': PaginationResult;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "drawRequests",
            "baseName": "drawRequests",
            "type": "Array<DrawRequest>",
            "format": ""
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "PaginationResult",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetDrawRequestsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
