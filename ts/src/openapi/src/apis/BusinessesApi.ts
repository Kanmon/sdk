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
  Business,
  BusinessAlreadyExistsException,
  BusinessNotFoundException,
  CreateBusinessRequestBody,
  ForbiddenException,
  GetActivityLogsResponse,
  GetBusinessesResponse,
  InternalServerErrorException,
  UpdateBusinessRequestBody,
} from '../models/index';
import {
    BadRequestExceptionFromJSON,
    BadRequestExceptionToJSON,
    BusinessFromJSON,
    BusinessToJSON,
    BusinessAlreadyExistsExceptionFromJSON,
    BusinessAlreadyExistsExceptionToJSON,
    BusinessNotFoundExceptionFromJSON,
    BusinessNotFoundExceptionToJSON,
    CreateBusinessRequestBodyFromJSON,
    CreateBusinessRequestBodyToJSON,
    ForbiddenExceptionFromJSON,
    ForbiddenExceptionToJSON,
    GetActivityLogsResponseFromJSON,
    GetActivityLogsResponseToJSON,
    GetBusinessesResponseFromJSON,
    GetBusinessesResponseToJSON,
    InternalServerErrorExceptionFromJSON,
    InternalServerErrorExceptionToJSON,
    UpdateBusinessRequestBodyFromJSON,
    UpdateBusinessRequestBodyToJSON,
} from '../models/index';

export interface CreateBusinessRequest {
    createBusinessRequestBody: CreateBusinessRequestBody;
}

export interface GetBusinessRequest {
    id: any;
    idType?: GetBusinessIdTypeEnum;
}

export interface GetBusinessActivityLogRequest {
    id: any;
    idType?: GetBusinessActivityLogIdTypeEnum;
    offset?: number;
    limit?: number;
    createdAtStart?: string;
    createdAtEnd?: string;
}

export interface GetBusinessesRequest {
    ids?: string;
    platformBusinessIds?: string;
    offset?: number;
    limit?: number;
    createdAtStart?: string;
    createdAtEnd?: string;
}

export interface UpdateBusinessRequest {
    id: any;
    updateBusinessRequestBody: UpdateBusinessRequestBody;
    idType?: UpdateBusinessIdTypeEnum;
}

/**
 * 
 */
export class BusinessesApi extends runtime.BaseAPI {

    /**
     * Create a business
     */
    async createBusinessRaw(requestParameters: CreateBusinessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Business>> {
        if (requestParameters['createBusinessRequestBody'] == null) {
            throw new runtime.RequiredError(
                'createBusinessRequestBody',
                'Required parameter "createBusinessRequestBody" was null or undefined when calling createBusiness().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/businesses`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateBusinessRequestBodyToJSON(requestParameters['createBusinessRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BusinessFromJSON(jsonValue));
    }

    /**
     * Create a business
     */
    async createBusiness(requestParameters: CreateBusinessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Business> {
        const response = await this.createBusinessRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch a business
     */
    async getBusinessRaw(requestParameters: GetBusinessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Business>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getBusiness().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['idType'] != null) {
            queryParameters['idType'] = requestParameters['idType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/businesses/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BusinessFromJSON(jsonValue));
    }

    /**
     * Fetch a business
     */
    async getBusiness(requestParameters: GetBusinessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Business> {
        const response = await this.getBusinessRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch activity logs for a business
     */
    async getBusinessActivityLogRaw(requestParameters: GetBusinessActivityLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetActivityLogsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getBusinessActivityLog().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['idType'] != null) {
            queryParameters['idType'] = requestParameters['idType'];
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
            path: `/api/platform/v2/businesses/{id}/activity-logs`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetActivityLogsResponseFromJSON(jsonValue));
    }

    /**
     * Fetch activity logs for a business
     */
    async getBusinessActivityLog(requestParameters: GetBusinessActivityLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetActivityLogsResponse> {
        const response = await this.getBusinessActivityLogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch businesses
     */
    async getBusinessesRaw(requestParameters: GetBusinessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetBusinessesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

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
            path: `/api/platform/v2/businesses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetBusinessesResponseFromJSON(jsonValue));
    }

    /**
     * Fetch businesses
     */
    async getBusinesses(requestParameters: GetBusinessesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetBusinessesResponse> {
        const response = await this.getBusinessesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a business
     */
    async updateBusinessRaw(requestParameters: UpdateBusinessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Business>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateBusiness().'
            );
        }

        if (requestParameters['updateBusinessRequestBody'] == null) {
            throw new runtime.RequiredError(
                'updateBusinessRequestBody',
                'Required parameter "updateBusinessRequestBody" was null or undefined when calling updateBusiness().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['idType'] != null) {
            queryParameters['idType'] = requestParameters['idType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/businesses/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateBusinessRequestBodyToJSON(requestParameters['updateBusinessRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BusinessFromJSON(jsonValue));
    }

    /**
     * Update a business
     */
    async updateBusiness(requestParameters: UpdateBusinessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Business> {
        const response = await this.updateBusinessRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetBusinessIdTypeEnum = {
    KANMON: 'KANMON',
    PLATFORM: 'PLATFORM'
} as const;
export type GetBusinessIdTypeEnum = typeof GetBusinessIdTypeEnum[keyof typeof GetBusinessIdTypeEnum];
/**
 * @export
 */
export const GetBusinessActivityLogIdTypeEnum = {
    KANMON: 'KANMON',
    PLATFORM: 'PLATFORM'
} as const;
export type GetBusinessActivityLogIdTypeEnum = typeof GetBusinessActivityLogIdTypeEnum[keyof typeof GetBusinessActivityLogIdTypeEnum];
/**
 * @export
 */
export const UpdateBusinessIdTypeEnum = {
    KANMON: 'KANMON',
    PLATFORM: 'PLATFORM'
} as const;
export type UpdateBusinessIdTypeEnum = typeof UpdateBusinessIdTypeEnum[keyof typeof UpdateBusinessIdTypeEnum];
