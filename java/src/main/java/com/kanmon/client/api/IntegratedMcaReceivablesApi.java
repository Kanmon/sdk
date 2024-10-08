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
import java.math.BigDecimal;
import com.kanmon.client.model.CreateIntegratedMcaReceivable400Response;
import com.kanmon.client.model.CreateIntegratedMcaReceivable409Response;
import com.kanmon.client.model.CreateIntegratedMcaReceivableBody;
import com.kanmon.client.model.ForbiddenException;
import com.kanmon.client.model.GetIntegratedMcaReceivablesResponse;
import com.kanmon.client.model.IntegratedMcaReceivable;
import com.kanmon.client.model.InternalServerErrorException;
import com.kanmon.client.model.IssuedProductNotFoundException;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class IntegratedMcaReceivablesApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public IntegratedMcaReceivablesApi() {
        this(Configuration.getDefaultApiClient());
    }

    public IntegratedMcaReceivablesApi(ApiClient apiClient) {
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
     * Build call for createIntegratedMcaReceivable
     * @param createIntegratedMcaReceivableBody  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException, NoRemainingBalanceException, IncorrectRepaymentAmountException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> IssuedProductNotFoundException </td><td>  -  </td></tr>
        <tr><td> 409 </td><td> IncorrectProductTypeException, IntegratedMcaReceivableAlreadyExistsException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call createIntegratedMcaReceivableCall(CreateIntegratedMcaReceivableBody createIntegratedMcaReceivableBody, final ApiCallback _callback) throws ApiException {
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

        Object localVarPostBody = createIntegratedMcaReceivableBody;

        // create path and map variables
        String localVarPath = "/api/platform/v2/integrated-mca-receivables";

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
    private okhttp3.Call createIntegratedMcaReceivableValidateBeforeCall(CreateIntegratedMcaReceivableBody createIntegratedMcaReceivableBody, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'createIntegratedMcaReceivableBody' is set
        if (createIntegratedMcaReceivableBody == null) {
            throw new ApiException("Missing the required parameter 'createIntegratedMcaReceivableBody' when calling createIntegratedMcaReceivable(Async)");
        }

        return createIntegratedMcaReceivableCall(createIntegratedMcaReceivableBody, _callback);

    }

    /**
     * Create an integrated MCA receivable
     * 
     * @param createIntegratedMcaReceivableBody  (required)
     * @return IntegratedMcaReceivable
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException, NoRemainingBalanceException, IncorrectRepaymentAmountException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> IssuedProductNotFoundException </td><td>  -  </td></tr>
        <tr><td> 409 </td><td> IncorrectProductTypeException, IntegratedMcaReceivableAlreadyExistsException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public IntegratedMcaReceivable createIntegratedMcaReceivable(CreateIntegratedMcaReceivableBody createIntegratedMcaReceivableBody) throws ApiException {
        ApiResponse<IntegratedMcaReceivable> localVarResp = createIntegratedMcaReceivableWithHttpInfo(createIntegratedMcaReceivableBody);
        return localVarResp.getData();
    }

    /**
     * Create an integrated MCA receivable
     * 
     * @param createIntegratedMcaReceivableBody  (required)
     * @return ApiResponse&lt;IntegratedMcaReceivable&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException, NoRemainingBalanceException, IncorrectRepaymentAmountException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> IssuedProductNotFoundException </td><td>  -  </td></tr>
        <tr><td> 409 </td><td> IncorrectProductTypeException, IntegratedMcaReceivableAlreadyExistsException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<IntegratedMcaReceivable> createIntegratedMcaReceivableWithHttpInfo(CreateIntegratedMcaReceivableBody createIntegratedMcaReceivableBody) throws ApiException {
        okhttp3.Call localVarCall = createIntegratedMcaReceivableValidateBeforeCall(createIntegratedMcaReceivableBody, null);
        Type localVarReturnType = new TypeToken<IntegratedMcaReceivable>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Create an integrated MCA receivable (asynchronously)
     * 
     * @param createIntegratedMcaReceivableBody  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException, NoRemainingBalanceException, IncorrectRepaymentAmountException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> IssuedProductNotFoundException </td><td>  -  </td></tr>
        <tr><td> 409 </td><td> IncorrectProductTypeException, IntegratedMcaReceivableAlreadyExistsException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call createIntegratedMcaReceivableAsync(CreateIntegratedMcaReceivableBody createIntegratedMcaReceivableBody, final ApiCallback<IntegratedMcaReceivable> _callback) throws ApiException {

        okhttp3.Call localVarCall = createIntegratedMcaReceivableValidateBeforeCall(createIntegratedMcaReceivableBody, _callback);
        Type localVarReturnType = new TypeToken<IntegratedMcaReceivable>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for getAllIntegratedMcaReceivables
     * @param ids A comma delimited list of Kanmon’s unique IDs for integrated MCA receivable. (optional)
     * @param issuedProductIds A comma delimited list of Kanmon unique IDs for issued product. (optional)
     * @param transactionIds A comma delimited list of your platform’s unique IDs for transaction. (optional)
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. (optional)
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. (optional)
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. (optional)
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getAllIntegratedMcaReceivablesCall(String ids, String issuedProductIds, String transactionIds, BigDecimal offset, BigDecimal limit, String createdAtStart, String createdAtEnd, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/api/platform/v2/integrated-mca-receivables";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (ids != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("ids", ids));
        }

        if (issuedProductIds != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("issuedProductIds", issuedProductIds));
        }

        if (transactionIds != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("transactionIds", transactionIds));
        }

        if (offset != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("offset", offset));
        }

        if (limit != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("limit", limit));
        }

        if (createdAtStart != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("createdAtStart", createdAtStart));
        }

        if (createdAtEnd != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("createdAtEnd", createdAtEnd));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "Authorization" };
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call getAllIntegratedMcaReceivablesValidateBeforeCall(String ids, String issuedProductIds, String transactionIds, BigDecimal offset, BigDecimal limit, String createdAtStart, String createdAtEnd, final ApiCallback _callback) throws ApiException {
        return getAllIntegratedMcaReceivablesCall(ids, issuedProductIds, transactionIds, offset, limit, createdAtStart, createdAtEnd, _callback);

    }

    /**
     * Fetch integrated MCA receivables
     * 
     * @param ids A comma delimited list of Kanmon’s unique IDs for integrated MCA receivable. (optional)
     * @param issuedProductIds A comma delimited list of Kanmon unique IDs for issued product. (optional)
     * @param transactionIds A comma delimited list of your platform’s unique IDs for transaction. (optional)
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. (optional)
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. (optional)
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. (optional)
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. (optional)
     * @return GetIntegratedMcaReceivablesResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public GetIntegratedMcaReceivablesResponse getAllIntegratedMcaReceivables(String ids, String issuedProductIds, String transactionIds, BigDecimal offset, BigDecimal limit, String createdAtStart, String createdAtEnd) throws ApiException {
        ApiResponse<GetIntegratedMcaReceivablesResponse> localVarResp = getAllIntegratedMcaReceivablesWithHttpInfo(ids, issuedProductIds, transactionIds, offset, limit, createdAtStart, createdAtEnd);
        return localVarResp.getData();
    }

    /**
     * Fetch integrated MCA receivables
     * 
     * @param ids A comma delimited list of Kanmon’s unique IDs for integrated MCA receivable. (optional)
     * @param issuedProductIds A comma delimited list of Kanmon unique IDs for issued product. (optional)
     * @param transactionIds A comma delimited list of your platform’s unique IDs for transaction. (optional)
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. (optional)
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. (optional)
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. (optional)
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. (optional)
     * @return ApiResponse&lt;GetIntegratedMcaReceivablesResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<GetIntegratedMcaReceivablesResponse> getAllIntegratedMcaReceivablesWithHttpInfo(String ids, String issuedProductIds, String transactionIds, BigDecimal offset, BigDecimal limit, String createdAtStart, String createdAtEnd) throws ApiException {
        okhttp3.Call localVarCall = getAllIntegratedMcaReceivablesValidateBeforeCall(ids, issuedProductIds, transactionIds, offset, limit, createdAtStart, createdAtEnd, null);
        Type localVarReturnType = new TypeToken<GetIntegratedMcaReceivablesResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Fetch integrated MCA receivables (asynchronously)
     * 
     * @param ids A comma delimited list of Kanmon’s unique IDs for integrated MCA receivable. (optional)
     * @param issuedProductIds A comma delimited list of Kanmon unique IDs for issued product. (optional)
     * @param transactionIds A comma delimited list of your platform’s unique IDs for transaction. (optional)
     * @param offset The number of records to skip when performing pagination. Defaults to &#x60;0&#x60;. (optional)
     * @param limit The number of records to limit when performing pagination. Defaults to &#x60;100&#x60;, which is the max. (optional)
     * @param createdAtStart Filter for records where &#x60;createdAt&#x60; is greater than or equal to this value. ISO 8601 format. (optional)
     * @param createdAtEnd Filter for records where &#x60;createdAt&#x60; is less than or equal to this value. ISO 8601 format. (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td>  </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> BadRequestException </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> ForbiddenException </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> InternalServerErrorException </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getAllIntegratedMcaReceivablesAsync(String ids, String issuedProductIds, String transactionIds, BigDecimal offset, BigDecimal limit, String createdAtStart, String createdAtEnd, final ApiCallback<GetIntegratedMcaReceivablesResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = getAllIntegratedMcaReceivablesValidateBeforeCall(ids, issuedProductIds, transactionIds, offset, limit, createdAtStart, createdAtEnd, _callback);
        Type localVarReturnType = new TypeToken<GetIntegratedMcaReceivablesResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
