/*
 * Kanmon Public V2 API
 * Kanmon's public api. Contains all of the endpoints for both capital providers and platforms
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.kanmon.client.api;

import com.kanmon.client.ApiCallback;
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.ApiResponse;
import com.kanmon.client.Configuration;
import com.kanmon.client.Pair;
import com.kanmon.client.ProgressRequestBody;
import com.kanmon.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import com.kanmon.client.model.BadRequestException;
import com.kanmon.client.model.ConnectToken;
import com.kanmon.client.model.CreateConnectTokenRequestBody;
import com.kanmon.client.model.ForbiddenException;
import com.kanmon.client.model.InternalServerErrorException;
import com.kanmon.client.model.UserNotFoundException;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ConnectTokensApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public ConnectTokensApi() {
        this(Configuration.getDefaultApiClient());
    }

    public ConnectTokensApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public int getHostIndex() {
        return localHostIndex;
    }

    public void setHostIndex(int hostIndex) {
        this.localHostIndex = hostIndex;
    }

    public String getCustomBaseUrl() {
        return localCustomBaseUrl;
    }

    public void setCustomBaseUrl(String customBaseUrl) {
        this.localCustomBaseUrl = customBaseUrl;
    }

    /**
     * Build call for createConnectToken
     * @param createConnectTokenRequestBody  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> Connect token created. </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> UserNotFoundException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call createConnectTokenCall(CreateConnectTokenRequestBody createConnectTokenRequestBody, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = createConnectTokenRequestBody;

        // create path and map variables
        String localVarPath = "/api/platform/v2/connect-tokens";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "Authorization" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call createConnectTokenValidateBeforeCall(CreateConnectTokenRequestBody createConnectTokenRequestBody, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'createConnectTokenRequestBody' is set
        if (createConnectTokenRequestBody == null) {
            throw new ApiException("Missing the required parameter 'createConnectTokenRequestBody' when calling createConnectToken(Async)");
        }

        return createConnectTokenCall(createConnectTokenRequestBody, _callback);

    }

    /**
     * Create a Connect Token
     * Create a one-time use Connect Token for authenticating the user. The Connect Token expires after 24 hours. Multiple Connect Tokens can be created at the same time for a single user.
     * @param createConnectTokenRequestBody  (required)
     * @return ConnectToken
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> Connect token created. </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> UserNotFoundException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public ConnectToken createConnectToken(CreateConnectTokenRequestBody createConnectTokenRequestBody) throws ApiException {
        ApiResponse<ConnectToken> localVarResp = createConnectTokenWithHttpInfo(createConnectTokenRequestBody);
        return localVarResp.getData();
    }

    /**
     * Create a Connect Token
     * Create a one-time use Connect Token for authenticating the user. The Connect Token expires after 24 hours. Multiple Connect Tokens can be created at the same time for a single user.
     * @param createConnectTokenRequestBody  (required)
     * @return ApiResponse&lt;ConnectToken&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> Connect token created. </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> UserNotFoundException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ConnectToken> createConnectTokenWithHttpInfo(CreateConnectTokenRequestBody createConnectTokenRequestBody) throws ApiException {
        okhttp3.Call localVarCall = createConnectTokenValidateBeforeCall(createConnectTokenRequestBody, null);
        Type localVarReturnType = new TypeToken<ConnectToken>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Create a Connect Token (asynchronously)
     * Create a one-time use Connect Token for authenticating the user. The Connect Token expires after 24 hours. Multiple Connect Tokens can be created at the same time for a single user.
     * @param createConnectTokenRequestBody  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> Connect token created. </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> UserNotFoundException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call createConnectTokenAsync(CreateConnectTokenRequestBody createConnectTokenRequestBody, final ApiCallback<ConnectToken> _callback) throws ApiException {

        okhttp3.Call localVarCall = createConnectTokenValidateBeforeCall(createConnectTokenRequestBody, _callback);
        Type localVarReturnType = new TypeToken<ConnectToken>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
