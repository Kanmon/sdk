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


import * as runtime from '../runtime';
import type {
  BadRequestException,
  ForbiddenException,
  GetPrequalificationsResponse,
  InternalServerErrorException,
} from '../models/index';
import {
    BadRequestExceptionFromJSON,
    BadRequestExceptionToJSON,
    ForbiddenExceptionFromJSON,
    ForbiddenExceptionToJSON,
    GetPrequalificationsResponseFromJSON,
    GetPrequalificationsResponseToJSON,
    InternalServerErrorExceptionFromJSON,
    InternalServerErrorExceptionToJSON,
} from '../models/index';

export interface GetPrequalifiedBusinessesRequest {
    platformBusinessIds?: string;
    offset?: number;
    limit?: number;
    createdAtStart?: string;
    createdAtEnd?: string;
}

/**
 * 
 */
export class PrequalificationsApi extends runtime.BaseAPI {

    /**
     * Fetch business prequalifications
     */
    async getPrequalifiedBusinessesRaw(requestParameters: GetPrequalifiedBusinessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetPrequalificationsResponse>>> {
        const queryParameters: any = {};

        if (requestParameters['platformBusinessIds'] != null) {
            queryParameters['platformBusinessIds'] = requestParameters['platformBusinessIds'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['createdAtStart'] != null) {
            queryParameters['createdAtStart'] = requestParameters['createdAtStart'];
        }

        if (requestParameters['createdAtEnd'] != null) {
            queryParameters['createdAtEnd'] = requestParameters['createdAtEnd'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/prequalifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetPrequalificationsResponseFromJSON));
    }

    /**
     * Fetch business prequalifications
     */
    async getPrequalifiedBusinesses(requestParameters: GetPrequalifiedBusinessesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetPrequalificationsResponse>> {
        const response = await this.getPrequalifiedBusinessesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}