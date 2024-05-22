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
import { GetInvoice404Response } from '../models/GetInvoice404Response';
import { GetInvoicesResponse } from '../models/GetInvoicesResponse';
import { InternalServerErrorException } from '../models/InternalServerErrorException';
import { Invoice } from '../models/Invoice';

/**
 * no description
 */
export class InvoicesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fetch an invoice
     * @param id Either the Kanmon invoice UUID or your platform’s invoice ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the invoice by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public async getInvoice(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InvoicesApi", "getInvoice", "id");
        }



        // Path Params
        const localVarPath = '/api/platform/v2/invoices/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (idType !== undefined) {
            requestContext.setQueryParam("idType", ObjectSerializer.serialize(idType, "'KANMON' | 'PLATFORM'", ""));
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

    /**
     * Fetch invoices
     * @param statuses A comma delimited list of invoice statuses.
     * @param ids A comma delimited list of Kanmon’s unique IDs for invoices.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param businessIds A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param platformInvoiceIds A comma delimited list of your platforms’s unique IDs for invoices.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public async getInvoices(statuses?: string, ids?: string, platformBusinessIds?: string, businessIds?: string, platformInvoiceIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/api/platform/v2/invoices';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (statuses !== undefined) {
            requestContext.setQueryParam("statuses", ObjectSerializer.serialize(statuses, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (platformBusinessIds !== undefined) {
            requestContext.setQueryParam("platformBusinessIds", ObjectSerializer.serialize(platformBusinessIds, "string", ""));
        }

        // Query Params
        if (businessIds !== undefined) {
            requestContext.setQueryParam("businessIds", ObjectSerializer.serialize(businessIds, "string", ""));
        }

        // Query Params
        if (platformInvoiceIds !== undefined) {
            requestContext.setQueryParam("platformInvoiceIds", ObjectSerializer.serialize(platformInvoiceIds, "string", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (createdAtStart !== undefined) {
            requestContext.setQueryParam("createdAtStart", ObjectSerializer.serialize(createdAtStart, "string", ""));
        }

        // Query Params
        if (createdAtEnd !== undefined) {
            requestContext.setQueryParam("createdAtEnd", ObjectSerializer.serialize(createdAtEnd, "string", ""));
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

export class InvoicesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInvoice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInvoiceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Invoice >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Invoice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Invoice", ""
            ) as Invoice;
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
            const body: GetInvoice404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetInvoice404Response", ""
            ) as GetInvoice404Response;
            throw new ApiException<GetInvoice404Response>(response.httpStatusCode, "InvoiceNotFoundException, BusinessNotFoundException", body, response.headers);
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
            const body: Invoice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Invoice", ""
            ) as Invoice;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInvoices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInvoicesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetInvoicesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetInvoicesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetInvoicesResponse", ""
            ) as GetInvoicesResponse;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorException", ""
            ) as InternalServerErrorException;
            throw new ApiException<InternalServerErrorException>(response.httpStatusCode, "InternalServerErrorException", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetInvoicesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetInvoicesResponse", ""
            ) as GetInvoicesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
