# ConnectTokensApi

All URIs are relative to *https://api.kanmon.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**connectToken**](ConnectTokensApi.md#connectToken) | **POST** /api/platform/v2/connect-tokens | Create a connect token |


<a id="connectToken"></a>
# **connectToken**
> ConnectToken connectToken(createConnectTokenRequestBody)

Create a connect token

### Example
```java
// Import classes:
import com.kanmon.client.ApiClient;
import com.kanmon.client.ApiException;
import com.kanmon.client.Configuration;
import com.kanmon.client.auth.*;
import com.kanmon.client.models.*;
import com.kanmon.client.api.ConnectTokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.kanmon.com");
    
    // Configure API key authorization: Authorization
    ApiKeyAuth Authorization = (ApiKeyAuth) defaultClient.getAuthentication("Authorization");
    Authorization.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Authorization.setApiKeyPrefix("Token");

    ConnectTokensApi apiInstance = new ConnectTokensApi(defaultClient);
    CreateConnectTokenRequestBody createConnectTokenRequestBody = new CreateConnectTokenRequestBody(); // CreateConnectTokenRequestBody | 
    try {
      ConnectToken result = apiInstance.connectToken(createConnectTokenRequestBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectTokensApi#connectToken");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createConnectTokenRequestBody** | [**CreateConnectTokenRequestBody**](CreateConnectTokenRequestBody.md)|  | |

### Return type

[**ConnectToken**](ConnectToken.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Connect token created. |  -  |
| **400** | BadRequestException |  -  |
| **403** | ForbiddenException |  -  |
| **404** | UserNotFoundException |  -  |
| **500** | InternalServerErrorException |  -  |

