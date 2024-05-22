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
  GetPaymentScheduleResponse,
  InternalServerErrorException,
  IssuedProductNotFoundException,
  PaymentOrder,
  PaymentOrderNotFoundException,
  PaymentOrderStatus,
} from '../models/index';
import {
    BadRequestExceptionFromJSON,
    BadRequestExceptionToJSON,
    ForbiddenExceptionFromJSON,
    ForbiddenExceptionToJSON,
    GetPaymentScheduleResponseFromJSON,
    GetPaymentScheduleResponseToJSON,
    InternalServerErrorExceptionFromJSON,
    InternalServerErrorExceptionToJSON,
    IssuedProductNotFoundExceptionFromJSON,
    IssuedProductNotFoundExceptionToJSON,
    PaymentOrderFromJSON,
    PaymentOrderToJSON,
    PaymentOrderNotFoundExceptionFromJSON,
    PaymentOrderNotFoundExceptionToJSON,
    PaymentOrderStatusFromJSON,
    PaymentOrderStatusToJSON,
} from '../models/index';

export interface GetPaymentByIdRequest {
    id: string;
}

export interface GetPaymentScheduleForAIssuedProductRequest {
    id: string;
    drawRequestIds?: string;
    invoiceIds?: string;
    platformInvoiceIds?: string;
    direction?: GetPaymentScheduleForAIssuedProductDirectionEnum;
    status?: PaymentOrderStatus;
    offset?: number;
    limit?: number;
}

/**
 * 
 */
export class PaymentsApi extends runtime.BaseAPI {

    /**
     * Fetch a payment
     */
    async getPaymentByIdRaw(requestParameters: GetPaymentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentOrder>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/payments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentOrderFromJSON(jsonValue));
    }

    /**
     * Fetch a payment
     */
    async getPaymentById(requestParameters: GetPaymentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentOrder> {
        const response = await this.getPaymentByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch payment schedule for an issued product
     */
    async getPaymentScheduleForAIssuedProductRaw(requestParameters: GetPaymentScheduleForAIssuedProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPaymentScheduleResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentScheduleForAIssuedProduct().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['drawRequestIds'] != null) {
            queryParameters['drawRequestIds'] = requestParameters['drawRequestIds'];
        }

        if (requestParameters['invoiceIds'] != null) {
            queryParameters['invoiceIds'] = requestParameters['invoiceIds'];
        }

        if (requestParameters['platformInvoiceIds'] != null) {
            queryParameters['platformInvoiceIds'] = requestParameters['platformInvoiceIds'];
        }

        if (requestParameters['direction'] != null) {
            queryParameters['direction'] = requestParameters['direction'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/issued-products/{id}/payment-schedule`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPaymentScheduleResponseFromJSON(jsonValue));
    }

    /**
     * Fetch payment schedule for an issued product
     */
    async getPaymentScheduleForAIssuedProduct(requestParameters: GetPaymentScheduleForAIssuedProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPaymentScheduleResponse> {
        const response = await this.getPaymentScheduleForAIssuedProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetPaymentScheduleForAIssuedProductDirectionEnum = {
    Disbursement: 'DISBURSEMENT',
    Repayment: 'REPAYMENT'
} as const;
export type GetPaymentScheduleForAIssuedProductDirectionEnum = typeof GetPaymentScheduleForAIssuedProductDirectionEnum[keyof typeof GetPaymentScheduleForAIssuedProductDirectionEnum];
