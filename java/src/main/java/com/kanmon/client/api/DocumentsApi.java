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
import com.kanmon.client.model.CreateBusinessDocumentsResponse;
import java.io.File;
import com.kanmon.client.model.ForbiddenException;
import com.kanmon.client.model.InternalServerErrorException;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DocumentsApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public DocumentsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public DocumentsApi(ApiClient apiClient) {
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
     * Build call for createBusinessDocument
     * @param invoices Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file. (required)
     * @param businessId The unique identifier for business within Kanmon. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. (optional)
     * @param platformBusinessId The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call createBusinessDocumentCall(List<File> invoices, String businessId, String platformBusinessId, final ApiCallback _callback) throws ApiException {
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

        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/platform/v2/documents";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (invoices != null) {
            localVarFormParams.put("invoices", invoices);
        }

        if (businessId != null) {
            localVarFormParams.put("businessId", businessId);
        }

        if (platformBusinessId != null) {
            localVarFormParams.put("platformBusinessId", platformBusinessId);
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "multipart/form-data"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "Authorization" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call createBusinessDocumentValidateBeforeCall(List<File> invoices, String businessId, String platformBusinessId, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'invoices' is set
        if (invoices == null) {
            throw new ApiException("Missing the required parameter 'invoices' when calling createBusinessDocument(Async)");
        }

        return createBusinessDocumentCall(invoices, businessId, platformBusinessId, _callback);

    }

    /**
     * Upload documents for a business
     * 
     * @param invoices Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file. (required)
     * @param businessId The unique identifier for business within Kanmon. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. (optional)
     * @param platformBusinessId The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. (optional)
     * @return CreateBusinessDocumentsResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public CreateBusinessDocumentsResponse createBusinessDocument(List<File> invoices, String businessId, String platformBusinessId) throws ApiException {
        ApiResponse<CreateBusinessDocumentsResponse> localVarResp = createBusinessDocumentWithHttpInfo(invoices, businessId, platformBusinessId);
        return localVarResp.getData();
    }

    /**
     * Upload documents for a business
     * 
     * @param invoices Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file. (required)
     * @param businessId The unique identifier for business within Kanmon. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. (optional)
     * @param platformBusinessId The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. (optional)
     * @return ApiResponse&lt;CreateBusinessDocumentsResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<CreateBusinessDocumentsResponse> createBusinessDocumentWithHttpInfo(List<File> invoices, String businessId, String platformBusinessId) throws ApiException {
        okhttp3.Call localVarCall = createBusinessDocumentValidateBeforeCall(invoices, businessId, platformBusinessId, null);
        Type localVarReturnType = new TypeToken<CreateBusinessDocumentsResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Upload documents for a business (asynchronously)
     * 
     * @param invoices Invoices to be uploaded. The file format must be PDF. The limit is 10 files, 10 MB per file. (required)
     * @param businessId The unique identifier for business within Kanmon. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. (optional)
     * @param platformBusinessId The unique identifier for business in your platform. Either of &#x60;businessId&#x60; or &#x60;platformBusinessId&#x60; is required. (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call createBusinessDocumentAsync(List<File> invoices, String businessId, String platformBusinessId, final ApiCallback<CreateBusinessDocumentsResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = createBusinessDocumentValidateBeforeCall(invoices, businessId, platformBusinessId, _callback);
        Type localVarReturnType = new TypeToken<CreateBusinessDocumentsResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
