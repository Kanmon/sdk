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
  BusinessNotFoundException,
  CreateUser409Response,
  CreateUserRequestBody,
  ForbiddenException,
  GetUsersResponse,
  InternalServerErrorException,
  MergeUsersRequestBody,
  MergeUsersResponseBody,
  PrimaryBusinessOwnerAlreadyExistsForBusinessException,
  UpdateUser409Response,
  UpdateUserRequestBody,
  User,
  UserNotFoundException,
} from '../models/index';
import {
    BadRequestExceptionFromJSON,
    BadRequestExceptionToJSON,
    BusinessNotFoundExceptionFromJSON,
    BusinessNotFoundExceptionToJSON,
    CreateUser409ResponseFromJSON,
    CreateUser409ResponseToJSON,
    CreateUserRequestBodyFromJSON,
    CreateUserRequestBodyToJSON,
    ForbiddenExceptionFromJSON,
    ForbiddenExceptionToJSON,
    GetUsersResponseFromJSON,
    GetUsersResponseToJSON,
    InternalServerErrorExceptionFromJSON,
    InternalServerErrorExceptionToJSON,
    MergeUsersRequestBodyFromJSON,
    MergeUsersRequestBodyToJSON,
    MergeUsersResponseBodyFromJSON,
    MergeUsersResponseBodyToJSON,
    PrimaryBusinessOwnerAlreadyExistsForBusinessExceptionFromJSON,
    PrimaryBusinessOwnerAlreadyExistsForBusinessExceptionToJSON,
    UpdateUser409ResponseFromJSON,
    UpdateUser409ResponseToJSON,
    UpdateUserRequestBodyFromJSON,
    UpdateUserRequestBodyToJSON,
    UserFromJSON,
    UserToJSON,
    UserNotFoundExceptionFromJSON,
    UserNotFoundExceptionToJSON,
} from '../models/index';

export interface CreateUserRequest {
    createUserRequestBody: CreateUserRequestBody;
}

export interface GetAllUsersRequest {
    ids?: string;
    platformUserIds?: string;
    platformBusinessIds?: string;
    businessIds?: string;
    offset?: number;
    limit?: number;
    createdAtStart?: string;
    createdAtEnd?: string;
}

export interface GetUserRequest {
    id: string;
    idType?: GetUserIdTypeEnum;
}

export interface MergeUserIntoBusinessRequest {
    mergeUsersRequestBody: MergeUsersRequestBody;
}

export interface UpdateUserRequest {
    id: string;
    updateUserRequestBody: UpdateUserRequestBody;
    idType?: UpdateUserIdTypeEnum;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Create a user
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters['createUserRequestBody'] == null) {
            throw new runtime.RequiredError(
                'createUserRequestBody',
                'Required parameter "createUserRequestBody" was null or undefined when calling createUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserRequestBodyToJSON(requestParameters['createUserRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Create a user
     */
    async createUser(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch users
     */
    async getAllUsersRaw(requestParameters: GetAllUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsersResponse>> {
        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        if (requestParameters['platformUserIds'] != null) {
            queryParameters['platformUserIds'] = requestParameters['platformUserIds'];
        }

        if (requestParameters['platformBusinessIds'] != null) {
            queryParameters['platformBusinessIds'] = requestParameters['platformBusinessIds'];
        }

        if (requestParameters['businessIds'] != null) {
            queryParameters['businessIds'] = requestParameters['businessIds'];
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
            path: `/api/platform/v2/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUsersResponseFromJSON(jsonValue));
    }

    /**
     * Fetch users
     */
    async getAllUsers(requestParameters: GetAllUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsersResponse> {
        const response = await this.getAllUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch a user
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getUser().'
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
            path: `/api/platform/v2/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Fetch a user
     */
    async getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Users from the source business will be moved into the target business. This will only work if the source business has not started onboarding yet. After the merge, the source business will be deleted.
     * Merge users from a source business into a target business
     */
    async mergeUserIntoBusinessRaw(requestParameters: MergeUserIntoBusinessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MergeUsersResponseBody>> {
        if (requestParameters['mergeUsersRequestBody'] == null) {
            throw new runtime.RequiredError(
                'mergeUsersRequestBody',
                'Required parameter "mergeUsersRequestBody" was null or undefined when calling mergeUserIntoBusiness().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/users/merge`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MergeUsersRequestBodyToJSON(requestParameters['mergeUsersRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MergeUsersResponseBodyFromJSON(jsonValue));
    }

    /**
     * Users from the source business will be moved into the target business. This will only work if the source business has not started onboarding yet. After the merge, the source business will be deleted.
     * Merge users from a source business into a target business
     */
    async mergeUserIntoBusiness(requestParameters: MergeUserIntoBusinessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MergeUsersResponseBody> {
        const response = await this.mergeUserIntoBusinessRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a user
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateUser().'
            );
        }

        if (requestParameters['updateUserRequestBody'] == null) {
            throw new runtime.RequiredError(
                'updateUserRequestBody',
                'Required parameter "updateUserRequestBody" was null or undefined when calling updateUser().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['idType'] != null) {
            queryParameters['idType'] = requestParameters['idType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/api/platform/v2/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserRequestBodyToJSON(requestParameters['updateUserRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Update a user
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetUserIdTypeEnum = {
    KANMON: 'KANMON',
    PLATFORM: 'PLATFORM'
} as const;
export type GetUserIdTypeEnum = typeof GetUserIdTypeEnum[keyof typeof GetUserIdTypeEnum];
/**
 * @export
 */
export const UpdateUserIdTypeEnum = {
    KANMON: 'KANMON',
    PLATFORM: 'PLATFORM'
} as const;
export type UpdateUserIdTypeEnum = typeof UpdateUserIdTypeEnum[keyof typeof UpdateUserIdTypeEnum];
