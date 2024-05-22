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
import { CreateBusinessDocumentsResponse } from '../models/CreateBusinessDocumentsResponse';
import { ForbiddenException } from '../models/ForbiddenException';
import { InternalServerErrorException } from '../models/InternalServerErrorException';

/**
 * no description
 */
export class DocumentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Upload documents for a business
     * @param invoices Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file.
     * @param businessId The unique identifier for business in our system. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     * @param platformBusinessId The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required.
     */
    public async createBusinessDocument(invoices: Array<HttpFile>, businessId?: string, platformBusinessId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'invoices' is not null or undefined
        if (invoices === null || invoices === undefined) {
            throw new RequiredError("DocumentsApi", "createBusinessDocument", "invoices");
        }




        // Path Params
        const localVarPath = '/api/platform/v2/documents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (invoices) {
            // TODO: replace .append with .set
            localVarFormParams.append('invoices', invoices.join(COLLECTION_FORMATS["csv"]));
        }
        if (businessId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('businessId', businessId as any);
        }
        if (platformBusinessId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('platformBusinessId', platformBusinessId as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
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

export class DocumentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBusinessDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBusinessDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateBusinessDocumentsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateBusinessDocumentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateBusinessDocumentsResponse", ""
            ) as CreateBusinessDocumentsResponse;
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
            const body: CreateBusinessDocumentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateBusinessDocumentsResponse", ""
            ) as CreateBusinessDocumentsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
