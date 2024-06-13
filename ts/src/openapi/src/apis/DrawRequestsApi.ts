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
  DrawRequest,
  DrawRequestNotFoundException,
  ForbiddenException,
  GetDrawRequestsResponse,
  InternalServerErrorException,
} from '../models/index';
import {
    BadRequestExceptionFromJSON,
    BadRequestExceptionToJSON,
    DrawRequestFromJSON,
    DrawRequestToJSON,
    DrawRequestNotFoundExceptionFromJSON,
    DrawRequestNotFoundExceptionToJSON,
    ForbiddenExceptionFromJSON,
    ForbiddenExceptionToJSON,
    GetDrawRequestsResponseFromJSON,
    GetDrawRequestsResponseToJSON,
    InternalServerErrorExceptionFromJSON,
    InternalServerErrorExceptionToJSON,
} from '../models/index';

export interface GetDrawRequestRequest {
    id: string;
}

export interface GetDrawRequestsRequest {
    statuses?: string;
    ids?: string;
    platformBusinessIds?: string;
    businessIds?: string;
    offset?: number;
    limit?: number;
    createdAtStart?: string;
    createdAtEnd?: string;
}

/**
 * 
 */
export class DrawRequestsApi extends runtime.BaseAPI {

    /**
     * Fetch a draw request
     */
    async getDrawRequestRaw(requestParameters: GetDrawRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DrawRequest>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getDrawRequest().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/draw-requests/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DrawRequestFromJSON(jsonValue));
    }

    /**
     * Fetch a draw request
     */
    async getDrawRequest(requestParameters: GetDrawRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DrawRequest> {
        const response = await this.getDrawRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch draw requests
     */
    async getDrawRequestsRaw(requestParameters: GetDrawRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDrawRequestsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['statuses'] != null) {
            queryParameters['statuses'] = requestParameters['statuses'];
        }

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        if (requestParameters['platformBusinessIds'] != null) {
            queryParameters['platformBusinessIds'] = requestParameters['platformBusinessIds'];
        }

        if (requestParameters['businessIds'] != null) {
            queryParameters['businessIds'] = requestParameters['businessIds'];
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
            path: `/api/platform/v2/draw-requests`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDrawRequestsResponseFromJSON(jsonValue));
    }

    /**
     * Fetch draw requests
     */
    async getDrawRequests(requestParameters: GetDrawRequestsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDrawRequestsResponse> {
        const response = await this.getDrawRequestsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}