// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequestException } from '../models/BadRequestException';
import { ForbiddenException } from '../models/ForbiddenException';
import { GetPaymentScheduleResponse } from '../models/GetPaymentScheduleResponse';
import { InternalServerErrorException } from '../models/InternalServerErrorException';
import { IssuedProductNotFoundException } from '../models/IssuedProductNotFoundException';
import { PaymentOrder } from '../models/PaymentOrder';
import { PaymentOrderNotFoundException } from '../models/PaymentOrderNotFoundException';
import { PaymentOrderStatus } from '../models/PaymentOrderStatus';

/**
 * no description
 */
export class PaymentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fetch a payment
     * @param id The Kanmon payment order UUID.
     */
    public async getPaymentById(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PaymentsApi", "getPaymentById", "id");
        }


        // Path Params
        const localVarPath = '/api/platform/v2/payments/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Authorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Fetch payment schedule for an issued product
     * @param id The Kanmon issued product UUID.
     * @param drawRequestIds A comma delimited list of Kanmon’s unique draw request IDs.
     * @param invoiceIds A comma delimited list of Kanmon’s unique IDs for invoices.
     * @param platformInvoiceIds A comma delimited list of your platform’s unique IDs for invoices.
     * @param direction The direction of the payment.
     * @param status The status of the payment.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     */
    public async getPaymentScheduleForAIssuedProduct(id: string, drawRequestIds?: string, invoiceIds?: string, platformInvoiceIds?: string, direction?: 'DISBURSEMENT' | 'REPAYMENT', status?: PaymentOrderStatus, offset?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PaymentsApi", "getPaymentScheduleForAIssuedProduct", "id");
        }









        // Path Params
        const localVarPath = '/api/platform/v2/issued-products/{id}/payment-schedule'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (drawRequestIds !== undefined) {
            requestContext.setQueryParam("drawRequestIds", ObjectSerializer.serialize(drawRequestIds, "string", ""));
        }

        // Query Params
        if (invoiceIds !== undefined) {
            requestContext.setQueryParam("invoiceIds", ObjectSerializer.serialize(invoiceIds, "string", ""));
        }

        // Query Params
        if (platformInvoiceIds !== undefined) {
            requestContext.setQueryParam("platformInvoiceIds", ObjectSerializer.serialize(platformInvoiceIds, "string", ""));
        }

        // Query Params
        if (direction !== undefined) {
            requestContext.setQueryParam("direction", ObjectSerializer.serialize(direction, "'DISBURSEMENT' | 'REPAYMENT'", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "PaymentOrderStatus", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Authorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PaymentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPaymentById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPaymentByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaymentOrder >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaymentOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaymentOrder", ""
            ) as PaymentOrder;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequestException", ""
            ) as BadRequestException;
            throw new ApiException<BadRequestException>(response.httpStatusCode, "BadRequestException", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ForbiddenException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ForbiddenException", ""
            ) as ForbiddenException;
            throw new ApiException<ForbiddenException>(response.httpStatusCode, "ForbiddenException", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: PaymentOrderNotFoundException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaymentOrderNotFoundException", ""
            ) as PaymentOrderNotFoundException;
            throw new ApiException<PaymentOrderNotFoundException>(response.httpStatusCode, "PaymentOrderNotFoundException", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorException", ""
            ) as InternalServerErrorException;
            throw new ApiException<InternalServerErrorException>(response.httpStatusCode, "InternalServerErrorException", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PaymentOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaymentOrder", ""
            ) as PaymentOrder;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPaymentScheduleForAIssuedProduct
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPaymentScheduleForAIssuedProductWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPaymentScheduleResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPaymentScheduleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPaymentScheduleResponse", ""
            ) as GetPaymentScheduleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequestException", ""
            ) as BadRequestException;
            throw new ApiException<BadRequestException>(response.httpStatusCode, "BadRequestException", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ForbiddenException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ForbiddenException", ""
            ) as ForbiddenException;
            throw new ApiException<ForbiddenException>(response.httpStatusCode, "ForbiddenException", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: IssuedProductNotFoundException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IssuedProductNotFoundException", ""
            ) as IssuedProductNotFoundException;
            throw new ApiException<IssuedProductNotFoundException>(response.httpStatusCode, "IssuedProductNotFoundException", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorException", ""
            ) as InternalServerErrorException;
            throw new ApiException<InternalServerErrorException>(response.httpStatusCode, "InternalServerErrorException", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetPaymentScheduleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPaymentScheduleResponse", ""
            ) as GetPaymentScheduleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
