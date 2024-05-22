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
import { BankAccountAlreadyExistException } from '../models/BankAccountAlreadyExistException';
import { BankAccountNotFoundException } from '../models/BankAccountNotFoundException';
import { BusinessBankAccount } from '../models/BusinessBankAccount';
import { BusinessNotFoundException } from '../models/BusinessNotFoundException';
import { CreateBusinessBankAccountRequestBody } from '../models/CreateBusinessBankAccountRequestBody';
import { ForbiddenException } from '../models/ForbiddenException';
import { GetBusinessBankAccountsResponse } from '../models/GetBusinessBankAccountsResponse';
import { InternalServerErrorException } from '../models/InternalServerErrorException';
import { UpdateBusinessAccountRequestBody } from '../models/UpdateBusinessAccountRequestBody';

/**
 * no description
 */
export class BankAccountsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.       Please contact Kanmon to enable access to bank account APIs.
     * Create a business bank account
     * @param createBusinessBankAccountRequestBody 
     */
    public async createBusinessBankAccount(createBusinessBankAccountRequestBody: CreateBusinessBankAccountRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createBusinessBankAccountRequestBody' is not null or undefined
        if (createBusinessBankAccountRequestBody === null || createBusinessBankAccountRequestBody === undefined) {
            throw new RequiredError("BankAccountsApi", "createBusinessBankAccount", "createBusinessBankAccountRequestBody");
        }


        // Path Params
        const localVarPath = '/api/platform/v2/bank-accounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createBusinessBankAccountRequestBody, "CreateBusinessBankAccountRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public async getBusinessBankAccount(id: string, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("BankAccountsApi", "getBusinessBankAccount", "id");
        }



        // Path Params
        const localVarPath = '/api/platform/v2/bank-accounts/{id}'
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
     * Please contact Kanmon to enable access to bank account APIs.
     * Fetch business bank accounts
     * @param ids A comma delimited list of Kanmon’s unique IDs for bank accounts.
     * @param platformBankAccountIds A comma delimited list of your platform’s unique IDs for bank accounts.
     * @param platformBusinessIds A comma delimited list of your platform’s unique business IDs for bannk accounts.
     * @param businessIds A comma delimited list of your Kanmon’s unique business IDs for bannk accounts.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public async getBusinessBankAccounts(ids?: string, platformBankAccountIds?: string, platformBusinessIds?: string, businessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/api/platform/v2/bank-accounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (platformBankAccountIds !== undefined) {
            requestContext.setQueryParam("platformBankAccountIds", ObjectSerializer.serialize(platformBankAccountIds, "string", ""));
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

    /**
     * We only support creating disbursement checking accounts at the moment. Each business can only have one disbursement checking account.         Please contact Kanmon to enable access to bank account APIs.
     * Update a business bank account
     * @param id Either the Kanmon bank account UUID or your platform’s bank account ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessAccountRequestBody 
     * @param idType Which ID type to query the bank account by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public async updateBusinessBankAccount(id: string, updateBusinessAccountRequestBody: UpdateBusinessAccountRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("BankAccountsApi", "updateBusinessBankAccount", "id");
        }


        // verify required parameter 'updateBusinessAccountRequestBody' is not null or undefined
        if (updateBusinessAccountRequestBody === null || updateBusinessAccountRequestBody === undefined) {
            throw new RequiredError("BankAccountsApi", "updateBusinessBankAccount", "updateBusinessAccountRequestBody");
        }



        // Path Params
        const localVarPath = '/api/platform/v2/bank-accounts/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (idType !== undefined) {
            requestContext.setQueryParam("idType", ObjectSerializer.serialize(idType, "'KANMON' | 'PLATFORM'", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateBusinessAccountRequestBody, "UpdateBusinessAccountRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class BankAccountsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBusinessBankAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBusinessBankAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BusinessBankAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BusinessBankAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BusinessBankAccount", ""
            ) as BusinessBankAccount;
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
            const body: BusinessNotFoundException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BusinessNotFoundException", ""
            ) as BusinessNotFoundException;
            throw new ApiException<BusinessNotFoundException>(response.httpStatusCode, "BusinessNotFoundException", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: BankAccountAlreadyExistException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankAccountAlreadyExistException", ""
            ) as BankAccountAlreadyExistException;
            throw new ApiException<BankAccountAlreadyExistException>(response.httpStatusCode, "BankAccountAlreadyExistException", body, response.headers);
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
            const body: BusinessBankAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BusinessBankAccount", ""
            ) as BusinessBankAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBusinessBankAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBusinessBankAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BusinessBankAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BusinessBankAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BusinessBankAccount", ""
            ) as BusinessBankAccount;
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
            const body: BankAccountNotFoundException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankAccountNotFoundException", ""
            ) as BankAccountNotFoundException;
            throw new ApiException<BankAccountNotFoundException>(response.httpStatusCode, "BankAccountNotFoundException", body, response.headers);
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
            const body: BusinessBankAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BusinessBankAccount", ""
            ) as BusinessBankAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBusinessBankAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBusinessBankAccountsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetBusinessBankAccountsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetBusinessBankAccountsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBusinessBankAccountsResponse", ""
            ) as GetBusinessBankAccountsResponse;
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
            const body: GetBusinessBankAccountsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBusinessBankAccountsResponse", ""
            ) as GetBusinessBankAccountsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBusinessBankAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBusinessBankAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BusinessBankAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BusinessBankAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BusinessBankAccount", ""
            ) as BusinessBankAccount;
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
            const body: BankAccountNotFoundException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankAccountNotFoundException", ""
            ) as BankAccountNotFoundException;
            throw new ApiException<BankAccountNotFoundException>(response.httpStatusCode, "BankAccountNotFoundException", body, response.headers);
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
            const body: BusinessBankAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BusinessBankAccount", ""
            ) as BusinessBankAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
