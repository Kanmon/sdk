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
import { BusinessNotFoundException } from '../models/BusinessNotFoundException';
import { CreateEmbeddedSession409Response } from '../models/CreateEmbeddedSession409Response';
import { CreateSessionTokenRequestBody } from '../models/CreateSessionTokenRequestBody';
import { EmbeddedSession } from '../models/EmbeddedSession';
import { ForbiddenException } from '../models/ForbiddenException';
import { InternalServerErrorException } from '../models/InternalServerErrorException';

/**
 * no description
 */
export class EmbeddedSessionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create an embedded session
     * @param createSessionTokenRequestBody 
     */
    public async createEmbeddedSession(createSessionTokenRequestBody: CreateSessionTokenRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createSessionTokenRequestBody' is not null or undefined
        if (createSessionTokenRequestBody === null || createSessionTokenRequestBody === undefined) {
            throw new RequiredError("EmbeddedSessionsApi", "createEmbeddedSession", "createSessionTokenRequestBody");
        }


        // Path Params
        const localVarPath = '/api/platform/v2/embedded-session';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createSessionTokenRequestBody, "CreateSessionTokenRequestBody", ""),
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

export class EmbeddedSessionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEmbeddedSession
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEmbeddedSessionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EmbeddedSession >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: EmbeddedSession = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmbeddedSession", ""
            ) as EmbeddedSession;
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
            const body: CreateEmbeddedSession409Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateEmbeddedSession409Response", ""
            ) as CreateEmbeddedSession409Response;
            throw new ApiException<CreateEmbeddedSession409Response>(response.httpStatusCode, "BusinessHasNoInvoiceFinancingProductException, PlatformInvoiceIdAlreadyExistsForAnotherIssuedProductException", body, response.headers);
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
            const body: EmbeddedSession = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmbeddedSession", ""
            ) as EmbeddedSession;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
