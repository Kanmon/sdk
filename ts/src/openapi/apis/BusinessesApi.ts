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
import { Business } from '../models/Business';
import { BusinessAlreadyExistsException } from '../models/BusinessAlreadyExistsException';
import { BusinessNotFoundException } from '../models/BusinessNotFoundException';
import { CreateBusinessRequestBody } from '../models/CreateBusinessRequestBody';
import { ForbiddenException } from '../models/ForbiddenException';
import { GetActivityLogsResponse } from '../models/GetActivityLogsResponse';
import { GetBusinessesResponse } from '../models/GetBusinessesResponse';
import { InternalServerErrorException } from '../models/InternalServerErrorException';
import { UpdateBusinessRequestBody } from '../models/UpdateBusinessRequestBody';

/**
 * no description
 */
export class BusinessesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a business
     * @param createBusinessRequestBody 
     */
    public async createBusiness(createBusinessRequestBody: CreateBusinessRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createBusinessRequestBody' is not null or undefined
        if (createBusinessRequestBody === null || createBusinessRequestBody === undefined) {
            throw new RequiredError("BusinessesApi", "createBusiness", "createBusinessRequestBody");
        }


        // Path Params
        const localVarPath = '/api/platform/v2/businesses';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createBusinessRequestBody, "CreateBusinessRequestBody", ""),
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
     * Fetch a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public async getBusiness(id: any, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("BusinessesApi", "getBusiness", "id");
        }



        // Path Params
        const localVarPath = '/api/platform/v2/businesses/{id}'
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
     * Fetch activity logs for a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public async getBusinessActivityLog(id: any, idType?: 'KANMON' | 'PLATFORM', offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("BusinessesApi", "getBusinessActivityLog", "id");
        }







        // Path Params
        const localVarPath = '/api/platform/v2/businesses/{id}/activity-logs'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (idType !== undefined) {
            requestContext.setQueryParam("idType", ObjectSerializer.serialize(idType, "'KANMON' | 'PLATFORM'", ""));
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
     * Fetch businesses
     * @param ids A comma delimited list of Kanmon’s unique IDs for businesses.
     * @param platformBusinessIds A comma delimited list of your platform’s unique IDs for businesses.
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;.
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max.
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format.
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format.
     */
    public async getBusinesses(ids?: string, platformBusinessIds?: string, offset?: number, limit?: number, createdAtStart?: string, createdAtEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/api/platform/v2/businesses';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (platformBusinessIds !== undefined) {
            requestContext.setQueryParam("platformBusinessIds", ObjectSerializer.serialize(platformBusinessIds, "string", ""));
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
     * Update a business
     * @param id Either the Kanmon business UUID or your platform’s business ID, depending on &#x60;idType&#x60;.
     * @param updateBusinessRequestBody 
     * @param idType Which ID type to query the business by. Defaults to &#x60;KANMON&#x60;. Use &#x60;PLATFORM&#x60; if you want to query by your platform’s ID.
     */
    public async updateBusiness(id: any, updateBusinessRequestBody: UpdateBusinessRequestBody, idType?: 'KANMON' | 'PLATFORM', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("BusinessesApi", "updateBusiness", "id");
        }


        // verify required parameter 'updateBusinessRequestBody' is not null or undefined
        if (updateBusinessRequestBody === null || updateBusinessRequestBody === undefined) {
            throw new RequiredError("BusinessesApi", "updateBusiness", "updateBusinessRequestBody");
        }



        // Path Params
        const localVarPath = '/api/platform/v2/businesses/{id}'
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
            ObjectSerializer.serialize(updateBusinessRequestBody, "UpdateBusinessRequestBody", ""),
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

export class BusinessesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBusiness
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBusinessWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Business >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Business = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Business", ""
            ) as Business;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: BusinessAlreadyExistsException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BusinessAlreadyExistsException", ""
            ) as BusinessAlreadyExistsException;
            throw new ApiException<BusinessAlreadyExistsException>(response.httpStatusCode, "BusinessAlreadyExistsException", body, response.headers);
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
            const body: Business = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Business", ""
            ) as Business;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBusiness
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBusinessWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Business >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Business = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Business", ""
            ) as Business;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorException", ""
            ) as InternalServerErrorException;
            throw new ApiException<InternalServerErrorException>(response.httpStatusCode, "InternalServerErrorException", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Business = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Business", ""
            ) as Business;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBusinessActivityLog
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBusinessActivityLogWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetActivityLogsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetActivityLogsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetActivityLogsResponse", ""
            ) as GetActivityLogsResponse;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InternalServerErrorException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InternalServerErrorException", ""
            ) as InternalServerErrorException;
            throw new ApiException<InternalServerErrorException>(response.httpStatusCode, "InternalServerErrorException", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetActivityLogsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetActivityLogsResponse", ""
            ) as GetActivityLogsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBusinesses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBusinessesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetBusinessesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetBusinessesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBusinessesResponse", ""
            ) as GetBusinessesResponse;
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
            const body: GetBusinessesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBusinessesResponse", ""
            ) as GetBusinessesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBusiness
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBusinessWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Business >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Business = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Business", ""
            ) as Business;
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
            const body: BusinessAlreadyExistsException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BusinessAlreadyExistsException", ""
            ) as BusinessAlreadyExistsException;
            throw new ApiException<BusinessAlreadyExistsException>(response.httpStatusCode, "BusinessAlreadyExistsException", body, response.headers);
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
            const body: Business = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Business", ""
            ) as Business;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
