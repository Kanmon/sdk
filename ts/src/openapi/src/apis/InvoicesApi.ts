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
  GetInvoice404Response,
  GetInvoicesResponse,
  InternalServerErrorException,
  Invoice,
} from '../models/index';
import {
    BadRequestExceptionFromJSON,
    BadRequestExceptionToJSON,
    ForbiddenExceptionFromJSON,
    ForbiddenExceptionToJSON,
    GetInvoice404ResponseFromJSON,
    GetInvoice404ResponseToJSON,
    GetInvoicesResponseFromJSON,
    GetInvoicesResponseToJSON,
    InternalServerErrorExceptionFromJSON,
    InternalServerErrorExceptionToJSON,
    InvoiceFromJSON,
    InvoiceToJSON,
} from '../models/index';

export interface GetInvoiceRequest {
    id: string;
    idType?: GetInvoiceIdTypeEnum;
}

export interface GetInvoicesRequest {
    statuses?: string;
    ids?: string;
    platformBusinessIds?: string;
    businessIds?: string;
    platformInvoiceIds?: string;
    offset?: number;
    limit?: number;
    createdAtStart?: string;
    createdAtEnd?: string;
}

/**
 * 
 */
export class InvoicesApi extends runtime.BaseAPI {

    /**
     * Fetch an invoice
     */
    async getInvoiceRaw(requestParameters: GetInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Invoice>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getInvoice().'
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
            path: `/api/platform/v2/invoices/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceFromJSON(jsonValue));
    }

    /**
     * Fetch an invoice
     */
    async getInvoice(requestParameters: GetInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Invoice> {
        const response = await this.getInvoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch invoices
     */
    async getInvoicesRaw(requestParameters: GetInvoicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetInvoicesResponse>> {
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

        if (requestParameters['platformInvoiceIds'] != null) {
            queryParameters['platformInvoiceIds'] = requestParameters['platformInvoiceIds'];
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
            path: `/api/platform/v2/invoices`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetInvoicesResponseFromJSON(jsonValue));
    }

    /**
     * Fetch invoices
     */
    async getInvoices(requestParameters: GetInvoicesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetInvoicesResponse> {
        const response = await this.getInvoicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetInvoiceIdTypeEnum = {
    KANMON: 'KANMON',
    PLATFORM: 'PLATFORM'
} as const;
export type GetInvoiceIdTypeEnum = typeof GetInvoiceIdTypeEnum[keyof typeof GetInvoiceIdTypeEnum];
