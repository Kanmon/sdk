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
  CreateIntegratedMcaReceivable400Response,
  CreateIntegratedMcaReceivable409Response,
  CreateIntegratedMcaReceivableBody,
  ForbiddenException,
  GetIntegratedMcaReceivablesResponse,
  IntegratedMcaReceivable,
  InternalServerErrorException,
  IssuedProductNotFoundException,
} from '../models/index';
import {
    BadRequestExceptionFromJSON,
    BadRequestExceptionToJSON,
    CreateIntegratedMcaReceivable400ResponseFromJSON,
    CreateIntegratedMcaReceivable400ResponseToJSON,
    CreateIntegratedMcaReceivable409ResponseFromJSON,
    CreateIntegratedMcaReceivable409ResponseToJSON,
    CreateIntegratedMcaReceivableBodyFromJSON,
    CreateIntegratedMcaReceivableBodyToJSON,
    ForbiddenExceptionFromJSON,
    ForbiddenExceptionToJSON,
    GetIntegratedMcaReceivablesResponseFromJSON,
    GetIntegratedMcaReceivablesResponseToJSON,
    IntegratedMcaReceivableFromJSON,
    IntegratedMcaReceivableToJSON,
    InternalServerErrorExceptionFromJSON,
    InternalServerErrorExceptionToJSON,
    IssuedProductNotFoundExceptionFromJSON,
    IssuedProductNotFoundExceptionToJSON,
} from '../models/index';

export interface CreateIntegratedMcaReceivableRequest {
    createIntegratedMcaReceivableBody: CreateIntegratedMcaReceivableBody;
}

export interface GetAllIntegratedMcaReceivablesRequest {
    ids?: string;
    issuedProductIds?: string;
    transactionIds?: string;
    offset?: number;
    limit?: number;
    createdAtStart?: string;
    createdAtEnd?: string;
}

/**
 * 
 */
export class IntegratedMCAReceivablesApi extends runtime.BaseAPI {

    /**
     * Create an integrated MCA receivable
     */
    async createIntegratedMcaReceivableRaw(requestParameters: CreateIntegratedMcaReceivableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IntegratedMcaReceivable>> {
        if (requestParameters['createIntegratedMcaReceivableBody'] == null) {
            throw new runtime.RequiredError(
                'createIntegratedMcaReceivableBody',
                'Required parameter "createIntegratedMcaReceivableBody" was null or undefined when calling createIntegratedMcaReceivable().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/integrated-mca-receivables`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateIntegratedMcaReceivableBodyToJSON(requestParameters['createIntegratedMcaReceivableBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IntegratedMcaReceivableFromJSON(jsonValue));
    }

    /**
     * Create an integrated MCA receivable
     */
    async createIntegratedMcaReceivable(requestParameters: CreateIntegratedMcaReceivableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IntegratedMcaReceivable> {
        const response = await this.createIntegratedMcaReceivableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch integrated MCA receivables
     */
    async getAllIntegratedMcaReceivablesRaw(requestParameters: GetAllIntegratedMcaReceivablesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetIntegratedMcaReceivablesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        if (requestParameters['issuedProductIds'] != null) {
            queryParameters['issuedProductIds'] = requestParameters['issuedProductIds'];
        }

        if (requestParameters['transactionIds'] != null) {
            queryParameters['transactionIds'] = requestParameters['transactionIds'];
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
            path: `/api/platform/v2/integrated-mca-receivables`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetIntegratedMcaReceivablesResponseFromJSON(jsonValue));
    }

    /**
     * Fetch integrated MCA receivables
     */
    async getAllIntegratedMcaReceivables(requestParameters: GetAllIntegratedMcaReceivablesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetIntegratedMcaReceivablesResponse> {
        const response = await this.getAllIntegratedMcaReceivablesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
