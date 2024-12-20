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
  ConnectToken,
  CreateConnectTokenRequestBody,
  ForbiddenException,
  InternalServerErrorException,
  UserNotFoundException,
} from '../models/index';
import {
    BadRequestExceptionFromJSON,
    BadRequestExceptionToJSON,
    ConnectTokenFromJSON,
    ConnectTokenToJSON,
    CreateConnectTokenRequestBodyFromJSON,
    CreateConnectTokenRequestBodyToJSON,
    ForbiddenExceptionFromJSON,
    ForbiddenExceptionToJSON,
    InternalServerErrorExceptionFromJSON,
    InternalServerErrorExceptionToJSON,
    UserNotFoundExceptionFromJSON,
    UserNotFoundExceptionToJSON,
} from '../models/index';

export interface CreateConnectTokenRequest {
    createConnectTokenRequestBody: CreateConnectTokenRequestBody;
}

/**
 * 
 */
export class ConnectTokensApi extends runtime.BaseAPI {

    /**
     * Create a one-time use Connect Token for authenticating the user. The Connect Token expires after 24 hours. Multiple Connect Tokens can be created at the same time for a single user.
     * Create a Connect Token
     */
    async createConnectTokenRaw(requestParameters: CreateConnectTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectToken>> {
        if (requestParameters['createConnectTokenRequestBody'] == null) {
            throw new runtime.RequiredError(
                'createConnectTokenRequestBody',
                'Required parameter "createConnectTokenRequestBody" was null or undefined when calling createConnectToken().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/connect-tokens`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateConnectTokenRequestBodyToJSON(requestParameters['createConnectTokenRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectTokenFromJSON(jsonValue));
    }

    /**
     * Create a one-time use Connect Token for authenticating the user. The Connect Token expires after 24 hours. Multiple Connect Tokens can be created at the same time for a single user.
     * Create a Connect Token
     */
    async createConnectToken(requestParameters: CreateConnectTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectToken> {
        const response = await this.createConnectTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
